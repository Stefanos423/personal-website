import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { slideRight, slideLeft } from '../animations/slide.animation';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [ slideRight, slideLeft ]
})
export class BannerComponent implements OnInit {

  genericInfo = `Born and raised in Athens, Greece, and recently moved to Northern Ireland, UK,
                 I am constantly seeking for new challenges and experiences to broaden my professional and personal knowledge.`;
  education = `With a Bachellor\'s in Electrical and Computer Engineering and a Master\'s in Computer Engineering,
               I am currently working as an Associate Software Developer for Philips Digital Pathology Belfast.`;
  passion = `Be it software or hardware, all fields of Computer Engineering belong in my direct interests.
             Where others are satisfied with cutting-edge, I want to do bleeding-edge.`;
  currentInfo = 1;

  rightState = 'collapsed';
  leftState = 'collapsed';
  animating = false;

  constructor() { }

  ngOnInit() {
    this.rightState = 'expanded';
    this.leftState = 'expanded';
  }

  nextInfo(event: any) {
    if (this.animating) { return; }
    this.animating = true;
    this.rightState = 'expanded';
    this.currentInfo = this.currentInfo % 3 + 1;
  }

  previousInfo() {
    if (this.animating) { return; }
    this.animating = true;
    this.leftState = 'expanded';
    if (this.currentInfo === 1) {
      this.currentInfo = 3;
    } else {
      this.currentInfo -= 1;
    }
  }

  slideRightFinished() {
    this.rightState = 'collapsed';
    this.animating = false;
  }

  slideLeftFinished() {
    this.leftState = 'collapsed';
    this.animating = false;
  }
}
