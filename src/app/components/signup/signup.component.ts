import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService) { }

  signupForm: FormGroup
  login = false

  ngOnInit(): void {
    this.signupForm = this.createFormgroup()

  }

  createFormgroup() :FormGroup{
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    })
  }

  onSubmit(){
    this.auth.signup(this.signupForm.value)
    .subscribe((msg) => {
      console.log(msg)
      this.signupForm.reset()
    },(error) => {
      if(error){
        console.log(error.message)
      }
    })
  }

}
