import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  start_date: string;

  @Column()
  duration: number;

  @Column()
  progress: number;

  @Column()
  parent: number;

  @Column()
  end_date: number;

  @Column()
  '!nativeeditor_status': string;
}
