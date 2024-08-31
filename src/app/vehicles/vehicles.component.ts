import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehicles:any=[];

  public term:string='';
  public term1:string='2';
  public term2:string='3';
  public term3:string='4';

  // private _vehiclesService VehicleService;

  constructor(private _vehicleService:VehicleService,private _route:Router){

    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  getFilteredVehicles(){

    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        
        alert("Internal Server Error")
      }
    )

  }
  getPage2(){

    
    this._vehicleService.getPage2(this.term1).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        
        alert("Internal Server Error")
      }
    )

  }
  getPage3(){

    
    this._vehicleService.getPage3(this.term2).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        
        alert("Internal Server Error")
      }
    )

  }
  getPage4(){

    
    this._vehicleService.getPage4(this.term3).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        
        alert("Internal Server Error")
      }
    )

  }

  delete(id:string){

    
    this._vehicleService.vehicleDelete(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully")
        location.reload();
      },
      (err:any)=>{
        
        alert("Deletion Failed.uyk9]=")
      }
    )


  }


  view(id:string){

    this._route.navigateByUrl("/dashboard/view-vehicle/"+id)

    

  }
  edit(id:string){
    this._route.navigateByUrl("/dashboard/edit-vehicle/"+id)
  }
}
