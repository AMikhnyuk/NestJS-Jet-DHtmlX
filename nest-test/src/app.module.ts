import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { LinksModule } from './links/links.module';
import { Link } from './links/models/link.model';
import { Task } from './tasks/models/task.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [Task, Link],
      synchronize: true,
    }),
    TasksModule,
    LinksModule,
  ],
})
export class AppModule {}
