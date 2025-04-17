import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-join',
  imports: [CardModule,ButtonModule,CommonModule,FormsModule ],
  templateUrl: './user-join.component.html',
  styleUrl: './user-join.component.css'
})
export class UserJoinComponent {

  ROOM_ID:any;

  constructor(public Common:CommonService,public router:Router){}

  ngOnInit(){

  }

  JoinMeeting(ROOM_ID:any){
    if(!this.Common.isValid(ROOM_ID)){
      this.Common.showError("Please enter a valid room id")
      return
    }
    this.Common.setUserName = ROOM_ID
   this.router.navigate(['/JoinMeeting'])
  }

}
