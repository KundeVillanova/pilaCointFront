// src/app/models/pila-validado.model.ts
export interface PilaValidadoDto {
  id: number;
  nomeValidador: string;
  chavePublicaValidador: string;
  assinaturaPilaCoin: string;
  noncePilaCoinValidado: string;
  nomeCriadorPilaCoin: string;
}
