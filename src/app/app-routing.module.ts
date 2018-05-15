import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent,
        PorfolioItemComponent,
        PortafolioComponent } from './components/index.paginas';


 const routes: Routes = [
     { path: 'home', component: PortafolioComponent },
     { path: 'about', component: AboutComponent },
     { path: 'producto', component: PorfolioItemComponent },
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
