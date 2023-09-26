import Joi from "joi";

const createSchema = Joi.object({
    title: Joi.string().trim().required().min(1),
    author: Joi.string().trim().required().min(1),
});

export const createBodyValidator = (req, res, next) => {
    const { error } = createSchema.validate(req.body);

    if (error) {
        return res.status(400).send({ error: error.message });
    }

    next();
};