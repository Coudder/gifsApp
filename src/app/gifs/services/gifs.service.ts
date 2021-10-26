import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' //se puede usar en cualquier parte no hay que estar importando en los providers
})
export class GifsService {

  private apiKey:string  = 'L8QjhGKNPDC8PchK65ELv14OnXbcYH9R'; 
  private servicioUrl:string = 'https://api.giphy.com/v1/gifs' //ponelos el endpoinbt en una variable

  private _historial:string[] = []; //declaramos el arreglo privado de tipo string las variables privadas se
                                    //declaran con _


  public resultados : Gif[] = [];

  get historial() {
   
    return [...this._historial]; //para romper la referencia con eloperador spread ....
                                //no se modifica el arreglo orifinal y se crea uno nuevo 
  }

  constructor(private _http:HttpClient) {

   // this_historial = JSON.parse(localStorage.getItem('historial')!) || [] ;
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);//parse retorna a lo que es originalmente
      //se usa el signo de admiracion para decirle a angular quee sestamos seguros de lo que estamso haciendo
    }

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }


  buscarGifs(query: string = ''){

    query = query.trim().toLowerCase(); //pasamos todo el texto a minusculas

    if( !this._historial.includes(query)){ //si no inclñuye el query
      this._historial.unshift(query); //unshift es para insertar en el inicio
      this._historial = this._historial.splice(0,10); //acepta solo 10 busquedas

      //granbar en local
      localStorage.setItem('historial', JSON.stringify(this._historial)); //se convierte el arreglo en string
    }
    /*PRIMERO CONVERTIMOS A MINUSCULAS EL TEXTO
    DESPUES  CEHECAMOS SI LA BUSQUEDA YA TIENE UNA IGUAL
    SI NO ENTONCES INSERTA AL PRINCIPIO LA BUSQUEDA
    Y SOLO NOS ACEPTA LOS 10 PRIMERAS BUSQUEDAS*/

    //SIMPLIFICAR EL USO DE LA APIKEY
    const params = new HttpParams()
                  .set('api_key', this.apiKey) //string y su valor que se le pasa el key de la api
                  .set('limit', '20') //se pone un limite de la busqueda a 20
                  .set('q', query); //y lo que se quiere buscar la 1 de query
      
         // console.log(params.toString());
          

    this._http.get<SearchGifsResponse>(` ${this.servicioUrl}/search`, {params:params})//se pasa la variable con el endpoint y sus parametros de busqueda
          .subscribe( (resp) => { //para que no de lata el .data ponemos que esd e timo any
           // console.log(resp.data);
            this.resultados =resp.data;
            localStorage.setItem('resultados',JSON.stringify(this.resultados)); //para guardar los resultados es en la respuesta

          } )

          /* alt + 96 backticks */

   // console.log(this._historial);
    
          //para genberar el tipado usar la pagina de quicktype.io y copiar toda la respuestra del postman
          //y pegarla ahi y convertirla a typescript
          //crar el archivo de interface y importarala al servicio y el tipo se pone al lado del
          //get<interfacehttp>


  }

  }
