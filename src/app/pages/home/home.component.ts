import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/helpers/helpers';
import skillsData from '../../assets/skills.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  skills: Skills[] = skillsData;

  constructor(){}
  ngOnInit(): void {
    console.log(this.skills)
  }
  


}
