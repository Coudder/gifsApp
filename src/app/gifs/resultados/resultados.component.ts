import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  
  get resultados (){
      return this._gifsService.resultados;
  }

  constructor(private _gifsService:GifsService) { }

  ngOnInit(): void {
  }



}
