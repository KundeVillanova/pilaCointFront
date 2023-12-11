// mineracao.component.ts
import { Component, OnInit } from '@angular/core';
import { PilaCoinService } from '../pila-coin.service';
import { PilaCoinJson } from '../models/PilaCoinJson';

@Component({
  selector: 'app-mineracao',
  templateUrl: './mineracao.component.html',
  styleUrls: ['./mineracao.component.css']
})
export class MineracaoComponent implements OnInit {
  minerados: PilaCoinJson[] = [];

  constructor(private pilaCoinService: PilaCoinService) {}

  ngOnInit(): void {
    this.loadMinerados();
  }

  startMining(): void {
    this.pilaCoinService.minePilaCoins().subscribe(response => {
      console.log(response); // Aqui você terá a string "mineracaoAtiva"
      // Após iniciar a mineração, recarregamos a lista de minerados
      this.loadMinerados();
    });
  }

  stopMining(): void {
    this.pilaCoinService.stopMiningPilaCoins().subscribe(response => {
      console.log(response); // Aqui você terá a string "mineracaoParada"
    });
  }

  private loadMinerados(): void {
    this.pilaCoinService.getMinerados().subscribe(
      (data: PilaCoinJson[]) => {
        this.minerados = data;
      },
      error => {
        console.error('Erro ao carregar minerados:', error);
      }
    );
  }
}
