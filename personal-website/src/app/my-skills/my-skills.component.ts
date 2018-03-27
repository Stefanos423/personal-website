import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {

  technicalSkills: string = 'The completion of numerous academic projects as well as my experience at the Full Development stack has allowed me to achieve deep knowledge on modern Software Languages and Tools.'
  services: string = 'As an Electrical and Computer Engineer I have come in contact with a multitude of scientific fields and I have cultivated an innate understanding of many heterogeneous Software and non-Software systems.'

  constructor() { }

  ngOnInit() {
  }

}
