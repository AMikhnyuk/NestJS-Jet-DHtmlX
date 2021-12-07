import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.tasksService.getAllTasks();
  }

  @Post()
  async createTask(@Body() taskData: Task): Promise<Task> {
    return await this.tasksService.createTask(taskData);
  }
  @Put(':id')
  async update(@Param('id') id, @Body() taskData: Task): Promise<any> {
    taskData.id = Number(id);
    console.log('Update #' + taskData.id);
    return this.tasksService.updateTask(taskData);
  }
  @Delete(':id')
  async removeTask(@Param('id') id: number): Promise<any> {
    return await this.tasksService.removeTask(id);
  }
}
