import { Component, OnInit } from '@angular/core';
import { PilaCoinService } from '../pila-coin.service';

@Component({
  selector: 'app-pilacoin-list',
  templateUrl: './pilacoin-list.component.html',
  styleUrls: ['./pilacoin-list.component.css']
})
export class PilacoinListComponent implements OnInit {

  minerados: any[];
  validadosOutros: any[];

  constructor(private pilaCoinService: PilaCoinService) {}

  ngOnInit() {
    this.pilaCoinService.getMinerados().subscribe((data) => {
      this.minerados = data;
    });

    this.pilaCoinService.getValidadosOutros().subscribe((data) => {
      this.validadosOutros = data;
    });
  }

}
