import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user = new User();
  userForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder,
    private authService: AngularFireAuth,
    private router: Router
  ) {

    this.userForm = fb.group({
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    });
  }

  login() {
    this.user = {
      username: this.userForm.get('username').value,
      password: this.userForm.get('password').value,
      age: 0
    }

    console.log(this.user);
    this.authService.auth.signInWithEmailAndPassword(
      this.user.username,
      this.user.password
    ).then(success => 
      this.router.navigate(['/pizzas'])
       )
      .catch(error => this.errorMessage = error.message);
  }

  static passwordMatch(group: FormGroup) {
    let password = group.get('password').value;
    let confirm = group.get('confirm').value;

    return (password === confirm) ? null : { notMatching: true };
  }

  ngOnInit() {
  }

}