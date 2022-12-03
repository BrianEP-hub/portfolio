import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void{
    this.activatedRoute.fragment.subscribe((val) => {
      console.log(val)
    })
  }
}
