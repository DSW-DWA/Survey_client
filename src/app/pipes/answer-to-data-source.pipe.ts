import { Pipe, PipeTransform } from '@angular/core';
import { Answer } from 'src/Models/Answer';
import { Question } from 'src/Models/Question';
import { DataTested } from 'src/Models/DataTested';

@Pipe({
  name: 'answerToDataSource'
})
export class AnswerToDataSourcePipe implements PipeTransform {

  transform(answer: Answer, questions: Question[]): DataTested[] {
    return [
      {
        questionNumber: 1,
        testedAnswer: answer.question1,
        correctAnswer: questions[0].correctAnswer
      },
      {
        questionNumber: 2,
        testedAnswer: answer.question2,
        correctAnswer: questions[1].correctAnswer,
      },
      {
        questionNumber: 3,
        testedAnswer: answer.question3,
        correctAnswer: questions[2].correctAnswer,
      },
      {
        questionNumber: 4,
        testedAnswer: answer.question4,
        correctAnswer: questions[3].correctAnswer,
      },
      {
        questionNumber: 5,
        testedAnswer: answer.question5,
        correctAnswer: questions[4].correctAnswer,
      }
    ]
  }

}
