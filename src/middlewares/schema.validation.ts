import { Request, Response, NextFunction } from 'express';
import Joi, { Schema, ValidationResult } from 'joi';


type ValidateSchemaMiddleware = {
    (req: Request, res: Response, next: NextFunction): void;
}

export function validateSchema(schema: Schema): ValidateSchemaMiddleware {
    return (req, res, next) => {
        const validation: ValidationResult = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errorMessages: string[] = validation.error.details.map((d) => d.message);
            return res.status(422).send(errorMessages);
        }
        next();
    };
}
