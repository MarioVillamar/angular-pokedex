import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent implements OnInit {

  constructor(private authFire:AuthService) { }

  ngOnInit(): void {

  }

  resend(){
    this.authFire.sendVerificationMail();
  }

}
