import { Component } from '@angular/core';
import { BankaccountService } from '../bankaccount.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent {

  public bankaccounts:any=[];

  public term:string='';
  public term1:string='';
  public term2:string='';
  public term3:string='';
  public term4:string='';
  public term5:string='';

  constructor(private _bankAccounts:BankaccountService){

    _bankAccounts.getAccounts().subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
      

    )

  }

  getFilteredBankAccounts(){

   this. _bankAccounts.getFilteredBankAccounts(this.term).subscribe(

    (data:any)=>{
      this.bankaccounts=data;
    },
    (err:any)=>{
      alert("Internal Server Error")
    }

    )

  }

  getFilteredAccountName(){
    this.term1=this.bankaccounts.available_name;
    this. _bankAccounts.getFilterdAccountName(this.term1).subscribe(

      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
  
      )

  }
  getFilteredAvailableBalance(){
    this.term1=this.bankaccounts.available_balance;
    this. _bankAccounts.getFilterdaccountBalance(this.term2).subscribe(

      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
  
      )

  }
  getFilteredAccountNumber(){
    this.term1=this.bankaccounts.account_number;
    this. _bankAccounts.getFilterdaccountNumber(this.term3).subscribe(

      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
  
      )

  }
  getFilteredCity(){
    this.term1=this.bankaccounts.city;
    this. _bankAccounts.getFilterdCity(this.term4).subscribe(

      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
  
      )

  }
  getFilteredId(){
    this.term1=this.bankaccounts.id;
    this. _bankAccounts.getFilterdId(this.term5).subscribe(

      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
  
      )

  }

}
