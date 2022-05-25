import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot/* "forRoot is for the root module" */(typeOrmConfig)], //All the modules to be imported here for the app module to know that those modules exists
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
