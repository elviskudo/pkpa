const jwt = require('jsonwebtoken');
const db = require('../models');

// const User = db.users;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (typeof req.headers.authorization !== 'string') {
    res.sendStatus(400);
    return;
  }
  const bearer = token.split(' ');
  const tokenOnly = bearer[1];
  if (!tokenOnly) {
    return res.status(403).send({
      message: 'No token provided',
    });
  }

  return jwt.verify(tokenOnly, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      });
    }
    console.log(`======================${JSON.stringify(decoded)}=========================`);
    req.userId = decoded.id;
    req.roleId = decoded.role_id;
    req.roleName = decoded.role_name;
    return next();
  });
};

const isSuperAdmin = async (req, res, next) => {
  try {
    const user = await db.sequelize.query('select r.name \
          from user_role ur \
            join users u on ur.user_id = u.id \
            join roles r on ur.role_id = r.id \
          where u.id = :id; \
        ', { replacements: { id: req.userId }, type: db.sequelize.QueryTypes.SELECT });
    console.log(user);
    if (user != null) {
      if ((user.find((x) => x.name === 'superadmin' || x.name === 'admin' || x.name === 'tutor'))) {
        return next();
      }
      return res.status(403).send({
        message: 'Require Super Admin Role!',
      });
    }
    return res.status(401).send({
      message: 'Token expired!',
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const isUser = async (req, res, next) => {
  const user = await db.sequelize.query('select r.name \
          from user_role ur \
            join users u on ur.user_id = u.id \
            join roles r on ur.role_id = r.id \
          where u.id = :id; \
        ', { replacements: { id: req.userId }, type: db.sequelize.QueryTypes.SELECT });
  console.log(user);
  if (user != null) {
    if (user.find((x) => x.name === 'user')) {
      return next();
    }
    return res.status(403).send({
      message: 'Require User Role!',
    });
  }
  return res.status(401).send({
    message: 'Token expired!',
  });
};

const isAdmin = async (req, res, next) => {
  const user = await db.sequelize.query('select r.name \
          from user_role ur \
            join users u on ur.user_id = u.id \
            join roles r on ur.role_id = r.id \
          where u.id = :id; \
        ', { replacements: { id: req.userId }, type: db.sequelize.QueryTypes.SELECT });
  console.log(user);
  if (user != null) {
    if (user.find((x) => x.name === 'admin')) {
      return next();
    }
    return res.status(403).send({
      message: 'Require Admin Role!',
    });
  }
  return res.status(401).send({
    message: 'Token expired!',
  });
};

module.exports = {
  verifyToken, isSuperAdmin, isUser, isAdmin,
};
