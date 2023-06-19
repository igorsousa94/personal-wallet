import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BandeirasComponent } from './bandeiras/bandeiras.component';
import { CartoesComponent } from './cartoes/cartoes.component';

import { CartoesRoutingModule } from './cartoes-routing.module';

@NgModule({
  declarations: [CartoesComponent, BandeirasComponent],
  imports: [CommonModule, CartoesRoutingModule],
  exports: [CartoesComponent, BandeirasComponent],
})
export class CartoesModule {}
