import { PFBContagem } from "../types/dados";

type Pesos = {
  simples: { [key in keyof PFBContagem]: number };
  media: { [key in keyof PFBContagem]: number };
  complexa: { [key in keyof PFBContagem]: number };
};

function valorDefinido(valor: number | undefined): number {
  return valor !== undefined ? valor : 0;
}

function calcularPFB(contagem: PFBContagem): number {
  console.log(contagem);

  const pesos: Pesos = {
    simples: {
      arquivoLogico: 7,
      arquivoInterfaceExterna: 5,
      entradaExterna: 3,
      saidaExterna: 4,
      consultaExterna: 3,
    },
    media: {
      arquivoLogico: 10,
      arquivoInterfaceExterna: 7,
      entradaExterna: 4,
      saidaExterna: 5,
      consultaExterna: 4,
    },
    complexa: {
      arquivoLogico: 15,
      arquivoInterfaceExterna: 10,
      entradaExterna: 6,
      saidaExterna: 7,
      consultaExterna: 6,
    },
  };

  let total = 0;

  for (const tipo of ["simples", "media", "complexa"] as const) {
    for (const subTipo in contagem) {
      const peso = pesos[tipo][subTipo as keyof (typeof pesos)[typeof tipo]];
      const quantidade = contagem[subTipo as keyof typeof contagem][tipo];
      if (quantidade != undefined) {
        total += peso * valorDefinido(quantidade);
      }
    }
  }

  return total;
}

export default calcularPFB;

// Exemplo de uso

// const pfbCalculado = calcularPFB(contagemExemplo);
// console.log(`Pontos de Função Brutos (PFB): ${pfbCalculado}`);
