export class PilaValidadoDto {
    id: number;
    nomeValidador: string;
    chavePublicaValidador: string;
    assinaturaPilaCoin: string;
    noncePilaCoinValidado: string;
    nomeCriadorPilaCoin: string;
  
    constructor(
      id: number,
      nomeValidador: string,
      chavePublicaValidador: string,
      assinaturaPilaCoin: string,
      noncePilaCoinValidado: string,
      nomeCriadorPilaCoin: string
    ) {
      this.id = id;
      this.nomeValidador = nomeValidador;
      this.chavePublicaValidador = chavePublicaValidador;
      this.assinaturaPilaCoin = assinaturaPilaCoin;
      this.noncePilaCoinValidado = noncePilaCoinValidado;
      this.nomeCriadorPilaCoin = nomeCriadorPilaCoin;
    }
}