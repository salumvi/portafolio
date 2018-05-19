import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

productos: any[] = [];
productosSearch: any[] = [];
producto: any[] = [];
cargando = true;

  constructor(private http: Http) {
    this.cargarProductos();
  }

public buscarProducto(termino: string) {
  this.productosSearch = [];

this.productos.forEach(prod => {

   if ( prod.categoria.includes(termino) ) {
     this.productosSearch.push(prod);
   }
});


}

  public cargarProductos() {
    this.cargando = true;
    if ( this.productos.length === 0 ) {
        this.http.get('https://paginaweb-d86a1.firebaseio.com/PRODUCTOS_IDX.json')
          .subscribe(data => {

           // setTimeout(() => {
              // console.log(data.json());
              this.productos = data.json();
              this.cargando = false;
           // }, 2000);
        });


    }

}

public cargarProducto (codigo: string) {
  const url = `https://paginaweb-d86a1.firebaseio.com/PRODUCTOS/${codigo}.json`;
return this.http.get(url);

}


}
