/* 2 -> Install class-validator and class-transformer */

import { IsNotEmpty, Length } from 'class-validator';

export class createQuizDto {
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({ message: 'The quiz should have a description' })
  @Length(3)
  description: string;
}
