// src/app/pila-coin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PilaCoinDTO } from './dto/PilaCoinDTO';
import { PilaValidadoDto } from './dto/PilaValidadoDto';

@Injectable({
  providedIn: 'root',
})
export class PilaCoinService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getMinerados(): Observable<PilaCoinDTO[]> {
    return this.http.get<PilaCoinDTO[]>(`${this.baseUrl}/pilas/minerados`);
  }

  getValidadosOutros(): Observable<PilaValidadoDto[]> {
    return this.http.get<PilaValidadoDto[]>(`${this.baseUrl}/pilas/validados/outros`);
  }
  
  getSaldo(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/pilas/saldo`);
  }
  
  minePilaCoins(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/pilas/minerar`);
  }
  
  stopMiningPilaCoins(): Observable<string> {
    return this.http.get(`${this.baseUrl}/pilas/parar-mineracao`, { responseType: 'text' });
  }
  
}
