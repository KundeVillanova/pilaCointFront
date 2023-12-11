import { Component, OnInit } from '@angular/core';
import { PilaCoinJson } from '../models/PilaCoinJson';
import { PilaValidadoDto } from '../models/PilaValidadoDto';
import { PilaCoinService } from '../pila-coin.service';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  pilasMinerados: PilaCoinJson[] = [];
  pilasValidados: PilaValidadoDto[] = [];
  saldo: number = 0;

  constructor(private pilaCoinService: PilaCoinService) { }

  ngOnInit(): void {
    this.pilaCoinService.getMinerados().subscribe(data => {
      this.pilasMinerados = data;
    });

    this.pilaCoinService.getValidadosOutros().subscribe(data => {
      this.pilasValidados = data;
    });

    this.pilaCoinService.getSaldo().subscribe(data => {
      this.saldo = data;
    });
  }

  transferir(): void {
    console.log('Transferindo pilas...');
  }

}

