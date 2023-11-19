"use client";

import Input from "@/components/elements/input/input";
import Style from "./page.module.css";
import Divisor from "@/components/elements/divisor/divisor";
import { useEffect, useState } from "react";
import Step from "./step";
import ButtonChamados from "./buttons";
import { IDadosProjeto, PFBContagem } from "@/lib/types/dados";
import Form from "./form";
import calcularPFB from "@/lib/functions/calculaPFB";
import calculoNI from "@/lib/functions/calculoNI";



const Page = () => {
  const [dadosProjeto, setDadosProjeto] = useState<IDadosProjeto>({
    pfb: {
      arquivoLogico: { simples: undefined, media: undefined, complexa: undefined},
      arquivoInterfaceExterna: {
        simples: undefined,
        media: undefined,
        complexa: undefined,
      },
      entradaExterna: {
        simples: undefined,
        media: undefined,
        complexa: undefined,
      },
      saidaExterna: {
        simples: undefined,
        media: undefined,
        complexa: undefined,
      },
      consultaExterna: {
        simples: undefined,
        media: undefined,
        complexa: undefined,
      },
    },
    ni: {
      comunicacaoDeDados: undefined,
      funcoesDistribuidas: undefined,
      performace: undefined,
      configuracaoDoEquipamento: undefined,
      volumeDeTransacoes: undefined,
      entradaDeDadosOnline: undefined,
      interfaceComUsuario: undefined,
      atualizacaoOnline : undefined,
      processamentoComplexo : undefined,
      reusabilidade : undefined,
      facilidadeImplatacao : undefined,
      facilidadeOperacional : undefined,
      multiplosLocais : undefined,
      facilidadeMudanca : undefined,
    },
  });
  const [page, setPage] = useState(0);

  
  useEffect(() => {
    if (page == 6) {
      setPage(5)
      console.log(calcularPFB(dadosProjeto.pfb) , calculoNI(dadosProjeto.ni));
      
      let PFA = calcularPFB(dadosProjeto.pfb) * calculoNI(dadosProjeto.ni)
      console.log(PFA);
      // calculoNI(dadosProjeto.ni)
     
      }
  },[page])
  return (
    <main className={Style.main}>
      <div className={Style.container}>
        <div className={Style.titulo_Subtitulo}>
          <h1>Estimativa Manual</h1>
          <h5>Descubra o custo de um software agora mesmo</h5>
        </div>
        <div className={Style.containerObjeto}>
          <Input
            placeholder="Adicione um nome"
            label="Nome do Projeto"
            style={{ maxWidth: 240 }}
          />
          <Divisor />
          <form
            className={Style.containerForm}
            onSubmit={(event) => {
              event.preventDefault();
              setPage(page + 1);
            }}
          >
            <Step page={page} setPage={setPage} />
            <Form dadosProjeto={dadosProjeto} setDadosProjeto={setDadosProjeto} page={page}/>
            <ButtonChamados page={page} setPage={setPage}/>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;
