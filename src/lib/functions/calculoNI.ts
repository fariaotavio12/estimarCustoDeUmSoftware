import { NIContagem } from "../types/dados";

function valorDefinido(valor: number | undefined): number {
    return valor !== undefined ? valor : 0;
  }

const calculaNI = (valor: NIContagem) : number => {
   
  let total = 0;
  for (const key in valor) {
    total += valorDefinido(valor[key as keyof NIContagem]) 
    
  }
  
  

  return (total * 0.01) + 0.65;
};

export default calculaNI;
