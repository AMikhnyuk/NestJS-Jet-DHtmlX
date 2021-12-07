import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskModel: Repository<Task>,
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  async createTask(task: Task): Promise<Task> {
    return await this.taskModel.save(task);
  }
  async updateTask(task: Task): Promise<UpdateResult> {
    return await this.taskModel.update(task.id, task);
  }
  async removeTask(id: number): Promise<DeleteResult> {
    return await this.taskModel.delete(id);
  }
}
