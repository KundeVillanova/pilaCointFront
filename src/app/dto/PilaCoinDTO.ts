export interface PilaCoinDTO {
    id: number;
    dataCriacao: Date;
    chaveCriador: string;
    nomeCriador: string;
    status: StatusPila;
    nonce: string;
}
  
export enum StatusPila {
    AG_BLOCO = 'AG_BLOCO',
    AG_VALIDACAO = 'AG_VALIDACAO',
    BLOCO_EM_VALIDACAO = 'BLOCO_EM_VALIDACAO',
    VALIDO = 'VALIDO',
    INVALIDO = 'INVALIDO'
}