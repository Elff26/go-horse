import { Component, OnInit, Input } from '@angular/core';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-forgot-passsword',
  templateUrl: './forgot-passsword.component.html',
  styleUrls: ['./forgot-passsword.component.css', '../../app.component.css']
})
export class ForgotPassswordComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  onClick(info: Modal){
    info.title = "Sucesso",
    info.description = "Um email para recuperação de senha foi encaminhado para você, verifique sua caixa de entrada ou span!",
    info.textButton = "Okay"
  }
}
