interface EstimativaCustoResultado {
  pfa: number;
  tamanho_kloc: number;
  produtividade: number;
  esforco: number;
  tempo: number;
  custo_total: number;
}

function estimativaCustoSoftware(
  pfb: number,
  ni: number,
  ted: number = 1,
  pessoasPorMes: number = 6,
  custoPorPessoaMes: number = 5000
): EstimativaCustoResultado {
  // Calculando o Fator de Ajuste (FA)
  const fa: number = ni * 0.01 + 0.65;

  // Calculando os Pontos de Função Ajustados (PFA)
  const pfa: number = pfb * fa;

  // Estimativa do Tamanho em KLOC
  const tamanhoKloc: number = pfa * 18;

  // Estimativa de Produtividade
  const produtividade: number = pfa / pessoasPorMes;

  // Estimativa do Esforço
  const esforco: number = pfa / produtividade;

  // Estimativa do Tempo
  const tempo: number = esforco / ted;

  // Calculando o custo total
  const custoTotal: number = esforco * custoPorPessoaMes;

  // Retornando os resultados
  return {
    pfa,
    tamanho_kloc: tamanhoKloc,
    produtividade,
    esforco,
    tempo,
    custo_total: custoTotal,
  };
}


export default {estimativaCustoSoftware}