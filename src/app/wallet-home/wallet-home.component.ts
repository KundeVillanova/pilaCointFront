import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.css']
})
export class WalletHomeComponent implements OnInit {
  welcomeMessage: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Exibir a mensagem de boas-vindas ao inicializar o componente
    this.welcomeMessage = 'Bem-vindo à sua carteira digital!';
  }

  navigateTo(route: string): void {
    if (route === 'transferir') {
      this.router.navigate(['/transferir']);
    } else if (route === 'mineracao') {
      this.router.navigate(['/mineracao']);
    } else if (route === 'carteira') {
      // Defina a mensagem para null ao navegar para a carteira
      this.welcomeMessage = null;
      this.router.navigate(['/carteira']);
    } else {
      // Adicione outras opções de navegação conforme necessário
    }
  }
}
