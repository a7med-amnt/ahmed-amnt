import joi from "joi";


export const signinValidation = joi.object({
    email: joi.string().trim().email().required(),
    password: joi.string().trim().min(5).max(20).required()
});