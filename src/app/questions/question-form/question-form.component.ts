import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import Question from '../../types/question';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.scss'
})
export class QuestionFormComponent {
  // formBuilder = inject(FormBuilder);
  // questionService = inject(QuestionService);
  // router = inject(Router);
  // route = inject(ActivatedRoute);

  // questionForm: FormGroup = this.formBuilder.group({
  //   questionText: ['', [Validators.required]],
  //   options: ['', [Validators.required]],
  //   correctAnswer: ['', [Validators.required]],
  // });

  // editQuestionId!: string;

  // ngOnInit() {
  //   this.editQuestionId = this.route.snapshot.params['id'];
  //   if (this.editQuestionId) {
  //     this.questionService.getQuestion(this.editQuestionId).subscribe(result => {
  //       this.questionForm.patchValue({
  //         ...result,
  //         options: result.options.join(', ')
  //       });
  //     });
  //   }
  // }

  // // submitForm() {
  // //   if (this.questionForm.invalid) {
  // //     alert('Please provide all fields with valid data');
  // //     return;
  // //   }

  // //   const model: Question = {
  // //     ...this.questionForm.value,
  // //     options: this.questionForm.value.options.split(',').map((opt: string) => opt.trim())
  // //   };

  // //   if (this.editQuestionId) {
  // //     this.questionService.updateQuestion(this.editQuestionId, model).subscribe(() => {
  // //       alert('Question updated successfully.');
  // //       this.router.navigateByUrl('/');
  // //     });
  // //   } else {
  // //     this.questionService.addQuestion(model).subscribe(() => {
  // //       alert('Question added successfully.');
  // //       this.router.navigateByUrl('/');
  // //     });
  // //   }
  // // }

  // // submitForm() {
  // //   if (this.questionForm.invalid) {
  // //     alert('Please provide all fields with valid data');
  // //     return;
  // //   }

  // //   const optionsArray = this.questionForm.value.options.split(',').map((opt: string) => ({
  // //     text: opt.trim(),
  // //     isCorrect: opt.trim() === this.questionForm.value.correctAnswer
  // //   }));

  // //   const model: Question = {
  // //     questionText: this.questionForm.value.questionText,
  // //     options: optionsArray,
  // //     correctAnswer: this.questionForm.value.correctAnswer
  // //   };

  // //   if (this.editQuestionId) {
  // //     this.questionService.updateQuestion(this.editQuestionId, model).subscribe(() => {
  // //       alert('Question updated successfully.');
  // //       this.router.navigateByUrl('/');
  // //     });
  // //   } else {
  // //     this.questionService.addQuestion(model).subscribe(() => {
  // //       alert('Question added successfully.');
  // //       this.router.navigateByUrl('/');
  // //     });
  // //   }
  // // }

  // submitForm() {
  //   if (this.questionForm.invalid) {
  //     alert('Please provide all fields with valid data');
  //     return;
  //   }

  //   const optionsArray = this.questionForm.value.options.split(',').map((opt: string) => ({
  //     text: opt.trim(),
  //   }));

  //   const model: Question = {
  //     questionText: this.questionForm.value.questionText,
  //     options: optionsArray,
  //     correctAnswer: this.questionForm.value.correctAnswer,
  //   };

  //   if (this.editQuestionId) {
  //     this.questionService.updateQuestion(this.editQuestionId, model).subscribe(() => {
  //       alert('Question updated successfully.');
  //       this.router.navigateByUrl('/');
  //     });
  //   } else {
  //     this.questionService.addQuestion(model).subscribe(() => {
  //       alert('Question added successfully.');
  //       this.router.navigateByUrl('/');
  //     });
  //   }
  // }


//  formbuilder=inject(FormBuilder);
// questionService=inject(QuestionService);
// router=inject(Router);
// route=inject(ActivatedRoute);

// questionForm:FormGroup = this.formbuilder.group({
//     questionText:['', [Validators.required]],
//     options:['', [Validators.required]],
//     correctAnswer: ['', Validators.required],

//   })


// editQuestionId!:string;


// ngOnInit(){
// //   this.editQuestionId =this.route.snapshot.params["id"];
// // // console.log('id', id)
// // if(this.editQuestionId){
// //   this.questionService.getQuestion(this.editQuestionId).subscribe(result=>{
// //     this.questionForm.patchValue(result);
// //   })
// // }
// this.editQuestionId = this.route.snapshot.params["id"];
//   if(this.editQuestionId){
//     this.questionService.getQuestion(this.editQuestionId).subscribe(result => {
//       // Convert options array to a comma-separated string
//       const optionsText = result.options.map((option: any) => option.text).join(', ');
//       this.questionForm.patchValue({
//         questionText: result.questionText,
//         options: optionsText,
//         correctAnswer: result.correctAnswer
//       });
//     });
//   }
// }
//   addquestion(){
//     if(this.questionForm.invalid){
//       alert("please provide all field with valid data");
//       return;
//     }
//     const model:Question = this.questionForm.value;
//     console.log(this.questionForm.value)
//     this.questionService.addQuestion(model).subscribe((result)=>{
//       alert("User added successfully");
//       this.router.navigateByUrl('/')
//     })
//   }

//   updateQuestion(){
//     if(this.questionForm.invalid){
//       alert("please provide all field with valid data");
//       return;
//     }
//     const model:Question = this.questionForm.value;
//     this.questionService.updateQuestion(this.editQuestionId,model).subscribe((result)=>{
//       alert('User update successfully.');
//       this.router.navigateByUrl('/')
//     })
//   }


//   submitForm() {
//       // if (this.questionForm.invalid) {
//       //   alert('Please provide all fields with valid data');
//       //   return;
//       // }

//       // const optionsArray = this.questionForm.value.options.split(',').map((opt: string) => ({
//       //   text: opt.trim(),
//       // }));

//       // const model: Question = {
//       //   questionText: this.questionForm.value.questionText,
//       //   options: optionsArray,
//       //   correctAnswer: this.questionForm.value.correctAnswer,
//       // };

//       // if (this.editQuestionId) {
//       //   this.questionService.updateQuestion(this.editQuestionId, model).subscribe(() => {
//       //     alert('Question updated successfully.');
//       //     this.router.navigateByUrl('/');
//       //   });
//       // } else {
//       //   this.questionService.addQuestion(model).subscribe(() => {
//       //     alert('Question added successfully.');
//       //     this.router.navigateByUrl('/');
//       //   });
//       // }


//       if (this.questionForm.invalid) {
//         alert('Please provide all fields with valid data');
//         return;
//       }

//       const optionsArray = this.questionForm.value.options.split(',').map((opt: string) => ({
//         text: opt.trim(),
//       }));

//       const model: Question = {
//         questionText: this.questionForm.value.questionText,
//         options: optionsArray,
//         correctAnswer: this.questionForm.value.correctAnswer,
//       };

//       if (this.editQuestionId) {
//         this.questionService.updateQuestion(this.editQuestionId, model).subscribe(() => {
//           alert('Question updated successfully.');
//           this.router.navigateByUrl('/');
//         });
//       } else {
//         this.questionService.addQuestion(model).subscribe(() => {
//           alert('Question added successfully.');
//           this.router.navigateByUrl('/');
//         });
//       }
//     }


formbuilder = inject(FormBuilder);
  questionService = inject(QuestionService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  questionForm: FormGroup;
  editQuestionId!: string;
  optionsLimitExceeded: boolean = false;

  constructor() {
    this.questionForm = this.formbuilder.group({
      questionText: ['', [Validators.required]],
      options: ['', [Validators.required]],
      correctAnswer: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.editQuestionId = this.route.snapshot.params["id"];
    if (this.editQuestionId) {
      this.questionService.getQuestion(this.editQuestionId).subscribe(result => {
        const optionsText = result.options.map((option: any) => option.text).join(', ');
        this.questionForm.patchValue({
          questionText: result.questionText,
          options: optionsText,
          correctAnswer: result.correctAnswer
        });
      });
    }
  }

  submitForm() {
    if (this.questionForm.invalid) {
      alert('Please provide all fields with valid data');
      return;
    }

    const optionsArray = this.questionForm.value.options.split(',').map((opt: string) => ({
      text: opt.trim(),
    }));

    if (optionsArray.length > 4) {
      alert('You can only keep up to 4 options.');
      this.optionsLimitExceeded = true;
      return;
    }

    this.optionsLimitExceeded = false;

      // Check if correct answer matches one of the options
  const correctAnswer = this.questionForm.value.correctAnswer.trim();
  const validAnswers = optionsArray.map((option: { text: any; }) => option.text);

  if (!validAnswers.includes(correctAnswer)) {
    alert('The correct answer must match one of the provided options.');
    return;
  }

    const model: Question = {
      questionText: this.questionForm.value.questionText,
      options: optionsArray,
      correctAnswer: this.questionForm.value.correctAnswer,
    };

    if (this.editQuestionId) {
      this.questionService.updateQuestion(this.editQuestionId, model).subscribe(() => {
        alert('Question updated successfully.');
        this.router.navigateByUrl('/');
      });
    } else {
      this.questionService.addQuestion(model).subscribe(() => {
        alert('Question added successfully.');
        this.router.navigateByUrl('/');
      });
    }
  }

}
