import Image from "next/image";
import Style from "./page.module.css";
import Button from "@/components/elements/button/button";
import iconeRaio from "@/assets/icons/raio.svg";
import LinkButton from "@/components/elements/linkButton/button";
import imagemUndraw from "@/assets/images/undraw-books-re-8-gea-1.png";
import iconeBag from "@/assets/icons/bag.svg";
import iconeGlobe from "@/assets/icons/globe.svg";
import iconeSend from "@/assets/icons/send.svg";
export default function Home() {
  return (
    <main className={Style.main}>
      <div className={Style.hero}>
        <div className={Style.title_subtitle}>
          <h1>Como estimar o custo de um Software?</h1>
          <h5>
            Desvende os Mistérios Financeiros do Desenvolvimento de Software com
            Nossa Ferramenta de Estimativa Precisa 
          </h5>
        </div>
        <div className={Style.buttons}>
          <LinkButton
            iconLeft={<Image src={iconeRaio} sizes="16px" alt="icone raio" />}
            href="/EstimativaAutomatica"
          >
            Estimativa Automatica
          </LinkButton>
          <LinkButton modelo="black" estilo="outline" href="EstimativaManual">
            Etimativa Manual
          </LinkButton>
        </div>
      </div>
      <div className={Style.imagem_hero}>
        <Image
          src={imagemUndraw}
          alt="Imagem livro"
          layout="responsive"
          className={Style.imageStyle}
        />
      </div>
      <div className={Style.feacture}>
        <div className={Style.titulo_estimativa}>
          <h1>Possibilidades ilimitadas e seguras </h1>
          <h5>temos a confiança de mais de 500 empresas </h5>
        </div>
        <div className={Style.feacture_item}>
          <div className={Style.item}>
            <Image src={iconeBag} alt="icone caixa" />
            <div className={Style.titulo_subtilo_item}>
              <h1>Fácil de usar</h1>
              <h5>
                O sistema foi projetado para ser acessível a qualquer pessoa,
                proporcionando recursos que possibilitam cálculos precisos. 
              </h5>
            </div>
          </div>
          <div className={Style.item}>
            <Image src={iconeGlobe} alt="icone caixa" />
            <div className={Style.titulo_subtilo_item}>
              <h1>Online e gratuito </h1>
              <h5>
                Realize agora mesmo uma estimativa precisa do custo para o
                desenvolvimento do seu software, proporcionando-lhe insights
                valiosos para planejar e otimizar seus recursos com eficiência.
              </h5>
            </div>
          </div>
          <div className={Style.item}>
            <Image src={iconeSend} alt="icone caixa" />
            <div className={Style.titulo_subtilo_item}>
              <h1>Segurança</h1>
              <h5>
                Priorizamos a segurança em cada linha de código, garantindo que
                nosso website seja uma fortaleza digital, protegendo seus dados
                com as mais avançadas medidas de segurança online. 
              </h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
