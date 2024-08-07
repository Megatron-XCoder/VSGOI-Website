const signupValidation = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (result.success) {
        next();
    } else {
        res.status(400).json(result.error.errors);
    }
};

module.exports = signupValidation;
