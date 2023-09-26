import Joi from "joi";

const registerSchema = Joi.object({
    username: Joi.string().trim().required().min(3),
    password: Joi.string().trim().required().min(6),
    email: Joi.string().trim().email().required(),
});

export const registerBodyValidator = (req, res, next) => {
    const { error } = registerSchema.validate(req.body);

    if (error) {
        return res.status(400).send({ error: error.message });
    }

    next();
};