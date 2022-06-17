import { allUsers } from './../../../model/allusers.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  @Input() user: allUsers
  @Output() userSelected = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }


  onSelected(){
    this.userSelected.emit()
  }

}
