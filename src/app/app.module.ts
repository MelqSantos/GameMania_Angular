import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDestaqueComponent } from './shared/item-destaque/item-destaque.component';
import { ItensGaleriaComponent } from './shared/itens-galeria/itens-galeria.component';
import { ContatoComponent } from './shared/contato/contato.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { HttpClientModule } from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ItemDestaqueComponent,
    ItensGaleriaComponent,
    ContatoComponent,
    FooterComponent,
    PageLoginComponent,
    PageHomeComponent,
    EstoqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
