import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent {



  public vehicles:any=[];

  constructor(private _viewvehicleService:VehicleService,private _activatedroute:ActivatedRoute){

    this._activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _viewvehicleService.getVehicleByid(data.id).subscribe(
          (data:any)=>{
            this.vehicles=data;
          }
        )
      }
    )
        

  }

}
