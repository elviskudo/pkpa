// const db = require('../models');
// const User = db.users;
// const Like = require('../models/nosql/likeModel');
const mongoose = require('mongoose');
const Post = require('../models/nosql/forumModel');

exports.ShowPost = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.roleId === 4) {
      Post.find().sort({ _id: -1 }).then((data) => {
        const io = req.app.get('socketio');
        io.on('connection', (socket) => {
          socket.on('send-materi', (materi) => {
            io.emit('new-materi', materi);
          });
          socket.on('send-comment', (comment) => {
            io.emit('new-comment', comment);
          });
        });
        res.json({
          data,
        });
      });
    } else {
      Post.find({
        $or: [
          {
            post_target: 'everyone',
          },
          {
            'author.user_id': req.userId,
          },
        ],
      }).sort({ _id: -1 }).then((data) => {
        const io = req.app.get('socketio');
        io.on('connection', (socket) => {
          socket.on('send-materi', (materi) => {
            io.emit('new-materi', materi);
          });
          socket.on('send-comment', (comment) => {
            io.emit('new-comment', comment);
          });
        });
        return res.json({
          code: 200,
          data,
        });
      });
    }
  } catch (e) {
    return res.status(401).send({
      code: 401,
      message: 'Something Wrong!',
    });
  }
};

exports.ShowInActivity = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.roleId === 4) {
      Post.find().sort({ _id: -1 }).then((data) => {
        const io = req.app.get('socketio');
        io.on('connection', (socket) => {
          socket.on('send-materi', (materi) => {
            io.emit('new-materi', materi);
          });
          socket.on('send-comment', (comment) => {
            io.emit('new-comment', comment);
          });
        });
        res.json({
          data,
        });
      });
    } else {
      Post.aggregate([
        {
          $match: {
            $or: [
              {
                'author.user_id': req.userId,
              },
              {
                'post_detail.uid_like': { $in: [req.userId] },
              },
              {
                'post_detail.uid_disslike': { $in: [req.userId] },
              },
              {
                'comment.user.user_id': req.userId,
              },
              {
                'comment.user.uid_like': { $in: [req.userId] },
              },
              {
                'comment.recomment.user.user_id': req.userId,
              },
              {
                'comment.recomment.uid_like': { $in: [req.userId] },
              },
            ],
          },
        },
      ]).sort({ _id: -1 }).then((data) => {
        res.json({
          code: 200,
          data,
        });
      });
    }
  } catch (e) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }
};

exports.ShowPostById = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.roleId === 4) {
      Post.findById({
        _id: req.params.post_id,
      }).sort({ _id: -1 }).then((data) => {
        res.json({
          code: 200,
          data,
        });
      });
    } else {
      Post.findById({
        _id: req.params.post_id,
      }).sort({ _id: -1 }).then((data) => {
        if (data.post_target === 'dosen') {
          if (data.author.user_id === req.userId) {
            res.json({
              code: 200,
              data,
            });
          } else {
            return res.status(401).send({
              code: 401,
              message: 'Unauthorized!',
            });
          }
        } else {
          return res.json({
            code: 200,
            data,
          });
        }
      });
    }
  } catch (e) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }
};

exports.CreatePost = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.userId === req.body.user_id) {
      const post = new Post({
        post_target: req.body.post_target,
        post_heading: req.body.post_heading,
        post_value: req.body.post_value,
        author: {
          user_id: req.body.user_id,
          user_img: req.body.user_img,
          user_fullname: req.body.user_fullname,
        },
        post_detail: {
          count_like: 0,
          count_disslike: 0,
          uid_like: [],
          uid_disslike: [],
        },
        comment: [],
      });
      post.save((err) => {
        if (err) res.json(err);
        else {
          res.json({
            code: 200,
            message: 'New post created!',
            data: post,
          });
        }
      });
    } else {
      return res.status(401).send({
        code: 401,
        message: 'Unauthorized!',
      });
    }
  } catch (e) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }
};

exports.CreateLike = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.userId === req.body.user_id) {
      const data = await Post.findById({
        _id: req.body.post_id,
      });
      if (data.post_target === 'dosen') {
        if (req.userId !== '4') {
          if (data.author.user_id !== req.userId) {
            return res.status(401).send({
              message: 'Unauthorized!',
            });
          }
        }
      }

      let countLike;
      let countDisslike;

      if (req.body.is_like === true) {
        // Handle double data
        if (data.post_detail.uid_disslike.includes(req.body.user_id)) {
          countDisslike = data.post_detail.count_disslike - 1;
          data.post_detail.uid_disslike.pull(req.body.user_id);
          data.post_detail.count_disslike = countDisslike;
        }

        // Handle add new data
        countLike = data.post_detail.count_like + 1;
        data.post_detail.uid_like.push(req.body.user_id);
        data.post_detail.count_like = countLike;
      } else if (req.body.is_like === false) {
        // Handle double data
        if (data.post_detail.uid_like.includes(req.body.user_id)) {
          countLike = data.post_detail.count_like - 1;
          data.post_detail.uid_like.pull(req.body.user_id);
          data.post_detail.count_like = countLike;
        }

        // Handle add new data
        countDisslike = data.post_detail.count_disslike + 1;
        data.post_detail.uid_disslike.push(req.body.user_id);
        data.post_detail.count_disslike = countDisslike;
      } else if (req.body.is_like === 'like') {
        // Handle like to data
        countLike = data.post_detail.count_like - 1;
        data.post_detail.uid_like.pull(req.body.user_id);
        data.post_detail.count_like = countLike;
      } else if (req.body.is_like === 'disslike') {
        // Handle disslike to data
        countDisslike = data.post_detail.count_disslike - 1;
        data.post_detail.uid_disslike.pull(req.body.user_id);
        data.post_detail.count_disslike = countDisslike;
      } else {
        return res.status(401).send({
          code: 401,
          message: 'Something Wrong!',
        });
      }

      data.save((err0r) => {
        if (err0r) res.json(err0r);
        else {
          res.json({
            code: 200,
            message: 'Success!',
            data,
          });
        }
      });
    } else {
      return res.status(401).send({
        code: 401,
        message: 'Unauthorized!',
      });
    }
  } catch (e) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }
};

exports.CreateComment = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.userId === req.body.user_id) {
      const newComment = {
        user: {
          user_id: req.body.user_id,
          user_img: req.body.user_img,
          user_fullname: req.body.user_fullname,
        },
        comment_value: req.body.comment_value,
      };
      const data = await Post.findOneAndUpdate({
        _id: req.body.post_id,
      },
      {
        $push: {
          comment: {
            $each: [newComment],
            $sort: { _id: -1 },
          },
        },
      });
      console.log(data);
      data.save((err0r) => {
        if (err0r) res.json(err0r);
        else {
          res.json({
            code: 200,
            message: 'New comment created!',
            data,
          });
        }
      });
    } else {
      return res.status(401).send({
        code: 200,
        message: 'Unauthorized!',
      });
    }
  } catch (e) {
    return res.status(401).send({
      code: 200,
      message: 'Unauthorized!',
    });
  }
};

exports.CreateReComment = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.userId === req.body.user_id) {
      const postId = new mongoose.Types.ObjectId(req.body.post_id);
      const commentId = new mongoose.Types.ObjectId(req.body.comment_id);
      const datax = {
        c_id: commentId,
        head_user: {
          user_id: req.body.head_id,
          user_img: req.body.head_img,
          user_fullname: req.body.head_fullname,
        },
        user: {
          user_id: req.body.user_id,
          user_img: req.body.user_img,
          user_fullname: req.body.user_fullname,
        },
        comment_value: req.body.comment_value,
      };
      const data = await Post.findOneAndUpdate({
        _id: postId,
        'comment._id': commentId,
      },
      {
        $push: {
          'comment.$.recomment': {
            $each: [datax],
            $sort: { _id: -1 },
          },
        },
      });
      data.save();
      res.json({
        code: 200,
        message: 'New post created!',
        data,
      });
    } else {
      return res.status(401).send({
        code: 401,
        message: 'Unauthorized!',
      });
    }
  } catch (e) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }
};

exports.CreateReCommentChild = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.userId === req.body.user_id) {
      const postId = new mongoose.Types.ObjectId(req.body.post_id);
      const commentId = new mongoose.Types.ObjectId(req.body.comment_id);
      const datax = {
        c_id: commentId,
        head_user: {
          user_id: req.body.head_id,
          user_img: req.body.head_img,
          user_fullname: req.body.head_fullname,
        },
        user: {
          user_id: req.body.user_id,
          user_img: req.body.user_img,
          user_fullname: req.body.user_fullname,
        },
        comment_value: req.body.comment_value,
      };

      const data = await Post.findOneAndUpdate({
        _id: postId,
        'comment.recomment._id': commentId,
      },
      {
        $push: {
          'comment.$.recomment': {
            $each: [datax],
            $sort: { _id: -1 },
          },
        },
      });
      data.save();
      res.json({
        code: 200,
        message: 'New post created!',
        data,
      });
    } else {
      return res.status(401).send({
        code: 401,
        message: 'Unauthorized!',
      });
    }
  } catch (e) {
    return res.status(401).send({
      message: 'Unauthorized!',
    });
  }
};

exports.CreateLikeComment = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.userId === req.body.user_id) {
      const postId = new mongoose.Types.ObjectId(req.body.post_id);
      const commentId = new mongoose.Types.ObjectId(req.body.comment_id);
      await Post.findOneAndUpdate({
        _id: postId,
        'comment._id': commentId,
      },
      {
        $pull: {
          'comment.$.uid_like': req.body.user_id,
        },
      },
      {
        new: true,
      }).then(async (filter) => {
        filter.save();
        const data = await Post.findOneAndUpdate({
          _id: postId,
          'comment._id': commentId,
        },
        {
          $push: {
            'comment.$.uid_like': [req.body.user_id],
          },
        },
        {
          new: true,
        });

        data.save();
        res.json({
          code: 200,
          message: 'New like created!',
          data,
        });
      });
    } else {
      return res.status(401).send({
        code: 401,
        message: 'Unauthorized!',
      });
    }
  } catch (e) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }
};

exports.CreateLikeReComment = async (req, res) => {
  if (!req.userId || !req.roleId) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }

  try {
    if (req.userId === req.body.user_id) {
      const postId = new mongoose.Types.ObjectId(req.body.post_id);
      const commentId = new mongoose.Types.ObjectId(req.body.comment_id);
      await Post.findOneAndUpdate({
        _id: postId,
        'comment.recomment._id': commentId,
      },
      {
        $pull: {
          'comment.$.recomment.$[element].uid_like': req.body.user_id,
        },
      },
      {
        arrayFilters: [{ 'element._id': commentId }],
        upsert: true,
        new: true,
      }).then(async (filter) => {
        filter.save();
        const data = await Post.findOneAndUpdate({
          _id: postId,
          'comment.recomment._id': commentId,
        },
        {
          $push: {
            'comment.$.recomment.$[element].uid_like': { $each: [req.body.user_id] },
          },
        },
        {
          arrayFilters: [{ 'element._id': commentId }],
          new: true,
          upsert: true,
        }).exec().catch((e) => {
          console.log(e);
        });
        data.save();
        res.json({
          code: 200,
          data,
        });
      });
    } else {
      return res.status(401).send({
        code: 401,
        message: 'Unauthorized!',
      });
    }
  } catch (e) {
    return res.status(401).send({
      code: 401,
      message: 'Unauthorized!',
    });
  }
};

// Example If Users Edit Data, Complete to all fields
exports.ExampleUpdateUser = async (req, res) => {
  await Post.updateMany({
    _id: new mongoose.Types.ObjectId(req.body.post_id),
    'author.user_id': req.body.user_id,
  },
  {
    $set: {
      'author.user_fullname': req.body.user_fullname,
      'author.user_img': req.body.user_img,
    },
  }).then(() => {
    Post.updateMany({
      _id: new mongoose.Types.ObjectId(req.body.post_id),
      'comment.user.user_id': req.body.user_id,
    },
    {
      $set: {
        'comment.$.user.user_fullname': req.body.user_fullname,
        'comment.$.user.user_img': req.body.user_img,
      },
    }).then(() => {
      Post.updateMany({
        _id: new mongoose.Types.ObjectId(req.body.post_id),
        'comment.head_user.user_id': req.body.user_id,
      },
      {
        $set: {
          'comment.$.head_user.user_fullname': req.body.user_fullname,
          'comment.$.head_user.user_img': req.body.user_img,
        },
      }).then(() => {
        Post.updateMany({
          _id: new mongoose.Types.ObjectId(req.body.post_id),
          'comment.recomment.user.user_id': req.body.user_id,
        },
        {
          $set: {
            'comment.$[].recomment.$[].user.user_fullname': req.body.user_fullname,
            'comment.$[].recomment.$[].user.user_img': req.body.user_img,
          },
        }).then(() => {
          Post.updateMany({
            _id: new mongoose.Types.ObjectId(req.body.post_id),
            'comment.recomment.head_user.user_id': req.body.user_id,
          },
          {
            $set: {
              'comment.$[].recomment.$[].head_user.user_fullname': req.body.user_fullname,
              'comment.$[].recomment.$[].head_user.user_img': req.body.user_img,
            },
          }).then(() => {
            res.json({
              status: 'Success',
              message: 'User Update Success!',
            });
          });
        });
      });
    });
  });
};

// Maybe can use in next time
// await Post.aggregate([
//   {
//     $match: {
//       _id: postId,
//     },
//   },
//   {
//     $unwind: '$comment',
//   },
//   {
//     $unwind: {
//       path: '$comment.recomment',
//     },
//   },
//   {
//     $match: {
//       'comment.recomment._id': commentId,
//     },
//   },
// ]).then((filter) => {
//   const tmp_like = [];
//   const uidLikeRecent = filter[0].comment.recomment.uid_like[0];
//   tmp_like.push(uidLikeRecent);
//   res.json({
//     message: 'gak ada',
//     diminta: req.body.user_id,
//     data: tmp_like,
//   });
// });
// };
