import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { slide } from '../animations/slide.animation';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [ slide ]
})
export class BannerComponent implements OnInit {

  genericInfo = `Born and raised in Athens, Greece, and currently living in Northern Ireland,
                 I am constantly seeking for new challenges and experiences to broaden my professional and personal knowledge.`;
  education = `With a Bachellor\'s in Electrical and Computer Engineering and a Master\'s in Computer Engineering,
               I am currently working as a Software Developer for Philips Digital Pathology Belfast.`;
  passion = `Be it software or hardware, all fields of Computer Engineering belong in my direct interests.
             Where others are satisfied with cutting-edge, I want to do bleeding-edge.`;
  currentInfo = 1;

  states = ['onTheCenter', 'onTheLeft', 'onTheRight'];

  animating = false;

  constructor() { }

  ngOnInit() { }

  nextInfo() {
    if (this.animating) { return; }
    this.animating = true;
    if (this.currentInfo === 1) {
      this.states[0] = 'onTheRight';
      this.states[1] = 'onTheCenter';
      this.states[2] = 'onTheLeft';
    } else if (this.currentInfo === 2) {
      this.states[0] = 'onTheLeft';
      this.states[1] = 'onTheRight';
      this.states[2] = 'onTheCenter';
    } else if (this.currentInfo === 3) {
      this.states[0] = 'onTheCenter';
      this.states[1] = 'onTheLeft';
      this.states[2] = 'onTheRight';
    }
    this.currentInfo = this.currentInfo % 3 + 1;
  }

  previousInfo() {
    if (this.animating) { return; }
    this.animating = true;
    if (this.currentInfo === 1) {
      this.states[0] = 'onTheLeft';
      this.states[1] = 'onTheRight';
      this.states[2] = 'onTheCenter';
    } else if (this.currentInfo === 2) {
      this.states[0] = 'onTheCenter';
      this.states[1] = 'onTheLeft';
      this.states[2] = 'onTheRight';
    } else if (this.currentInfo === 3) {
      this.states[0] = 'onTheRight';
      this.states[1] = 'onTheCenter';
      this.states[2] = 'onTheLeft';
    }
    if (this.currentInfo === 1) {
      this.currentInfo = 3;
    } else {
      this.currentInfo -= 1;
    }
  }

  slideFinished() {
    this.animating = false;
  }
}
