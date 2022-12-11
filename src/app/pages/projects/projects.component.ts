import { Component, OnInit } from '@angular/core';

import { Projects, Services } from 'src/app/helpers/helpers';
import projectData from '../../../assets/projects.json';
import serviceData from '../../../assets/services.json'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = projectData;
  services: Services[] = serviceData;


  constructor(){

  }

  ngOnInit(){
  }
}
