import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionRepository } from '../repositories/question.respository';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> /* we are mentioning that this function is going to return a promise. even without that this 
  will work */ {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    console.log(question);

    quiz.questions = [
      ...quiz.questions,
      newQuestion,
    ]; /* Adding questions to the quiz array */
    await quiz.save();

    return newQuestion;
  }

  async findQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne(id, {
      relations: ['quiz', 'options'],
    });
  }
}
