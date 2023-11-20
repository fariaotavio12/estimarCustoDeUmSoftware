import { CSSProperties, FC, ReactNode, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Style from "./modalDinamico.module.css";
import Close from "@/assets/icons/close";
interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  children?: ReactNode;
  className?: string | undefined;
  efect?: "topToButtom" | "ButtomToTop" | "leftToRight" | "rightToLeft" | "opacity";
  overlay?: boolean;
  overflow?: boolean;
  isIconClose?: boolean;
  style?: React.CSSProperties
}

const backdropVariant = {
  initial: { opacity: 0 }, // Define a posição inicial (fora da tela à direita)
  animate: { opacity: 1, transition : {
    duration : 1
  }}, // Define a posição final (posição normal) // Define a posição de saída (fora da tela à direita)
  
};

const variants = {
  opacity: {
    initial: { opacity: 0 }, // Define a posição inicial (fora da tela à direita)
    animate: { opacity: 1 }, // Define a posição final (posição normal)
    exit: { opacity: 0 }, // Define a posição de saída (fora da tela à direita)
    transition: { duration: 1 },
  },

  topToButtom: {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  },
  ButtomToTop: {
    hidden: { y: 100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  },
  leftToRight: {
    hidden: { x: -100 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  },
  rightToLeft: {
    initial: { x: "100%" }, // Define a posição inicial (fora da tela à direita)
    animate: { x: 0 ,  transition : {
      duration : 0.5
    }}, // Define a posição final (posição normal) // Define a posição de saída (fora da tela à direita)
  },
};

const ModalDynamico: React.FC<Props> = ({
  isOpen,
  setIsOpen = () => {},
  children,
  className = "",
  efect = "opacity",
  overlay = true,
  overflow = false,
  isIconClose = true,
  style
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        iconRef.current &&
        !iconRef.current.contains(event.target as Node) &&
        !(
          event.target instanceof HTMLElement &&
          event.target.classList.contains("icone")
        )
      ) {
        setIsOpen();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!overflow) {
      return;
    }
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={backdropVariant}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            {overlay && <motion.div className={Style.overlay}></motion.div>}

            <motion.div
              className={` ${Style.containerNuvem} ${className} ${Style[efect]}`}
              style={style}
              //@ts-ignore
              variants={variants[efect]}
              ref={iconRef}
              initial="initial"
              animate="animate"
              exit="initial"
            >
              {isIconClose ? (
                <div className={Style.iconeFechar} onClick={() => setIsOpen()}>
                  <Close style={{ width: 16, height: 16 }} />
                </div>
              ) : null}

              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalDynamico;
