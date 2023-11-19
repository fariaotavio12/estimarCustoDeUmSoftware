"use client";

import Link from "next/link";
import Style from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import iconeLinkedin from "@/assets/icons/linkedin.svg";
import imagemIftm from "@/assets/images/image-7.png";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={Style.navbar}>
    
      <div className={Style.logo_ul}>
        <Link href={"https://iftm.edu.br/ituiutaba/"} target="_blank">
          <Image src={imagemIftm} sizes="auto" alt="icone Linkedin" />
        </Link>

        <ul>
          <Link
            href={"/"}
            className={pathname == "/" ? Style.active : Style.noActive}
          >
            Home
          </Link>
          <Link
            href={"/EstimativaManual"}
            className={
              pathname == "/EstimativaManual" ? Style.active : Style.noActive
            }
          >
            Estimativa Manual
          </Link>
          <Link
            href={"/EstimativaAutomatica"}
            className={
              pathname == "/EstimativaAutomatica"
                ? Style.active
                : Style.noActive
            }
          >
            Estimativa Automática
          </Link>
        </ul>
      </div>
      <Link
        href={"https://www.linkedin.com/in/otavio-faria-b7a32a202/"}
        target="_blank"
      >
        <Image src={iconeLinkedin} sizes="auto" alt="icone Linkedin" />
      </Link>
      
    </nav>
  );
};

export default Navbar;
