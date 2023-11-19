"use client";
import Style from "./footer.module.css";
import Image from "next/image";
import iconIftm from "@/assets/images/image-7.png";
import Link from "next/link";
import iconeLinkedin from "@/assets/icons/linkedin.svg";
import iconeIftm from "@/assets/icons/iconeIftm.png";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  return (
    <div
      className={`${Style.container} ${
        pathname == "/" ? Style.isBack : null
      }`}
    >
      <div
        className={Style.footer}
      >
        <div className={Style.urls}>
          <Link href={"https://iftm.edu.br/ituiutaba/"} target="_blank">
            <Image
              src={iconIftm}
              sizes="auto"
              alt="icone Linkedin"
              width={200}
            />
          </Link>
          <div className={Style.links}>
            <ul>
              <span>Navegação</span>
              <Link href={"/EstimativaManual"}>Estimativa Manual</Link>
              <Link href={"/EstimativaAutomatica"}>Estimativa Automática</Link>
            </ul>
            <ul>
              <span>Apoio</span>
              {/* <Link href={"/EstimativaManual"}>Estimativa Manual</Link>
            <Link href={"/EstimativaAutomatica"}>Estimativa Automática</Link> */}
            </ul>
            <ul>
              <span>Projeto</span>
              <Link href={"/EstimativaManual"}>Documento</Link>
            </ul>
          </div>
        </div>
        <div className={Style.descricao}>
          <h5>
            @ 2023 IFTM , todos os direitos reservados, Desenvolvido por Otávio
            Faria{" "}
          </h5>
          <div className={Style.icons}>
            <Link
              href={"https://www.linkedin.com/in/otavio-faria-b7a32a202/"}
              target="_blank"
            >
              <Image src={iconeLinkedin} sizes="auto" alt="icone Linkedin" />
            </Link>
            <Link href={"https://iftm.edu.br/ituiutaba/"} target="_blank">
              <Image src={iconeIftm} sizes="auto" alt="icone iftm" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
