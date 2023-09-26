import Joi from "joi";

const removeSchema = Joi.object({
    id: Joi.string().trim().required().min(1),
});

export const removeParamsValidator = (req, res, next) => {
    const { error } = removeSchema.validate(req.params);

    if (error) {
        return res.status(400).send({ error: error.message });
    }

    next();
};