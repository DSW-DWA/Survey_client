import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from 'src/Models/Question';
import { HttpClient } from '@angular/common/http';
import { Answer } from 'src/Models/Answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url: string = environment.questionUrl;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Question[]>{
    return this.http.get<Question[]>(this.url+"all");
  }

  postAnswer(answer: Answer): Observable<any>{
    return this.http.post<any>(this.url+"answer", answer);
  }
}
