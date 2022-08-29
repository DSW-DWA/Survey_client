import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionFormComponent } from './question-form/question-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AnswerToDataSourcePipe } from './pipes/answer-to-data-source.pipe';
import { StatisticsToDataSourcePipe } from './pipes/statistics-to-data-source.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    AnswerToDataSourcePipe,
    StatisticsToDataSourcePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [
    AnswerToDataSourcePipe,
    StatisticsToDataSourcePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
