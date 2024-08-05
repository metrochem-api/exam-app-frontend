// export default interface Question{
//   options: any;
//   // questionText: String,
//   // options: String,
//   // correctAnswer:String,
//   // createdAt:  Date,
//   // _id?: string;
//   // questionText: string;
//   // answers: { text: string; isCorrect: boolean }[];

//   _id?: string;
//   questionText: string;
//   answers: { text: string; isCorrect: boolean }[];
// }



// export default interface Question {
//   _id?: string;
//   questionText: string;
//   options: { text: string }[];
//   correctAnswer: string;
// }


export default interface Question {
  _id?: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  __v?: number; // Ensure this is present
}

