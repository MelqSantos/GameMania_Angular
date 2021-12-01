import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDestaqueComponent } from './shared/item-destaque/item-destaque.component';
import { ItensGaleriaComponent } from './shared/itens-galeria/itens-galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDestaqueComponent,
    ItensGaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
