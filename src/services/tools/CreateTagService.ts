import { getRepository } from 'typeorm';
import Tag from '../../models/tag';

interface Request {
  name: string;
  tool_id: string;
}

class CreateTagService {
  public async execute({ name, tool_id }: Request): Promise<Tag> {
    const tagRepository = getRepository(Tag);

    const tag = await tagRepository.create({ name, tool_id });

    return tag;
  }
}

export default CreateTagService;
