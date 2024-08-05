import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import Question from '../types/question';
import { QuestionService } from '../services/question.service';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';


// interface Question {
//   _id: string;
//   questionText: string;
//   options: string[];
//   correctAnswer: string;
//   __v: number;
// }

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  // Questions: Question[] = [];
  // QuestionService = inject(QuestionService);

  // ngOnInit() {
  //   this.QuestionService.getQuestions().subscribe(result => {
  //     this.Questions = result.map(question => ({
  //       ...question,
  //       options: question.options.map(option => {
  //         if (typeof option === 'object' && option !== null) {
  //           return { text: Object.values(option).join('') };
  //         }
  //         return option;
  //       })
  //     }));
  //     console.log('Questions:', this.Questions);
  //   });
  // }

  // questionText: string = '';
  // options: string[] = ['', '', '', ''];
  // correctAnswer: string = '';

  // constructor(private questionService: QuestionService, private router: Router) {}

  // addQuestion() {
  //   const model: Question = {
  //     _id: '', // Assign default or valid value
  //     __v: 0,  // Assign default or valid value
  //     questionText: this.questionText,
  //     options: this.options,
  //     correctAnswer: this.correctAnswer
  //   };

  //   this.questionService.addQuestion(model).subscribe(() => {
  //     this.router.navigate(['/questions']);
  //   });
  // }


  // questions: Question[] = []; // Ensure the property is correctly named and initialized
  // QuestionService = inject(QuestionService);

  // ngOnInit() {
  //   this.QuestionService.getQuestions().subscribe((result: Question[]) => {
  //     this.questions = result; // Ensure the property is correctly assigned
  //     console.log('Questions:', this.questions);
  //   });
  // }

  questions: Question[] = [];
  QuestionService = inject(QuestionService);

  ngOnInit() {
    this.QuestionService.getQuestions().subscribe((result: Question[]) => {
      this.questions = result;
      console.log('Questions:', this.questions);
    });
  }

  convertOptionToString(option: any): string {
    // Convert the option object to a string, excluding the _id property
    const { _id, ...optionTextParts } = option;
    // return Object.values(optionTextParts).join('');

    if (option && typeof option === 'object' && 'text' in option) {
      return option.text;
    }
    return typeof option === 'string' ? option : '';
  }
  delete(id:string){
    const ok = confirm("Are you sure want to delete question?")
    if(ok){
      this.QuestionService.deleteQuestion(id).subscribe((result)=>{
        alert('Question deleted succesfully');
        this.questions=this.questions.filter((q)=>q._id != id)
      })
    }
  }

}
