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
import estimativaDeCusto, {
  EstimativaCustoResultado,
} from "@/lib/functions/estimativaDeCusto";
import estimativaCustoSoftware from "@/lib/functions/estimativaDeCusto";
import ModalDynamico from "@/components/elements/modal/modalDinamico";

const Page = () => {
  const [mostraRetorno, setMostraRetorno] = useState(false);
  const [dadosRetorno, setDadosRetorno] = useState<EstimativaCustoResultado>({
    fa: undefined,
    pfb: undefined,
    pfa: undefined,
    ni: undefined,
    tamanho_kloc: undefined,
    tamanhoPFA: undefined,
    produtividade: undefined,
    esforco: undefined,
    tempo: undefined,
    custo_total: undefined,
  });
  const [dadosProjeto, setDadosProjeto] = useState<IDadosProjeto>({
    nome: "",
    numeroPessoas: undefined,
    custoPessoas: undefined,
    ted: undefined,
    linhasDeCodigo: undefined,
    pfb: {
      arquivoLogico: {
        simples: undefined,
        media: undefined,
        complexa: undefined,
      },
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
      atualizacaoOnline: undefined,
      processamentoComplexo: undefined,
      reusabilidade: undefined,
      facilidadeImplatacao: undefined,
      facilidadeOperacional: undefined,
      multiplosLocais: undefined,
      facilidadeMudanca: undefined,
    },
  });
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page == 6) {
      setPage(5);
      setDadosRetorno(
        estimativaCustoSoftware(
          calcularPFB(dadosProjeto.pfb),
          calculoNI(dadosProjeto.ni),
          dadosProjeto.ted,
          dadosProjeto.numeroPessoas,
          dadosProjeto.custoPessoas,
          dadosProjeto.linhasDeCodigo
        )
      );
      setMostraRetorno(true);

      // console.log(calcularPFB(dadosProjeto.pfb), calculoNI(dadosProjeto.ni));

      // let PFA = calcularPFB(dadosProjeto.pfb) * calculoNI(dadosProjeto.ni);
      // console.log(PFA);
      // calculoNI(dadosProjeto.ni)
    }
  }, [page]);
  return (
    <main className={Style.main}>
      <div className={Style.container}>
        <div className={Style.titulo_Subtitulo}>
          <h1>Estimativa Manual</h1>
          <h5>Descubra o custo de um software agora mesmo</h5>
        </div>
        <div className={Style.containerObjeto}>
          <div className={Style.container_input_header}>
            <Input
              placeholder="Adicione um nome"
              label="Nome do Projeto"
              style={{ maxWidth: 240 }}
              value={dadosProjeto.nome}
              onChange={(e) =>
                setDadosProjeto({ ...dadosProjeto, nome: e.target.value })
              }
            />
            <Input
              placeholder="quantidade de pessoas"
              label="Quantidade de pessoas por mes"
              style={{ maxWidth: 240 }}
              type="number"
              value={dadosProjeto.numeroPessoas}
              onChange={(e) =>
                setDadosProjeto({
                  ...dadosProjeto,
                  numeroPessoas: +e.target.value,
                })
              }
            />
            <Input
              placeholder="Valor em reais"
              label="Custo por pessoa mes"
              style={{ maxWidth: 240 }}
              type="number"
              onChange={(e) =>
                setDadosProjeto({
                  ...dadosProjeto,
                  custoPessoas: +e.target.value,
                })
              }
            />
            <Input
              placeholder="Adicione um valor"
              label="Ted"
              style={{ maxWidth: 240 }}
              type="number"
              onChange={(e) =>
                setDadosProjeto({ ...dadosProjeto, ted: +e.target.value })
              }
            />
            <Input
              placeholder="Adicione um valor"
              label="Linhas de codigo"
              style={{ maxWidth: 240 }}
              type="number"
              onChange={(e) =>
                setDadosProjeto({
                  ...dadosProjeto,
                  linhasDeCodigo: +e.target.value,
                })
              }
            />
          </div>

          <Divisor />
          <form
            className={Style.containerForm}
            onSubmit={(event) => {
              event.preventDefault();
              setPage(page + 1);
            }}
          >
            <Step page={page} setPage={setPage} />
            <Form
              dadosProjeto={dadosProjeto}
              setDadosProjeto={setDadosProjeto}
              page={page}
            />
            <ButtonChamados page={page} setPage={setPage} />
          </form>
        </div>

        <ModalDynamico
          isOpen={mostraRetorno}
          setIsOpen={() => setMostraRetorno(false)}
          overflow
          overlay
        >
          <div className={Style.containerResultado}>
            <h4>{dadosProjeto.nome || "Nome não informado"}</h4>
            <h5>
              Estimativa FA:{" "}
              <strong>{dadosRetorno.fa || "Não foi possivel calcular"}</strong>
            </h5>
            <h5>
              Estimativa do Tamanho em KLOC:{" "}
              <strong>
                {" "}
                {dadosRetorno.tamanho_kloc || "Não foi possivel calcular"}
              </strong>
            </h5>
            <h5>
              Estimativa do Tamanho em PFA:{" "}
              <strong>
                {dadosRetorno.tamanhoPFA || "Não foi possivel calcular"}
              </strong>
            </h5>
            <h5>
              Estimativa de Produtividade:{" "}
              <strong>
                {dadosRetorno.produtividade || "Não foi possivel calcular"}
              </strong>
            </h5>
            <h5>
              Estimativa de Esforço:{" "}
              <strong>
                {" "}
                {dadosRetorno.esforco || "Não foi possivel calcular"}
              </strong>
            </h5>
            <h5>
              Estimativa de Tempo:{" "}
              <strong>
                {" "}
                {dadosRetorno.tempo || "Não foi possivel calcular"}
              </strong>
            </h5>
            <h5>
              Estimativa de Custo Total:{" "}
              <strong>
                {" "}
                {dadosRetorno.custo_total || "Não foi possivel calcular"}
              </strong>
            </h5>
          </div>
        </ModalDynamico>
      </div>
    </main>
  );
};

export default Page;
