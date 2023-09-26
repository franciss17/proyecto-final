import Joi from "joi";

const loginSchema = Joi.object({
    password: Joi.string().trim().required().min(6),
    email: Joi.string().trim().email().required(),
});

export const loginBodyValidator = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);

    if (error) {
        return res.status(400).send({ error: error.message });
    }

    next();
};