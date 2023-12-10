// wallet-home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.css']
})
export class WalletHomeComponent {

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    if (route === 'pilacoin-list') {
      this.router.navigate(['/pilacoin-list']);
    }if (route === 'mineracao') {
      this.router.navigate(['/mineracao']);
    }if(route === 'carteira'){
      this.router.navigate(['/carteira']);
    } 
    else {
      // Adicione outras opções de navegação conforme necessário
    }
  }
}
