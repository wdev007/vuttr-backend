import { Router } from 'express';

import usersRoutes from './users.routes';
import toolsRoutes from './tools.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/tools', toolsRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
