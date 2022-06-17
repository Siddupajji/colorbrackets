import { allUsers } from './../../model/allusers.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  ifselect: allUsers[] = []
  constructor() { }

  ngOnInit(): void {
  }

  ifselected(select: allUsers){
    this.ifselect.push(select)
  }

}
