// transferir.component.ts
import { Component, OnInit } from '@angular/core';
import { PilaCoinService } from '../pila-coin.service';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {
  usuarios: Usuario[] = [];
  selectedUserId: number | null = null;

  constructor(private pilaCoinService: PilaCoinService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.pilaCoinService.getUsuarios().subscribe(
      (data: Usuario[]) => {
        this.usuarios = data;
      },
      error => {
        console.error('Erro ao carregar usuários:', error);
      }
    );
  }

  onUsuarioSelect(id: number): void {
    this.selectedUserId = id;
  }

  transferirPila(): void {
    if (this.selectedUserId !== null) {
      this.pilaCoinService.transferirPila(this.selectedUserId).subscribe(
        (response: string) => {
          console.log(response); // Adicione tratamento conforme necessário
          // Após a transferência, você pode atualizar a lista de usuários
          this.carregarUsuarios();
        },
        error => {
          console.error('Erro ao transferir PilaCoin:', error);
        }
      );
    }
  }
}
