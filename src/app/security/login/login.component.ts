import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: null|string;
  
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authServide: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5),Validators.email]),
      ],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      return console.log('Formulario no valido!');
    }
    this.authServide
      .loginWithEmailAndPassword(
        this.loginFormControls.username.value,
        this.loginFormControls.password.value
      )
      .then((user) => {})
      .catch((error) => {
        this.error = 'credenciales invalidas'
      });
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }
}
