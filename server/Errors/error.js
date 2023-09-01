/** @format */

const myError = function (error, res) {
  console.error(error);
  res.status(500).json({ error });
};

export { myError };
