// src/app/pila-coin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PilaCoinJson } from './models/PilaCoinJson';
import { PilaValidadoDto } from './models/PilaValidadoDto';
import { Usuario } from './models/Usuario';

@Injectable({
  providedIn: 'root',
})
export class PilaCoinService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}


  getSaldo(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/pilas/saldo`);
  }

  minePilaCoins(): Observable<string> {
    return this.http.get(`${this.baseUrl}/pilas/minerar`, { responseType: 'text' });
  }

  stopMiningPilaCoins(): Observable<string> {
    return this.http.get(`${this.baseUrl}/pilas/parar-mineracao`, { responseType: 'text' });
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/pilas/usuarios`);
  }

  transferirPila(idUsuario: number): Observable<string> {
    return this.http.post(`${this.baseUrl}/pilas/transferir`, idUsuario, { responseType: 'text' });
  }
  
  getMinerados(): Observable<PilaCoinJson[]> {
    return this.http.get<PilaCoinJson[]>(`${this.baseUrl}/pilas/minerados`);
  }
  
  getValidadosOutros(): Observable<PilaValidadoDto[]> {
    return this.http.get<PilaValidadoDto[]>(`${this.baseUrl}/pilas/validados/outros`);
  }
}
