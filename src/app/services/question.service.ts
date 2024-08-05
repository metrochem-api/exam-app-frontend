// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class QuestionService {

// //   constructor() { }
// // }

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// // import Question from '../types/question';
// import Question from '../types/question';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuestionService {
//   apiUrl = 'http://localhost:3000';

//   constructor(private httpClient: HttpClient) {}

//   getQuestions(): Observable<Question[]> {
//     return this.httpClient.get<Question[]>(`${this.apiUrl}/questions`);
//   }

//   getQuestion(id: string): Observable<Question> {
//     return this.httpClient.get<Question>(`${this.apiUrl}/questions/${id}`);
//   }

//   addQuestion(question: Question): Observable<Question> {
//     return this.httpClient.post<Question>(`${this.apiUrl}/questions`, question);
//   }

//   updateQuestion(id: string, question: Question): Observable<void> {
//     return this.httpClient.put<void>(`${this.apiUrl}/questions/${id}`, question);
//   }

//   deleteQuestion(id: string): Observable<void> {
//     return this.httpClient.delete<void>(`${this.apiUrl}/questions/${id}`);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Question from '../types/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiUrl = 'http://localhost:3000';
  // apiUrl = 'mongodb+srv://vamshiparsa:Kittu%400007@backenddb.xf8j59g.mongodb.net/questionsDb?retryWrites=true&w=majority';

  constructor(private httpClient: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.apiUrl}/questions`);
  }

  getQuestion(id: string): Observable<Question> {
    return this.httpClient.get<Question>(`${this.apiUrl}/questions/${id}`);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.httpClient.post<Question>(`${this.apiUrl}/questions`, question);
  }

  updateQuestion(id: string, question: Question): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/questions/${id}`, question);
  }

  deleteQuestion(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/questions/${id}`);
  }
}
