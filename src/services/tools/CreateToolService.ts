import { getRepository } from 'typeorm';

import Tool from '../../models/tool';
import CreateTagsService from './CreateTagService';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: string[];
  user_id: string;
}

class CreateToolService {
  public async execute({
    title,
    link,
    description,
    tags,
    user_id,
  }: Request): Promise<Tool> {
    const toolRepository = getRepository(Tool);
    const createTags = new CreateTagsService();

    const tool = toolRepository.create({
      title,
      link,
      description,
      user_id,
    });

    await toolRepository.save(tool);

    await createTags.execute({ tags, tool_id: tool.id });

    return tool;
  }
}

export default CreateToolService;
