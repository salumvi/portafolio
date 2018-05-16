import { Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public infoPagina: any = {};
  public cargando = false;

  constructor( public http: Http) {

this.http.get('assets/data/info.pagina.json')
        .subscribe(data => {
          this.cargando = true;
          this.infoPagina = data.json();
        });

   }
}
