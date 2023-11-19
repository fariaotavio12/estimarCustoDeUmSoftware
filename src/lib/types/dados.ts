export interface PFBContagem {
  arquivoLogico: ContagemTipoFuncao;
  arquivoInterfaceExterna: ContagemTipoFuncao;
  entradaExterna: ContagemTipoFuncao;
  saidaExterna: ContagemTipoFuncao;
  consultaExterna: ContagemTipoFuncao;
}

export interface ContagemTipoFuncao {
  simples?: number;
  media?: number;
  complexa?: number;
}

export interface NIContagem {
  comunicacaoDeDados?: number;
  funcoesDistribuidas?: number;
  performace?: number;
  configuracaoDoEquipamento?: number;
  volumeDeTransacoes?: number;
  entradaDeDadosOnline?: number;
  interfaceComUsuario?: number;
  atualizacaoOnline?: number;
  processamentoComplexo?: number;
  reusabilidade?: number;
  facilidadeImplatacao?: number;
  facilidadeOperacional?: number;
  multiplosLocais?: number;
  facilidadeMudanca?: number;
}

export interface IDadosProjeto {
  pfb: PFBContagem;
  ni: NIContagem;
}
