import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-meeting',
  imports: [CardModule,ButtonModule,CommonModule,FormsModule ],
  templateUrl: './join-meeting.component.html',
  styleUrl: './join-meeting.component.css'
})
export class JoinMeetingComponent {

  showPopup:boolean = false;
  title: string = 'Confirmation';
  message: string = 'Are you sure you want to leave this meeting?';
  images = [
    { src: 'path/to/image1.jpg',Name: 'Aditya' },
    { src: 'path/to/image2.jpg',Name: 'Gawresh'  },
    { src: 'path/to/image3.jpg',Name: 'Pranay'  },
    { src: 'path/to/image3.jpg',Name: 'Abhishek' },
    { src: 'path/to/image3.jpg',Name: 'Sushant'  },
    { src: 'path/to/image3.jpg',Name: 'Satyam' },
    { src: 'path/to/image3.jpg',Name: 'Karan'  },
    { src: 'path/to/image3.jpg',Name: 'Aanand'  }
  ];

  constructor(public Common:CommonService, public router:Router){}
  
  ConformationPopUp() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  onConfirm() {
    this.router.navigate(['/UserJoin'])
  }

}
