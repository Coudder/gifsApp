import { Component, ElementRef, ViewChild  } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;//del inputelement para que nos muestre las propiedades del value en nativeElement
 

  constructor(private _gifsService:GifsService){}


  buscar(){
   // console.log(this.txtBuscar);

   const valor = this.txtBuscar.nativeElement.value;//entramos al valor que insertamos
   //console.log(valor);

    if(valor.trim().length === 0){//si no hay texto en la busqueda ni espacios no acepta
      return;
    }


   this.txtBuscar.nativeElement.value = ''; //borramos la informacion cuando se da enter
   
   this._gifsService.buscarGifs(valor); //agrrgamos al arreglo del servicio el valor ingresado
    
  }

}
