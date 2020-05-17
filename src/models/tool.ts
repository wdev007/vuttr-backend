import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tools')
class Tool {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  link: string;

  @Column()
  tags: string[];
}

export default Tool;
