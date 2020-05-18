import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateToolService from '../services/tools/CreateToolService';
import ToolsRepository from '../repositories/ToolsRepository';

const toolsRouter = Router();

toolsRouter.get('/', ensureAuthenticated, async (request, response) => {
  const { id } = request.user;
  const toolRepository = getCustomRepository(ToolsRepository);

  const tools = await toolRepository.findAll(id);

  return response.json(tools);
});

toolsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const { title, description, link, tags } = request.body;
  const { id } = request.user;

  const createTool = new CreateToolService();
  const tool = await createTool.execute({
    title,
    link,
    description,
    tags,
    user_id: id,
  });

  return response.json(tool);
});

export default toolsRouter;
