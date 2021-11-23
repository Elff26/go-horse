import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/user/email.service';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-forgot-passsword',
  templateUrl: './forgot-passsword.component.html',
  styleUrls: ['./forgot-passsword.component.css', '../../app.component.css']
})
export class ForgotPassswordComponent implements OnInit {

  pageFormForgotPassword: FormGroup = new FormGroup({});
  email:string="";
  title:string="";
  description:string="";

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.pageFormForgotPassword = this.fb.group({
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });
  }

  onSubmit(): void{
    this.onSendEmail();
    this.pageFormForgotPassword.reset();
  }

  onClick(info: Modal){
    info.title = "Sucesso",
    info.description = "Um email para recuperação de senha foi encaminhado para você, verifique sua caixa de entrada ou span!",
    info.textButton = "Okay",
    info.href = "/login"
  }

  onSendEmail():void{
    this.email = this.pageFormForgotPassword.controls['Email'].value;
    this.emailService.onSendEmail(this.email);
  }
}
