import {body, checkSchema} from 'express-validator';

const validaciones=[
body('email').notEmpty().withMessage('El email es obligatorio').isEmail().withMessage('El email debe ser valido'),
body('password').notEmpty().withMessage('El password es obligatorio').isLength({min:4}).withMessage('El password debe tener al menos 4 caracteres'),
body('usuario').notEmpty().withMessage('El nombre es obligatorio').isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres.')
];

export const validaciones2 = checkSchema({
    email:{
        notEmpty:{
            errorMessage:'El email es obligatorio'
        },
        isEmail:{
            errorMessage:'El email debe ser valido'
        }
    },
    password:{
        notEmpty:{
            errorMessage:'El password es obligatorio'
        },
        isLength:{
            errorMessage:'El password debe tener al menos 4 caracteres',
            options:{min:4}
        }
    },
    user:{
        notEmpty:{
            errorMessage:"El usuario  es obligatorio"
        },
        isLength:{
            errorMessage:"El nombre debe tener al menos 2 caracteres.",
            options:{min:2}
        }
    }
})