import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  setUserName:any;
  
  constructor() { }


  isValid(InputValue:any){
    if(InputValue == null || InputValue == undefined || InputValue == ""){
      return false;
    }else{
      return true;
    }
  }

  showError(msg:any){
    alert(msg);
  }
  
}
