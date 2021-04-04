import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/task';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async getTasks() {
    return await this.taskModel.find();
  }

  async getTask(id: string) {
    return await this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    await newTask.save();
    return 'Tarea guardada';
  }
}
