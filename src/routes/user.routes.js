import {Router} from 'express';
import {newUser,login} from '../controllers/user.controller.js';
const routes=Router();


routes.post('/new',newUser);
routes.post('/login',login);


export default routes;