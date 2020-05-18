import { getRepository } from 'typeorm';
import Tool from '../../models/tool';

interface Request {
  title: string;
  link: string;
  description: string;
  user_id: string;
}

class CreateToolService {
  public async execute({
    title,
    link,
    description,
    user_id,
  }: Request): Promise<Tool> {
    const toolRepository = getRepository(Tool);

    const tool = toolRepository.create({
      title,
      link,
      description,
      user_id,
    });

    await toolRepository.save(tool);

    return tool;
  }
}

export default CreateToolService;
