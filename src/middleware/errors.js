const joiErrors = (error) =>
  error.details.map((detail) => detail.message).join(",");

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  // Handling Joi Validation Error
  if (err.details) {
    const errors = joiErrors(err);
    return res.status(400).json({
      success: false,
      message: errors,
    });
  }

  let error = { ...err };
  error.message = err.message;
  res.status(error.statusCode).json({
    success: false,
    message: error.message || "Internal Server Error.",
  });
};
