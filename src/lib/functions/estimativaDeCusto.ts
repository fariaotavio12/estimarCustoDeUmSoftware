export interface EstimativaCustoResultado {
  fa?:number;
  pfb? : number;
  pfa?: number;
  ni ?: number;
  tamanho_kloc?: number;
  tamanhoPFA ?: number;
  produtividade?: number;
  esforco?: number;
  tempo?: number;
  custo_total?: number;
}

function estimativaCustoSoftware(
  pfb: number = 0,
  ni: number = 0,
  ted: number = 1,
  pessoasPorMes: number = 0,
  custoPorPessoaMes: number = 0,
  linhasDeCodigo : number = 0
): EstimativaCustoResultado {
  // Calculando o Fator de Ajuste (FA)
  const fa: number = ni * 0.01 + 0.65;

  // Calculando os Pontos de Função Ajustados (PFA)
  const pfa: number = pfb * fa;

  // Estimativa do Tamanho em KLOC
  const tamanhoKloc: number = pfa * 18;

  const tamanhoPFA : number = linhasDeCodigo / 18;

  // Estimativa de Produtividade
  const produtividade: number = tamanhoPFA / pessoasPorMes;

  // Estimativa do Esforço
  const esforco: number = pfa / produtividade;

  // Estimativa do Tempo
  const tempo: number = esforco / ted;

  // Calculando o custo total
  const custoTotal: number = esforco * custoPorPessoaMes;

  // Retornando os resultados
  return {
    fa,
    pfb , 
    pfa,
    ni ,
    tamanho_kloc: tamanhoKloc,
    tamanhoPFA : tamanhoPFA,
    produtividade,
    esforco,
    tempo,
    custo_total: custoTotal,
  };
}


export default estimativaCustoSoftware