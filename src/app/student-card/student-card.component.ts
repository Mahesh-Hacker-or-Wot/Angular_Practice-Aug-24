import { Component } from '@angular/core';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {

  public students:any=[];

  public term:string='';

  public column:string="";

  public order:string="";

  public limit:string="";

  public page:string="";

  constructor(private _studentService:StudentCardService){

    this._studentService.getStudentsInfo().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }


    )
  }

  getFilteredStudents(){
    
    this._studentService.getFilteredStudents(this.term).subscribe(

      (data:any)=>{
        this.students=data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }

    )
  }

  sort(){

    this._studentService.getSortedStudents(this.column,this.order).subscribe(

      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert('Internal Server Error')
      }
    )
  }

  getPagination(){
    this._studentService.getPagination(this.limit,this.page).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }


}
