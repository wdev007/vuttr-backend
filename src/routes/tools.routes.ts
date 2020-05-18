import { Router } from 'express';

import CreateToolService from '../services/CreateToolService';

const toolsRouter = Router();

toolsRouter.get('/', (request, response) => {
  return response.json({ tools: [{ title: 'oi' }] });
});

toolsRouter.post('/', async (request, response) => {
  const { title, description, link } = request.body;

  const createTool = new CreateToolService();
  const tool = await createTool.execute({
    title,
    link,
    description,
    user_id: '6a1340e5-b496-4d35-b681-a8e88f958fe2',
  });

  return response.json(tool);
});

export default toolsRouter;
