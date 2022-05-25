import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizRepository } from '../repositories/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(
      QuizRepository,
    ) /* 5 -> Injecting the repository created for quiz */
    private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository.createQueryBuilder('q').getMany();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id, {
      relations: ['questions'] /* Mentioning the table which is related */,
    });
  }

  async createNewQuiz(quiz: createQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
