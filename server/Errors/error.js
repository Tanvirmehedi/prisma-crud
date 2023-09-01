/** @format */

const myError = function ({message, res,statusCode}) {
  console.error(message);
  res.status(statusCode).json({ message });
};

export { myError };
