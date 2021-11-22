import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { Modal } from '../modal/modal';
import { ConfirmedValidator } from './validatorPassword';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent implements OnInit {

  clicked: boolean = false;
  pageForm: FormGroup = new FormGroup({});
  name:string = "";
  email:string = "";
  password:string = "";
  phone:string = "";
  cpf:string = "";
  surname:string = "";
  title:string = "";
  description:string = "";
  private modalSubscription:Subscription = Subscription.EMPTY;


  constructor(private userService: UserService, private route: Router, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.modalSubscription = this.userService.getModalUpdated().subscribe(title=>{
      this.title = title});
  }

  onLogin() {
    this.userService.onLogin();
    this.route.navigate(['home']);
  }

  onClicked(){
    this.clicked = true;
  }

  onNotClicked(){
    this.onInsertUser();
    this.clicked = false;
  }

  //TODO: Fazer receber titulo e descrição por parametro
  onClick(info: Modal){
    info.title = this.title,
    info.description = this.description,
    info.textButton = "Okay",
    info.href = "/login"
  }

  createForm(){
    this.pageForm = this.fb.group({
      Name: ['', Validators.required],
      Surname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$")]],
      PasswordConfirm: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$")]],
      CPF: ['', [Validators.required, Validators.pattern("^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$")]],
      Phone: ['', [Validators.required, Validators.pattern("^\\([0-9]{2}\\)\\s[0-9]{4,5}-[0-9]{4}$")]]
    },
    {
      validator: ConfirmedValidator('Password', 'PasswordConfirm')
    });
  }

  onSubmit(): void{
    this.onInsertUser();
    this.pageForm.reset();
  }

  onInsertUser():void{
    this.name = this.pageForm.controls['Name'].value;
    this.surname = this.pageForm.controls['Surname'].value;
    this.email = this.pageForm.controls['Email'].value;
    this.password = this.pageForm.controls['Password'].value;
    this.cpf = this.pageForm.controls['CPF'].value;
    this.phone = this.pageForm.controls['Phone'].value;

    this.userService.onInsertUser(this.name,this.surname,this.email,this.password,this.phone,this.cpf);
  }
}
