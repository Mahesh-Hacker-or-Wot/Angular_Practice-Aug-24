import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-create-student-card',
  templateUrl: './create-student-card.component.html',
  styleUrls: ['./create-student-card.component.css']
})
export class CreateStudentCardComponent {

  public studentsForm:FormGroup=new FormGroup(
    {
     name:new FormControl(),
     phone:new FormControl(),
     city:new FormControl(),
     dob:new FormControl(),
     profile_picture:new FormControl(),
     email:new FormControl(),
     school_logo:new FormControl(),
     school_name:new FormControl(),
     school_pin:new FormControl(),
    }
  )

  constructor(private _createStudentService:StudentCardService){}

  create(){

    this._createStudentService.createStudentCard(this.studentsForm.value).subscribe(
      (data:any)=>{
        alert("Entry Created")
      },
      (err:any)=>{
        alert("Entry Creation Failed");
      }
    )

  }

}
