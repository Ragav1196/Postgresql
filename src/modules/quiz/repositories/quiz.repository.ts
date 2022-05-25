import { EntityRepository, Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> /* this repository class should know which modal it is dealing with. that is why we are mentioning Quiz entity */ {}
