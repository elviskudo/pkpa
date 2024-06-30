const express = require('express');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

const app = express();
const server = require('http').createServer(app);
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('winston');
// const cloudinary = require('cloudinary').v2;
const io = require('socket.io')(server, {
  cors: { origin: '*' },
});

const { handleError } = require('./utils/error');

const port = 5000;

require('dotenv').config({ path: path.resolve('./.env') });
require('./utils/redis');
require('./utils/mongodb');
// const db = require('./models');

// production
// db.sequelize.sync();

// development
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db');
// });
app.set('socketio', io);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// defining a custom logger
const logger = winston.createLogger({
  exitOnError: false,
  level: 'info',
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'app.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

// using the logger and its configured transports, to save the logs created by Morgan
const myStream = {
  write(text) {
    logger.info(text);
  },
};

app.use(morgan('combined', { stream: myStream }));


//const corsOption = {
//  origin: 'https://pkpa.eduinkor.com',
//};

//app.use(cors(corsOption));
app.use(cors());
app.options('*', cors());

Sentry.init({
  dsn: 'https://00f52afa7cdf4fe9af6daf989affa118@o1287977.ingest.sentry.io/6504176',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.get('/', (req, res) => {
  res.send('Inkortech 2022');
});

app.use('/api/v1', require('./routes'));

app.use(Sentry.Handlers.errorHandler());
app.use(handleError);

// app.use(
//   Sentry.Handlers.requestHandler({
//     serverName: false,
//     user: ['email'],
//   }),
// );
app.use(
  Sentry.Handlers.errorHandler({
    shouldHandleError(error) {
      // Capture all 404 and 500 errors
      if (error.status === 404 || error.status === 500) {
        return true;
      }
      return false;
    },
  }),
);

io.on('connection', async (socket) => {
  console.log('a user connected');
  console.log(socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost: ${port}`);
});
