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
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG, PNG & pdf is allowed!'), false);
  }
};

// const fileFilterVideo = (req, file, cb) => {
//   console.log(req.body);
//   if (file.mimetype === 'video/mp4' || file.mimetype === 'video/x-msvideo') {
//     cb(null, true);
//   } else {
//     cb(new Error('Invalid file type, only mp4 & avi is allowed!'), false);
//   }
// };

const upload = function upload(destinationPath) {
  return multer({
    // fileFilter,
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
