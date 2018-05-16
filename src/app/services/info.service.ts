import { Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public infoPagina: any = {};
  public infoEquipo: any[] = [];
  public cargandoInfo = false;
  public cargandoInfoNosotros = false;
  constructor( public http: Http) {
  this.cargaInfo();
this.cargaSobreNosotros();

   }

public cargaInfo() {
  this.http.get('assets/data/info.pagina.json')
  .subscribe(data => {
    this.cargandoInfo = true;
    this.infoPagina = data.json();
  });

}

public cargaSobreNosotros() {
  this.http.get('https://paginaweb-d86a1.firebaseio.com/EQUIPO.json')
  .subscribe(data => {
    this.cargandoInfoNosotros = true;
    // console.log(data.json());
    this.infoEquipo = data.json();
  });

}



}
