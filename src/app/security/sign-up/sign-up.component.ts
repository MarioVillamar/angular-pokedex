import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  error: null|string;

  registerForm: FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5),Validators.email]),
      ],
      password: ['', Validators.required],
    });
  
  }
  get registerFormControls(){
    return this.registerForm.controls;
  }

  submit(){
    if(this.registerForm.valid){
      this.authService.registerUser(this.registerFormControls.username.value,this.registerFormControls.password.value)
      .then((user)=>{
        console.log('Usuario registrado correctamente');
      }
      ).catch((error)=>{
        this.error = 'Error al registrar usuario';
      }
      );
    }
  }


}
