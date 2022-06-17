import { allUsers } from '../../model/allusers.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user1: allUsers
  constructor() { }

  ngOnInit(): void {
  }

}
