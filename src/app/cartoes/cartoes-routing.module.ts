import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BandeirasComponent } from './bandeiras/bandeiras.component';
import { CartoesComponent } from './cartoes/cartoes.component';

const routes: Routes = [
  { path: '', component: CartoesComponent },
  { path: 'nova/bandeira', component: BandeirasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartoesRoutingModule {}
