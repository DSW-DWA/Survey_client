import { Pipe, PipeTransform } from '@angular/core';
import { shareReplay } from 'rxjs';
import { DataStatistics } from 'src/Models/DataStatistics';
import { Statistics } from 'src/Models/Statistics';

@Pipe({
  name: 'statisticsToDataSource'
})
export class StatisticsToDataSourcePipe implements PipeTransform {

  transform(statistics: Statistics, ...args: unknown[]): DataStatistics[] {
    return [
      {
        questionNumber: 1,
        correctAnswers: statistics.correctQuestion1,
        failedAnswers: statistics.failedQuestion1,
      },
      {
        questionNumber: 2,
        correctAnswers: statistics.correctQuestion2,
        failedAnswers: statistics.failedQuestion2,
      },
      {
        questionNumber: 3,
        correctAnswers: statistics.correctQuestion3,
        failedAnswers: statistics.failedQuestion3,
      },
      {
        questionNumber: 4,
        correctAnswers: statistics.correctQuestion4,
        failedAnswers: statistics.failedQuestion4,
      },
      {
        questionNumber: 5,
        correctAnswers: statistics.correctQuestion5,
        failedAnswers: statistics.failedQuestion5,
      }
    ]
  }

}
