/* eslint-disable camelcase */
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new aws.S3();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_DEFAULT_REGION,
});

const fileFilter = (req, file, cb) => {
  let foto = '';
  let ktp = '';
  let cv = '';
  let ijazah = '';
  let sertifikat_akreditasi = '';
  if (req.files.foto) {
    foto = 'Foto';
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      // cb(new Error('Invalid file type, only JPEG, PNG is allowed!'), false);
      cb(new Error(`${foto}: Invalid file type, only JPEG, PNG is allowed!`), false);
      // cb(new ValidationError('Whoops!'));
    }
  }
  if (req.files.ktp) {
    ktp = 'KTP';
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      // cb(new Error('Invalid file type, only JPEG, PNG is allowed!'), false);
      cb(new Error(`${ktp}: Invalid file type, only JPEG, PNG is allowed!`), false);
      // cb(new ValidationError('Whoops!'));
    }
  }
  if (req.files.cv) {
    cv = 'Curriculum Vitae';
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      // cb(new Error('Invalid file type, only JPEG, PNG is allowed!'), false);
      cb(new Error(`${cv}: Invalid file type, only JPEG, PNG is allowed!`), false);
      // cb(new ValidationError('Whoops!'));
    }
  }
  if (req.files.ijazah) {
    ijazah = 'Ijazah';
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      // cb(new Error('Invalid file type, only JPEG, PNG is allowed!'), false);
      cb(new Error(`${ijazah}: Invalid file type, only JPEG, PNG is allowed!`), false);
      // cb(new ValidationError('Whoops!'));
    }
  }
  if (req.files.sertifikat_akreditasi) {
    sertifikat_akreditasi = 'Sertifikat Akreditasi';
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      // cb(new Error('Invalid file type, only JPEG, PNG is allowed!'), false);
      cb(new Error(`${sertifikat_akreditasi}: Invalid file type, only JPEG, PNG is allowed!`), false);
      // cb(new ValidationError('Whoops!'));
    }
  }
};

const upload = function upload(destinationPath) {
  return multer({
    fileFilter,
    limits: {
      fileSize: 1024 * 1024 * 10, // 10 MB (Max file size)
    },
    storage: multerS3({
      acl: 'public-read',
      s3,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      bucket: process.env.AWS_BUCKET,
      metadata(req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key(req, file, cb) {
        cb(null, `${req.userId}/${destinationPath}/${Date.now().toString()}_${file.originalname}`);
        // cb(null, Date.now().toString());
      },
    }),
  });
};

// const uploadVideo = function uploadVideo(destinationPath) {
//   return multer({
//     fileFilterVideo,
//     limits: {
//       fileSize: 1024 * 1024 * 10, // 10 MB (Max file size)
//     },
//     storage: multerS3({
//       acl: 'public-read',
//       s3,
//       contentType: multerS3.AUTO_CONTENT_TYPE,
//       bucket: process.env.AWS_BUCKET,
//       metadata(req, file, cb) {
//         cb(null, { fieldName: file.fieldname });
//       },
//       key(req, file, cb) {
//         cb(null, `${destinationPath}/${Date.now().toString()}_${file.fieldname}`);
//         // cb(null, Date.now().toString());
//       },
//     }),
//   });
// };
module.exports = upload;
