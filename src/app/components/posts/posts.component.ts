import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { allUsers } from './../../model/allusers.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }
  @Output() emituser = new EventEmitter<allUsers>()
  allUsers:allUsers[] = []
  ngOnInit(): void {

      this.auth.getUsers().subscribe(data => {
        this.allUsers = data
      })

  }

  onSelected(allUser:allUsers){
    this.emituser.emit(allUser)
    this.router.navigate(['/detail'])
  }


}
