import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { Question } from 'src/Models/Question';
import { QuestionService } from 'src/services/question.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Answer } from 'src/Models/Answer';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit, OnDestroy {
  questionList: Question[] = [];
  unsubcribe: Subject<any> = new Subject<any>();
  isForm: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAnswer: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private questionService: QuestionService,
    private formBuilder: FormBuilder,
  ) {}
  questionForm = this.formBuilder.group({
    name: ['', Validators.required],
    question1: [],
    question2: [],
    question3: [],
    question4: [],
    question5: [],
  });
  ngOnInit(): void {
    this.questionService.getAll()
    .pipe(
      takeUntil(this.unsubcribe)
    )
    .subscribe(
      result => {
        this.questionList = result;
        this.isForm.next(true);
      },
      error => {
        console.error("Не возможно получить данные с сервера")
      })
  }
  onSubmit(){
    if (this.questionForm.valid){
      var answer: Answer = {
        id: 0,
        name: this.questionForm.value.name != null? this.questionForm.value.name: undefined,
        question1: this.questionForm.value.question1 != null? this.questionForm.value.question1: undefined,
        question2: this.questionForm.value.question2 != null? this.questionForm.value.question2: undefined,
        question3: this.questionForm.value.question3 != null? this.questionForm.value.question3: undefined,
        question4: this.questionForm.value.question4 != null? this.questionForm.value.question4: undefined,
        question5: this.questionForm.value.question5 != null? this.questionForm.value.question5: undefined
      };
      this.questionService.postAnswer(answer)
      .pipe(
        takeUntil(this.unsubcribe)
      )
      .subscribe(
        result => {
          console.warn("Ответ отправлен");
          this.isForm.next(false);
          this.isAnswer.next(true);
        },
        error => {
          console.error("Ответ не отправлен");
        }
      )
    }
  }
  ngOnDestroy(): void {
    this.unsubcribe.next(undefined)
  }
}
