import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  loginForm: FormGroup


  ngOnInit(): void {
    this.loginForm = this.createFormgroup()
  }
  createFormgroup() :FormGroup{
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    })
  }
  onSubmit(){
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe((msg) => {
        console.log(msg)
    },(error) => {
      if(error){
        console.log(error.message)
      }
    })
  }


}
