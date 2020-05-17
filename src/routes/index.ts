import { Router } from 'express';

import toolsRoutes from './tools.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/tools', toolsRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
