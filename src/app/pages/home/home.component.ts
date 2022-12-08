import { Component, OnInit } from '@angular/core';
import { Skills, Info } from 'src/app/helpers/helpers';
import skillsData from '../../assets/skills.json';
import infoData from '../../assets/info.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  skills: Skills[] = skillsData;

  info: Info = infoData;

  constructor(){}
  ngOnInit(): void {
    console.log(this.skills)
  }
  


}
