// src/app/models/pila-coin-json.model.ts
export interface PilaCoinJson {
    id: number;
    dataCriacao: Date;
    chaveCriador: string;
    nomeCriador: string;
    status: StatusPila;
    nonce: string;
}
  
export enum StatusPila {
    AG_BLOCO,
    AG_VALIDACAO,
    BLOCO_EM_VALIDACAO,
    VALIDO,
    INVALIDO,
}
  