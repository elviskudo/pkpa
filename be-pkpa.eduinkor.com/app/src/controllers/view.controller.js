/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');

const moment = require('moment');
const ejs = require('ejs');
const htmlPdf = require('html-pdf');

// const { generatePDF } = require('../utils/generatePDF');
// const { generateHtmlToPdf } = require('../utils/generateHtmlToPdf');

const db = require('../models');
const { success, error } = require('../utils/response-api');
const { getStudent } = require('../utils/student');

const Student = db.student;
const User = db.users;

const createCertificateCoursePDF = async (req, res, next) => {
  const { course_id } = req.params;
  const id = req.userId;
  try {
    const q = `select pcc."id" as id, mbp."name" as package_name,
      pcc.course_id,
      mbc."name" as course_name, mbc.certificate as certificate, 
      mbcc2."name" as category_name,
      coalesce(t.total, 0) as total, coalesce(p.progress, 0) as progress,
      coalesce(t.total, 0) - coalesce(p.progress, 0) as complete,
      p.created_at
  from show_courses sc
      join package_content_course as pcc on sc.package_content_course_id = pcc.id
      join phase_universities as mbp on pcc.phase_id = mbp.id 
      join master_bank_course as mbc on pcc.course_id = mbc.id and mbc.is_publish is true
      join master_bank_content_category mbcc2 on pcc.content_category_id = mbcc2.id 
      join (select pcc.id, count(1) as total
        from package_content_course_details pccd
          join package_content_course pcc on pccd.package_content_course_id = pcc.id
        where pccd.status is true and pcc.phase_id = ?
        group by pcc.id) as t on t.id = sc.package_content_course_id 
      join (select pcc.id, count(1) as progress, max(pu.created_at) as created_at 
        from package_content_course_details pccd
          join package_content_course pcc on pccd.package_content_course_id = pcc.id
          join progress_users pu on pu.content_topic_id = pccd.content_topic_id and pu.package_content_course_id = pcc.id
          join student s on s.id = pu.student_id 
        where pccd.status is true and s.user_id = ? and pcc.phase_id = ?
        group by pcc.id) as p on p.id = sc.package_content_course_id
    where pcc.phase_id = ? and mbc.id = ?;`;

    const phaseId = await Student.max('phase_university_id', {
      where: { user_id: id },
    });
    const user = await User.findByPk(id, { attributes: ['fullname'] });
    const status = await db.sequelize.query(q, {
      replacements: [phaseId, id, phaseId, phaseId, course_id],
      type: db.sequelize.QueryTypes.SELECT,
    });
    if (status[0].complete === '0') {
      moment.locale('id');
      const data = {
        certificate: status[0].certificate,
        course_name: status[0].course_name,
        created_at: moment(status[0].created_at).format('DD MMMM YYYY'),
        fullname: user.fullname,
      };
      const src = './src/views/certificate_course.ejs';
      ejs.renderFile(src, { param: data }, {}, async (err, html) => {
        if (err) {
          console.log(err);
        } else {
          try {
            const htmlToPdfOptions = {
              type: 'PDF',
              height: '650px',
              width: '850px',
              renderDelay: 2000,
            };
            htmlPdf.create(html, htmlToPdfOptions).toStream((e, pdfStream) => {
              if (e) {
                // handle error and return a error response code
                console.log(e);
                return res.sendStatus(500);
              }
              // send a status code of 200 OK
              res.statusCode = 200;

              // once we are done reading end the response
              pdfStream.on('end', () =>
                // done reading
                // eslint-disable-next-line implicit-arrow-linebreak
                res.end());
              // pipe the contents of the PDF directly to the response
              pdfStream.pipe(res);
            });
            // const browser = await puppeteer.launch();
            // const page = await browser.newPage();

            // await page.goto(`data:text/html;charset=UTF-8,${html}`, {
            //   waitUntil: 'networkidle0',
            // });
            // const options = {
            //   // format: 'a4',
            //   height: '650px',
            //   width: '850px',
            // };
            // await page.pdf(options)
            //   .then((renderedPdfBuffer) => {
            //     res.setHeader('Content-Type', 'application/pdf');
            //     res.send(renderedPdfBuffer);
            //   })
            //   .catch(() => console.error);
            // await browser.close();
          } catch (e) {
            console.log(e);
          }
        }
      });
    }
  } catch (err) {
    next(err);
  }
};

const createCertificatePKPAPDF = async (req, res, next) => {
  try {
    const student_id = await getStudent(req.userId);
    const q = `select 
      distinct concat(
        -- s.reg_no, '.', lpad(pun.phase_no::text, 2, '0'), '-', upper(u2.slug), '.', lpad(extract(month from p.created_at)::text, 2, '0'), '-', extract(year from p.created_at)
        upper(u2.slug), '.', lpad(pun.phase_no::text, 2, '0'), '-', s.reg_no, '.', lpad(extract(month from p.created_at)::text, 2, '0'), '-', extract(year from p.created_at)
      ) as certificate_no
      , s.id
      , s.user_id
      , u.fullname
      , u.image_url
      , u.created_at
      , u.last_login
      , s.phase_university_id
      , u2.certificate 
      -- , coalesce(pu2.progress_all, 0) as progress_all, coalesce(pcc2.total_all, 0) as total_all
      , coalesce(pcc2.total_all, 0) - coalesce(pu2.progress_all, 0) as diff
      , p.created_at
      , 'Pendidikan Khusus Profesi Advokat' as course_name
      from student s
        join phase_universities pun on pun.id = s.phase_university_id
        join universities u2 on u2.id = pun.university_id 
          join users u on s.user_id = u.id 
          join progress_users pu on pu.student_id = s.id
          join package_content_course pcc on pu.package_content_course_id = pcc.id
          join show_courses sc2 on sc2.package_content_course_id = pcc.id
          join master_bank_content_category mbcc on pcc.content_category_id = mbcc.id
          join master_bank_course mbc on pcc.course_id = mbc.id
          join (select student_id, count(1) as progress_all
            from progress_users pu
            group by student_id ) pu2 on pu2.student_id = s.id
          join (select phase_id, count(1) as total_all
            from package_content_course_details pccd
              join package_content_course pcc on pccd.package_content_course_id = pcc.id
              join show_courses sc on sc.package_content_course_id = pcc.id
            where pccd.status is true
            group by pcc.phase_id ) pcc2 on pcc2.phase_id = s.phase_university_id
          join (select pcc.phase_id , max(pu.created_at) as created_at 
          from package_content_course_details pccd
            join package_content_course pcc on pccd.package_content_course_id = pcc.id
            join progress_users pu on pu.content_topic_id = pccd.content_topic_id and pu.package_content_course_id = pcc.id
            join student s on s.id = pu.student_id 
          where pccd.status is true and s.id = ?
          group by pcc.phase_id) as p on p.phase_id = s.phase_university_id 
      where s.id = ?;`;
    const data = await db.sequelize.query(q, {
      replacements: [student_id, student_id],
      type: db.sequelize.QueryTypes.SELECT,
    });
    if (data.length > 0) {
      moment.locale('id');
      const params = {
        certificate_no: data[0].certificate_no,
        certificate: data[0].certificate,
        course_name: data[0].course_name,
        image_url: data[0].image_url,
        created_at: moment(data[0].created_at).format('dddd, DD MMMM YYYY'),
        fullname: data[0].fullname,
      };
      res.send(success('Data berhasil ditemukan', params, res.statusCode));

      // res.statusCode = 200;
      // res.json(params);

      /*      const src = './src/views/certificate_pkpa.ejs';
            ejs.renderFile(src, { param: params }, {}, async (err, html) => {
              if (err) {
                console.log(err);
              } else {
                try {
                  const htmlToPdfOptions = {
                    type: 'PDF',
                    height: '650px',
                    width: '850px',
                    renderDelay: 2000,
                  };
                  htmlPdf.create(html, htmlToPdfOptions).toStream((e, pdfStream) => {
                    if (e) {
                      // handle error and return a error response code
                      console.log(e);
                      return res.sendStatus(500);
                    }
                    // send a status code of 200 OK
                    res.statusCode = 200;
      
                    // once we are done reading end the response
                    pdfStream.on('end', () =>
                    // done reading
                      // eslint-disable-next-line implicit-arrow-linebreak
                      res.end());
                    // pipe the contents of the PDF directly to the response
                    pdfStream.pipe(res);
                  });
                } catch (e) {
                  console.log(e);
                }
              }
            });*/
    }
  } catch (err) {
    next(err);
  }
};

const createCertificatePKPAPDFById = async (req, res, next) => {
  const { id } = req.params;
  console.log('id', id);
  console.log('req.params', req.params);
  try {
    const student_id = id;
    const q = `select distinct concat(s.reg_no,'.',lpad(pun.phase_no::text, 2, '0'),'-',upper(u2.slug),'.', lpad(extract(month from p.created_at)::text, 2, '0'), '-', extract(year from p.created_at)) as certificate_no, s.id, s.user_id, u.fullname, u.image_url, u.created_at, u.last_login, s.phase_university_id, u2.certificate 
    --    , coalesce(pu2.progress_all, 0) as progress_all, coalesce(pcc2.total_all, 0) as total_all
        , coalesce(pcc2.total_all, 0) - coalesce(pu2.progress_all, 0) as diff
        , p.created_at
        , 'Pendidikan Khusus Profesi Advokat' as course_name
        from student s
          join phase_universities pun on pun.id = s.phase_university_id
          join universities u2 on u2.id = pun.university_id 
            join users u on s.user_id = u.id 
            join progress_users pu on pu.student_id = s.id
            join package_content_course pcc on pu.package_content_course_id = pcc.id
            join show_courses sc2 on sc2.package_content_course_id = pcc.id
            join master_bank_content_category mbcc on pcc.content_category_id = mbcc.id
            join master_bank_course mbc on pcc.course_id = mbc.id
            join (select student_id, count(1) as progress_all
              from progress_users pu
              group by student_id ) pu2 on pu2.student_id = s.id
            join (select phase_id, count(1) as total_all
              from package_content_course_details pccd
                join package_content_course pcc on pccd.package_content_course_id = pcc.id
                join show_courses sc on sc.package_content_course_id = pcc.id
              where pccd.status is true
              group by pcc.phase_id ) pcc2 on pcc2.phase_id = s.phase_university_id
            join (select pcc.phase_id , max(pu.created_at) as created_at 
            from package_content_course_details pccd
              join package_content_course pcc on pccd.package_content_course_id = pcc.id
              join progress_users pu on pu.content_topic_id = pccd.content_topic_id and pu.package_content_course_id = pcc.id
              join student s on s.id = pu.student_id 
            where pccd.status is true and s.id = ?
            group by pcc.phase_id) as p on p.phase_id = s.phase_university_id 
        where s.id = ?;`;
    console.log('q', q)
    const data = await db.sequelize.query(q, {
      replacements: [student_id, student_id],
      type: db.sequelize.QueryTypes.SELECT,
    });
    if (data.length > 0) {
      moment.locale('id');
      const params = {
        certificate: data[0].certificate,
        course_name: data[0].course_name,
        created_at: moment(data[0].created_at).format('DD MMMM YYYY'),
        fullname: data[0].fullname,
      };
      const src = './src/views/certificate_pkpa.ejs';
      ejs.renderFile(src, { param: params }, {}, async (err, html) => {
        if (err) {
          console.log(err);
        } else {
          try {
            const htmlToPdfOptions = {
              type: 'PDF',
              height: '650px',
              width: '850px',
              renderDelay: 2000,
            };
            htmlPdf.create(html, htmlToPdfOptions).toStream((e, pdfStream) => {
              if (e) {
                // handle error and return a error response code
                console.log(e);
                return res.sendStatus(500);
              }
              // send a status code of 200 OK
              res.statusCode = 200;

              // once we are done reading end the response
              pdfStream.on('end', () =>
                // done reading
                // eslint-disable-next-line implicit-arrow-linebreak
                res.end());
              // pipe the contents of the PDF directly to the response
              pdfStream.pipe(res);
            });
          } catch (e) {
            console.log(e);
          }
        }
      });
    }
  } catch (err) {
    next(err);
  }
};
// const createCertificateCourse = async (req, res, next) => {
//   const { course_id } = req.params;
//   const id = req.userId;
//   console.log(`================================= ${id} ======================================`);
//   try {
//     const q = `select pcc."id" as id, mbp."name" as package_name,
//       pcc.course_id,
//       mbc."name" as course_name, mbc.certificate as certificate, 
//       mbcc2."name" as category_name,
//       coalesce(t.total, 0) as total, coalesce(p.progress, 0) as progress,
//       coalesce(t.total, 0) - coalesce(p.progress, 0) as complete,
//       p.created_at
//   from show_courses sc
//       join package_content_course as pcc on sc.package_content_course_id = pcc.id
//       join phase_universities as mbp on pcc.phase_id = mbp.id 
//       join master_bank_course as mbc on pcc.course_id = mbc.id and mbc.is_publish is true
//       join master_bank_content_category mbcc2 on pcc.content_category_id = mbcc2.id 
//       join (select pcc.id, count(1) as total
//         from package_content_course_details pccd
//           join package_content_course pcc on pccd.package_content_course_id = pcc.id
//         where pccd.status is true and pcc.phase_id = ?
//         group by pcc.id) as t on t.id = sc.package_content_course_id 
//       join (select pcc.id, count(1) as progress, max(pu.created_at) as created_at 
//         from package_content_course_details pccd
//           join package_content_course pcc on pccd.package_content_course_id = pcc.id
//           join progress_users pu on pu.content_topic_id = pccd.content_topic_id and pu.package_content_course_id = pcc.id
//           join student s on s.id = pu.student_id 
//         where pccd.status is true and s.user_id = ? and pcc.phase_id = ?
//         group by pcc.id) as p on p.id = sc.package_content_course_id
//     where pcc.phase_id = ? and mbc.id = ?;`;

//     const phaseId = await Student.max('phase_university_id', {
//       where: { user_id: id },
//     });
//     const user = await User.findByPk(id, { attributes: ['fullname'] });
//     const status = await db.sequelize.query(q, {
//       replacements: [phaseId, id, phaseId, phaseId, course_id],
//       type: db.sequelize.QueryTypes.SELECT,
//     });
//     console.log(status);
//     if (status[0].complete === '0') {
//       moment.locale('id');
//       const data = {
//         certificate: status[0].certificate,
//         course_name: status[0].course_name,
//         created_at: moment(status[0].created_at).format('DD MMMM YYYY'),
//         fullname: user.fullname,
//       };
//       // const pdf = await generatePDF('certificate_course', { param: data });
//       // res.set('Content-Type', 'application/pdf');
//       // res.send(pdf);

//       return res.render('certificate_course', { param: data });
//     }
//     return res.status(404).send(error('Not Found', res.statusCode, true));
//   } catch (err) {
//     next(err);
//   }
// };

// const downloadCertificateCourse = async (req, res, next) => {
//   // const id = 3;
//   try {
//     // const baseUrl = `${req.protocol}://${req.get('host')}`;
//     const url = `${process.env.BASE_URL}/view/certificate/course/show/${req.params.course_id}`;
//     // console.log(url);
//     // const filePath = path.resolve(__dirname, `../../src/public/certificate-${id}-${req.params.course_id}.pdf`);
//     // console.log(filePath);
//     const browser = await puppeteer.launch({ headless: false, devtools: true });
//     const page = await browser.newPage();

//     await page.goto(url);
//     await page.pdf({
//       format: 'a4',
//       printBackground: true, // print background
//       landscape: true,
//     })
//       .then((renderedPdfBuffer) => {
//         res.setHeader('Content-Type', 'application/pdf');
//         res.send(renderedPdfBuffer);
//       })
//       .catch(() => console.error);
//     await browser.close();
//     // res.set('Content-Type', 'application/pdf');

//     // // res.download(filePath);
//     // res.send(filePath);
//   } catch (err) {
//     next(err);
//   }
// };

const viewTest = async (req, res, next) => {
  // const src = './src/views/email/index.ejs';
  res.render('email/index.ejs');

  // ejs.renderFile(src, { }, {}, async (err, html) => {
  //   if (err) console.log(err);
  //   else {
  //     return html;
  //   }
  // });
};

module.exports = {
  createCertificatePKPAPDF,
  createCertificatePKPAPDFById,
  createCertificateCoursePDF,
  viewTest,
  // downloadCertificateCourse,
};
