require('dotenv').config(); // this is important!

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOSTNAME,
    port: process.env.DEV_DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 20000,
    },
    timezone: '+07:00',
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
      // ssl: {
      //   ca: fs.readFileSync(path.join(__dirname, 'mysql-ca-master.crt')),
      // },
    },
    pool: {
      max: parseInt(process.env.PROD_DB_POOL_MAX, 10),
      min: parseInt(process.env.PROD_DB_POOL_MIN, 10),
      acquire: parseInt(process.env.PROD_DB_POOL_ACQUIRE, 10),
      idle: parseInt(process.env.PROD_DB_POOL_IDLE, 10),
    },
    timezone: process.env.PROD_DB_TIMEZONE,
  },
};
