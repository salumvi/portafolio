import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PortafolioComponent,
        PorfolioItemComponent,
        AboutComponent,
      SearchComponent} from './components/index.paginas';


 const routes: Routes = [
     { path: 'home', component: PortafolioComponent },
     { path: 'about', component: AboutComponent },
     { path: 'producto/:id', component: PorfolioItemComponent },
     { path: 'search/:termino', component: SearchComponent },
     { path: '**', pathMatch: 'full', redirectTo: 'home' },
 ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
