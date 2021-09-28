import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Modal } from './modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modal: Modal;
  @Output() notificacao = new EventEmitter();

  constructor() {
    this.modal = new Modal();
   }

  ngOnInit(): void {
    this.notificacao.emit(this.modal);
  }
}
