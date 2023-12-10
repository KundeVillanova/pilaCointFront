import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PilacoinListComponent } from './pilacoin-list/pilacoin-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WalletHomeComponent } from './wallet-home/wallet-home.component';
import { MineracaoComponent } from './mineracao/mineracao.component';
import { CarteiraComponent } from './carteira/carteira.component';

@NgModule({
  declarations: [
    AppComponent,
    PilacoinListComponent,
    WalletHomeComponent,
    MineracaoComponent,
    CarteiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }