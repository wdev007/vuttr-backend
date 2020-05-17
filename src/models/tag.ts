import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tags')
class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  user_id: string;

  @Column()
  tool_id: string;

  // @ManyToOne()
  // user: string;
}

export default Tag;
