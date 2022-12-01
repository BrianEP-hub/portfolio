import { Component, OnInit } from '@angular/core';

import { Projects } from 'lib/helpers/helpers';
import * as projectData from '../../assets/projects.json';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = projectData;

  constructor(){

  }

  ngOnInit(){
    console.log(this.projects)
  }

  
}
