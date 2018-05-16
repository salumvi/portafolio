import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

productos: any[] = [];
cargando = true;

  constructor(private http: Http) {
    this.cargarProductos();
  }
  public cargarProductos() {

    if ( this.productos.length === 0 ) {
        this.http.get('https://paginaweb-d86a1.firebaseio.com/PRODUCTOS_IDX.json')
          .subscribe(data => {
            console.log(data.json());
        });
        this.cargando = false;

    }

}

}
