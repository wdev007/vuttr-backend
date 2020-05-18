import { EntityRepository, Repository, getRepository } from 'typeorm';
import Tool from '../models/tool';
import Tag from '../models/tag';

@EntityRepository(Tool)
class ToolsRepository extends Repository<Tool> {
  public async findAll(user_id: string): Promise<Tool[] | null> {
    const tagRepository = getRepository(Tag);
    const findTools = await this.find({
      where: { user_id },
    });

    const tools = await Promise.all(
      findTools.map(async (tool) => {
        const tags = await tagRepository.find({
          where: { tool_id: tool.id },
        });
        return {
          ...tool,
          tags,
        };
      })
    );

    return tools || null;
  }
}

export default ToolsRepository;
