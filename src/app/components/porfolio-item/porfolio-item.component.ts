import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-porfolio-item',
  templateUrl: './porfolio-item.component.html',
  styles: []
})
export class PorfolioItemComponent {

  public producto: any[] = undefined;
  public id = '';
  constructor(public route: ActivatedRoute,
  public _ps: ProductosService) {
          this.route.params.subscribe(parametros => {
            this.id = parametros['id'];
            // console.log(parametros);
            // console.log(parametros['id']);
          this._ps.cargarProducto(parametros['id']).subscribe(data => {
            this.producto = data.json();
          });


});


   }



}
