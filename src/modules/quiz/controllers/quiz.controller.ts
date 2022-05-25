import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(
    private quizService: QuizService /* injecting the quiz service */,
  ) {}

  @Get('/')
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizService.getAllQuiz();
  }

  @Get('/:id')
  async getQuizById(
    @Param('id', ParseIntPipe /* to ensure that the id is always a number */)
    id: number,
  ) {
    return await this.quizService.getQuizById(id);
  }

  @Post('/create')
  // @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(
    @Body()
    quizData: /* we are getting the data of body and saving that in quizData */ createQuizDto /* assigning the validations for the post data */,
  ) {
    return await this.quizService.createNewQuiz(quizData);
  }
}
