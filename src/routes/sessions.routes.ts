import { Router } from 'express';

const sessionsRoutes = Router();

sessionsRoutes.get('/', (request, response) => {
  return response.json({ session: true });
});

export default sessionsRoutes;
