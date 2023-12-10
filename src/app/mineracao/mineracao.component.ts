import { Component, OnInit } from '@angular/core';
import { PilaCoinService } from '../pila-coin.service';

@Component({
  selector: 'app-mineracao',
  templateUrl: './mineracao.component.html',
  styleUrls: ['./mineracao.component.css']
})
export class MineracaoComponent implements OnInit {

  constructor(private pilaCoinService: PilaCoinService) { }

  ngOnInit(): void {
  }

  startMining(): void {
    this.pilaCoinService.minePilaCoins().subscribe(response => {
      console.log(response); // Exiba ou manipule a resposta conforme necessário
    });
  }

  stopMining(): void {
    this.pilaCoinService.stopMiningPilaCoins().subscribe(response => {
      console.log(response); // Aqui você terá a string "mineracaoParada"
    });
  }
}
