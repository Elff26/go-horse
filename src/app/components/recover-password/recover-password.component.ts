import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ConfirmedValidator } from '../login/validatorPassword';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css', '../../app.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  pageFormRecoverPassword: FormGroup = new FormGroup({});
  email:string="";
  password:string="";

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.onUpdatePassword();
    this.pageFormRecoverPassword.reset();
  }

  createForm(){
    this.pageFormRecoverPassword = this.fb.group({
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$")]],
      PasswordConfirm: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$")]],
    },
    {
      validator: ConfirmedValidator('Password', 'PasswordConfirm')
    });
  }

  onUpdatePassword():void{
    this.email = this.pageFormRecoverPassword.controls['Email'].value;
    this.password = this.pageFormRecoverPassword.controls['PasswordConfirm'].value;
  }
}
