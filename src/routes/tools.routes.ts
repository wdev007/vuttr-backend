import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateToolService from '../services/tools/CreateToolService';

const toolsRouter = Router();

toolsRouter.get('/', ensureAuthenticated, (request, response) => {
  return response.json({ tools: [{ title: 'oi' }] });
});

toolsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const { title, description, link } = request.body;
  const { id } = request.user;

  const createTool = new CreateToolService();
  const tool = await createTool.execute({
    title,
    link,
    description,
    user_id: id,
  });

  return response.json(tool);
});

export default toolsRouter;
