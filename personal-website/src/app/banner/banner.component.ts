import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class BannerComponent implements OnInit {

  genericInfo: string = 'Born and raised in Athens, Greece, and recently moved to Northern Ireland, UK, I am constantly seeking for new challenges and experiences to broaden my professional and personal knowledge.';
  education: string = 'With a Bachellor\'s in Electrical and Computer Engineering and a Master\'s in Computer Engineering, I am currently working as an Associate Software Developer for Philips Digital Pathology Belfast.';
  passion: string = 'Be it software or hardware, all fields of Computer Engineering belong in my direct interests. Where others are satisfied with cutting-edge, I want to do bleeding-edge.'
  currentInfo: number = 1;
  state: string = 'in';

  constructor() { }

  ngOnInit() {
  }

  nextInfo(event: any) {
    this.currentInfo = this.currentInfo % 3 + 1;
    this.state = 'out';
  }

  previousInfo() {
    if (this.currentInfo === 1) {
      this.currentInfo = 3;
    } else {
      this.currentInfo -= 1;
    }

    this.state = 'in';    
  }
}
