import * as Joi from 'joi';


export const JoiValidaionSchema = Joi.object({
    MONGO_CONNECTION: Joi.required(),
    PORT: Joi.number().default( 3001 ),
    DEFAULT_LIMIT: Joi.number().default( 10 ),
});