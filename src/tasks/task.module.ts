import { Module } from '@nestjs/common';
import { TaskService } from '@app/tasks/task.service';

@Module({
  imports: [],
  providers: [TaskService],
})
export class TaskModule {}
