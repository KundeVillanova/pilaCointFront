// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletHomeComponent } from './wallet-home/wallet-home.component';
import { PilacoinListComponent } from './pilacoin-list/pilacoin-list.component';
import { MineracaoComponent } from './mineracao/mineracao.component';
import { CarteiraComponent } from './carteira/carteira.component';

const routes: Routes = [
  { path: '', component: WalletHomeComponent },
  { path: 'pilacoin-list', component: PilacoinListComponent },
  { path: 'mineracao', component: MineracaoComponent },
  { path: 'carteira', component: CarteiraComponent } // Adiciona esta linha
  // Adicione outras rotas conforme necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
