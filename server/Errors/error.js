/** @format */

const myError = (err, req, res, next) => {
  console.error(err);
  const statusCode = err.status || 500;
  res.status(statusCode).json({ message: err.message });
};

export { myError };
