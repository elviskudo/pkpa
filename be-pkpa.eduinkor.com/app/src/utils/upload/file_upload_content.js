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
  // eslint-disable-next-line radix
  const fileSize = parseInt(req.headers['content-length']);
  // console.log(fileSize);
  // console.log(req.body.content_type_id);
  const content_type_id = parseInt(req.body.content_type_id, 10);
  // console.log(`chek ${content_type_id}`);
  if (content_type_id === 6) {
    if (fileSize < 10485760) { // 10MB
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type, only JPEG & PNG is allowed!'), false);
      }
    } else {
      cb(new Error('size is over limit!'), false);
    }
  } else if (content_type_id === 2 || content_type_id === 4) {
    if (fileSize < 26214400) { // 25MB
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type, only pdf is allowed!'), false);
      }
    } else {
      cb(new Error('size is over limit!'), false);
    }
  } else if (content_type_id === 1) {
    if (fileSize < 104857600) { // 100MB
      if (file.mimetype === 'video/mp4' || file.mimetype === 'video/x-msvideo') {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type, only mp4 and avi is allowed!'), false);
      }
    } else {
      cb(new Error('size is over limit!'), false);
    }
  }
};

const upload = function upload(destinationPath) {
  // console.log(limit());
  return multer({
    fileFilter,
    // limits: {
    //   fileSize: 1024 * 1024 * limit, // 10 MB (Max file size)
    // },
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

module.exports = upload;
