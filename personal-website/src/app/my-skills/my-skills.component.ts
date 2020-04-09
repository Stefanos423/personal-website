import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {

  technicalSkills: string = 'The completion of numerous academic projects as well as my experience at the Full Development stack has allowed me to achieve deep knowledge on modern Software Languages and Tools.'
  category: string = 'career';

  constructor() { }

  ngOnInit() { 
    this.category = 'career';
  }
}
