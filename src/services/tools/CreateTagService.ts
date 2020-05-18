import { getRepository } from 'typeorm';
import Tag from '../../models/tag';

interface Request {
  tags: string[];
  tool_id: string;
}

class CreateTagService {
  public async execute({ tags, tool_id }: Request): Promise<string[]> {
    const tagRepository = getRepository(Tag);

    const createdTags = tags.map((tag) => ({
      name: tag,
      tool_id,
    }));

    await tagRepository.save(createdTags);

    return tags;
  }
}

export default CreateTagService;
