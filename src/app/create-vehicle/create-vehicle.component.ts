
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public id:string="";

  public vehiclesForm:FormGroup=new FormGroup(
    {
      Vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
      cost:new FormControl(),
    }
  )

  constructor(private _vehicleService:VehicleService,private _activatedRoutes:ActivatedRoute){

    _activatedRoutes.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id

        this._vehicleService.getVehicleByid(this.id).subscribe(
          (data:any)=>{
            this.vehiclesForm.patchValue(data);
          }
        )
      }

    )
  }

  create(){

    if(this.id){
      this._vehicleService.updateVehicle(this.vehiclesForm.value,this.id).subscribe(
        (data:any)=>{
          alert("Update Successful")

        },
        (err:any)=>{
          alert("Update Failed")
        }
      )    
    }
    else{
      this._vehicleService.createVehicle(this.vehiclesForm.value).subscribe(
        (data:any)=>{
          alert("Creation successful ")
          
          this.vehiclesForm.reset()
        },
        (err:any)=>{
          alert("Creation Failed")
        }
      )
    }

  }


  

}
