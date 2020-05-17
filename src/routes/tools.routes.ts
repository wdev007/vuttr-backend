import { Router } from 'express';

const toolsRouter = Router();

toolsRouter.get('/', (request, response) => {
  return response.json({ tools: [{ title: 'oi' }] });
});

export default toolsRouter;
