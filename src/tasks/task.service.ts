import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  constructor() {}

  @Cron(process.env.ALGORITHM_CRON)
  async handleCron() {}
}
