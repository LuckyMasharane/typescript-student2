// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let studentInfo: Array<any> = [
  {StudentName:"Lucky",StudentSurname:"Masharane",StudentGrade:"10",StudentAge:"23"},
  {StudentName:"Goodman",StudentSurname:"Ngomane",StudentGrade:"12",StudentAge:"9"},
  {StudentName:"Blessing",StudentSurname:"Mhlongo",StudentGrade:"09",StudentAge:"23"},
  {StudentName:"Fayve",StudentSurname:"Mandonsela",StudentGrade:"12",StudentAge:"7"},
  {StudentName:"Evans",StudentSurname:"Mabaso",StudentGrade:"10",StudentAge:"15"},
  {StudentName:"Bongani",StudentSurname:"Ndlamini",StudentGrade:"11",StudentAge:"9"},
  {StudentName:"Mcendisi",StudentSurname:"Nkosi",StudentGrade:"10",StudentAge:"8"},
  {StudentName:"Proud",StudentSurname:"Malale",StudentGrade:"11",StudentAge:"24"},
  {StudentName:"December",StudentSurname:"Masharane",StudentGrade:"12",StudentAge:"6"},
  {StudentName:"Samkelo",StudentSurname:"Lusenga",StudentGrade:"11",StudentAge:"6"},
];

var total = 0;
function count(studentInfo){
  for(var i = 0; i < studentInfo.length; i++){
    if(studentInfo[i].StudentAge < 10){
      total = total + 1;
    }
  
  }
  return total;
}

console.log(count(studentInfo));