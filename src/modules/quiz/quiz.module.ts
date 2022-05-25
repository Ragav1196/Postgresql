import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionContoller } from './controllers/question.controller';
import { QuestionRepository } from './repositories/question.respository';
import { QuestionService } from './services/question.service';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { QuizService } from './services/quiz.service';
import { OptionRepository } from './repositories/option.repository';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';

@Module({
  controllers: [QuizController, QuestionContoller, OptionController],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]) /* 5 ->  we are using "<typeOrmModule.forFeature>" as it is not the root module. also we are passing the "<quizRepository>" to it */,
  ],
  /* 5 -> We are informing the "<QuizModule>" about the "<QuizRepository>*/
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
