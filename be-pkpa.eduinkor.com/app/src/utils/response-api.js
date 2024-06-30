/* eslint-disable no-param-reassign */
const success = (message, data, statusCode) => ({
  message,
  error: false,
  code: statusCode,
  data,
});

const error = (message, statusCode) => {
  const codes = [200, 201, 400, 401, 404, 403, 422, 500];
  const findCode = codes.find((code) => code === statusCode);

  if (!findCode) {
    statusCode = 500;
  } else {
    statusCode = findCode;
  }

  return {
    message,
    code: statusCode,
    error: true,
  };
};

const validation = (errors) => ({
  message: 'Validation errors',
  error: true,
  code: 422,
  errors,
});

module.exports = { success, error, validation };
