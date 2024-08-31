import { Component } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {

  public meme:any=[];

  constructor(private _memeService:MemeService){

    this._memeService.getMemes().subscribe(
      (data:any)=>{
        this.meme=data.data.memes;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )

  }


}
