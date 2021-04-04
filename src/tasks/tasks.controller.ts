import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('')
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string): Promise<Task> {
    return this.taskService.getTask(taskId);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<string> {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id: string): string {
    console.log(task);
    console.log(id);
    return 'Updating a task';
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): string {
    return 'Deleting a task ' + id;
  }
}
