import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent {

  public mails:any=[];

  constructor(private _mailServicets:MailService){
    _mailServicets.getMailsChain().subscribe(
      (data:any)=>{
        this.mails=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }


    )
  }


}
