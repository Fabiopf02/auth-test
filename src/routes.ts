import { Router } from 'express';
import { AuthController } from './controllers/AuthController';
import { PrivateController } from './controllers/PrivateController';
import { authMiddleware } from './middlewares/auth';

const routes = Router();

routes.post('/auth', AuthController);

routes.use(authMiddleware);

routes.post('/private', PrivateController);

export { routes };
