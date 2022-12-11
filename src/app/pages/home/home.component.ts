import { Component, OnInit } from '@angular/core';
import { Skills, Info, Experience, Eductaion } from 'src/app/helpers/helpers';
import skillsData from '../../../assets/skills.json';
import infoData from '../../../assets/info.json';
import experienceData from '../../../assets/experience.json';
import educationData from '../../../assets/education.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  skills: Skills[] = skillsData;

  info: Info = infoData;

  experience: Experience[] = experienceData;
  education: Eductaion[] = educationData;

  constructor(){}
  ngOnInit(): void {
    
  }

}
