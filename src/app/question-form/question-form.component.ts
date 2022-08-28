import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { Question } from 'src/Models/Question';
import { QuestionService } from 'src/services/question.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit, OnDestroy {
  questionList: Question[] = [];
  unsubcribe: Subject<any> = new Subject<any>();
  isLoad: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private questionService: QuestionService,
    private formBuilder: FormBuilder,
  ) {}
  questionForm = this.formBuilder.group({
    name: ['', Validators.required],
    question1: [''],
    question2: [''],
    question3: [''],
    question4: [''],
    question5: [''],
  });
  ngOnInit(): void {
    this.questionService.getAll()
    .pipe(
      takeUntil(this.unsubcribe)
    )
    .subscribe(x => {
      this.questionList = x;
      this.isLoad.next(true);
      console.log(this.questionList, this.isLoad);
    })
  }
  onSubmit(){
    if (this.questionForm.valid){
      console.log(this.questionForm);
    }
  }
  ngOnDestroy(): void {
    this.unsubcribe.next(undefined)
  }
}
