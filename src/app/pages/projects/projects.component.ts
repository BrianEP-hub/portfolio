import { Component, OnInit } from '@angular/core';

import { Projects } from 'src/app/helpers/helpers';
import projectData from '../../../assets/projects.json';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = projectData;

  // projectsData = projectData;

  constructor(){

  }

  ngOnInit(){
    // console.log(this.projectsData)
    console.log(this.projects)
  }
}
