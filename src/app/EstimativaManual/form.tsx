import { IDadosProjeto } from "@/lib/types/dados";
import Style from "./form.module.css";
import Input from "@/components/elements/input/input";

const Form = ({
  page,
  dadosProjeto,
  setDadosProjeto,
}: {
  page: number;
  dadosProjeto: IDadosProjeto;
  setDadosProjeto: React.Dispatch<React.SetStateAction<IDadosProjeto>>;
}) => {
  return (
    <div>
      {/* logicaInterna */}
      <div
        className={`${page == 0 ? Style.fadeIn : Style.fadeOut} ${
          Style.container_form
        }`}
      >
        {page == 0 ? (
          <>
            <h1>Arquivo Logico Interno</h1>
            <div className={Style.container_input_form}>
              <Input
                label="Complexidade simples"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.arquivoLogico.simples}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      arquivoLogico: {
                        ...prevDadosProjeto.pfb.arquivoLogico,
                        simples:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Media"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.arquivoLogico.media}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      arquivoLogico: {
                        ...prevDadosProjeto.pfb.arquivoLogico,
                        media:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Alta"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.arquivoLogico.complexa}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      arquivoLogico: {
                        ...prevDadosProjeto.pfb.arquivoLogico,
                        complexa:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
            </div>
          </>
        ) : null}
      </div>
      {/* interface externa */}
      <div
        className={`${page == 1 ? Style.fadeIn : Style.fadeOut} ${
          Style.container_form
        }`}
      >
        {page == 1 ? (
          <>
            <h1>Arquivo Interface Externa</h1>
            <div className={Style.container_input_form}>
              <Input
                label="Complexidade simples"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.arquivoInterfaceExterna.simples}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      arquivoInterfaceExterna: {
                        ...prevDadosProjeto.pfb.arquivoInterfaceExterna,
                        simples:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Media"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.arquivoInterfaceExterna.media}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      arquivoInterfaceExterna: {
                        ...prevDadosProjeto.pfb.arquivoInterfaceExterna,
                        media:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Alta"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.arquivoInterfaceExterna.complexa}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      arquivoInterfaceExterna: {
                        ...prevDadosProjeto.pfb.arquivoInterfaceExterna,
                        complexa:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
            </div>
          </>
        ) : null}
      </div>
      {/* entradaExterna */}
      <div
        className={`${page == 2 ? Style.fadeIn : Style.fadeOut} ${
          Style.container_form
        }`}
      >
        {page == 2 ? (
          <>
            <h1>Entrada Externa</h1>
            <div className={Style.container_input_form}>
              <Input
                label="Complexidade simples"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.entradaExterna.simples}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      entradaExterna: {
                        ...prevDadosProjeto.pfb.entradaExterna,
                        simples:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Media"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.entradaExterna.media}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      entradaExterna: {
                        ...prevDadosProjeto.pfb.entradaExterna,
                        media:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Alta"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.entradaExterna.complexa}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      entradaExterna: {
                        ...prevDadosProjeto.pfb.entradaExterna,
                        complexa:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
            </div>
          </>
        ) : null}
      </div>
      {/* saidaExterna */}
      <div
        className={`${page == 3 ? Style.fadeIn : Style.fadeOut} ${
          Style.container_form
        }`}
      >
        {page == 3 ? (
          <>
            <h1>Saida Externa</h1>
            <div className={Style.container_input_form}>
              <Input
                label="Complexidade simples"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.saidaExterna.simples}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      saidaExterna: {
                        ...prevDadosProjeto.pfb.saidaExterna,
                        simples:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Media"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.saidaExterna.media}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      saidaExterna: {
                        ...prevDadosProjeto.pfb.saidaExterna,
                        media:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Alta"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.saidaExterna.complexa}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      saidaExterna: {
                        ...prevDadosProjeto.pfb.saidaExterna,
                        complexa:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
            </div>
          </>
        ) : null}
      </div>
      {/* consulta Externa */}
      <div
        className={`${page == 4 ? Style.fadeIn : Style.fadeOut} ${
          Style.container_form
        }`}
      >
        {page == 4 ? (
          <>
            <h1>Consulta Externa</h1>
            <div className={Style.container_input_form}>
              <Input
                label="Complexidade simples"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.consultaExterna.simples}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      consultaExterna: {
                        ...prevDadosProjeto.pfb.consultaExterna,
                        simples:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Media"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.consultaExterna.media}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      consultaExterna: {
                        ...prevDadosProjeto.pfb.consultaExterna,
                        media:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
              <Input
                label="Complexidade Alta"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.pfb.consultaExterna.complexa}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    pfb: {
                      ...prevDadosProjeto.pfb,
                      consultaExterna: {
                        ...prevDadosProjeto.pfb.consultaExterna,
                        complexa:
                          +e.target.value !== 0 ? +e.target.value : undefined,
                      },
                    },
                  }))
                }
              />
            </div>
          </>
        ) : null}
      </div>
      {/* caracteristica gerais */}
      <div
        className={`${page == 5 ? Style.fadeIn : Style.fadeOut} ${
          Style.container_form
        }`}
      >
        {page == 5 ? (
          <>
            <h1>Características Gerais</h1>
            <div className={Style.container_input_form}>
              <Input
                label="Comunicação de dados"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.comunicacaoDeDados}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      comunicacaoDeDados:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Funções distribuídas"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.funcoesDistribuidas}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      funcoesDistribuidas:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Performance"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.performace}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      performace:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Configuração do equipamento"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.configuracaoDoEquipamento}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      configuracaoDoEquipamento:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Volume de Transações "
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.volumeDeTransacoes}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      volumeDeTransacoes:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Reusabilidade"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.reusabilidade}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      reusabilidade:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Entrada de Dados on-line "
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.entradaDeDadosOnline}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      entradaDeDadosOnline:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Interface com o usuário"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.interfaceComUsuario}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      interfaceComUsuario:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Atualização online"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.atualizacaoOnline}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      atualizacaoOnline:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Processamento complexo "
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.processamentoComplexo}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      processamentoComplexo:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Facilidade de implantação "
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.facilidadeImplatacao}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      facilidadeImplatacao:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Facilidade operacional "
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.facilidadeOperacional}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      facilidadeOperacional:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Múltiplos locais "
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.multiplosLocais}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      multiplosLocais:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
              <Input
                label="Facilidade de mudança"
                placeholder="Adicione um valor"
                type="number"
                value={dadosProjeto.ni.facilidadeMudanca}
                onChange={(e) =>
                  setDadosProjeto((prevDadosProjeto) => ({
                    ...prevDadosProjeto,
                    ni: {
                      ...prevDadosProjeto.ni,
                      facilidadeMudanca:
                        +e.target.value !== 0 ? +e.target.value : undefined,
                    },
                  }))
                }
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
export default Form;
