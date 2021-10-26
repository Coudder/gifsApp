import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _gifsService:GifsService) { } //inyectamos el servicio para poder acceder a el

  ngOnInit(): void {
  }

  get historial() { //creamos un getter para traer el historial
    return  this._gifsService.historial; //del servicio escogemos el arreglo historial que es donde se guardan los datos
  }

  buscar(termino:string){
    //console.log(termino);
    this._gifsService.buscarGifs(termino);
    
  }


}
