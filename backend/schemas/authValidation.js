import joi from "joi";

export const signinValidation = joi.object({
    secretWord: joi.string().trim().required(),
    password: joi.string().trim().required()
});
