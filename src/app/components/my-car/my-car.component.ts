import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '../modal/modal';
import { Products } from './products';

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.css', '../../app.component.css']
})
export class MyCarComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  onClick(info: Modal){
    info.title = "Sucesso",
    info.description = "Você finalizou sua compra! Nós encaminharemos um email com a confirmação da sua compra e falando sobre os próximos passos.",
    info.textButton = "Okay",
    info.href = "/"
  }
}
