import { Router } from 'express';

import CreateSessionService from '../services/sessions/CreateSessionService';

const sessionsRoutes = Router();

sessionsRoutes.get('/', (request, response) => {
  return response.json({ session: true });
});

sessionsRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const createSession = new CreateSessionService();
  const { user, token } = await createSession.execute({ email, password });

  delete user.password;

  return response.json({
    user,
    token,
  });
});

export default sessionsRoutes;
