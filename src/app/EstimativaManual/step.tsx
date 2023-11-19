import Icon from "@/components/elements/icon/icon";
import Style from "./step.module.css";
import iconeFolder from "@/assets/icons/folder.svg";
import iconeCloud from "@/assets/icons/cloud.svg";
import iconeMsg from "@/assets/icons/send.svg";
import iconeLayer from "@/assets/icons/layers.svg";
import iconeWord from "@/assets/icons/globle.svg";
import iconeChat from "@/assets/icons/bag.svg"

interface StepItemProps {
  index: number;
  current: number;
  title?: string;
  icone?: string;
  onClick: () => void;
}

const StepItem: React.FC<StepItemProps> = ({
  index,
  current,
  title,
  icone,
  onClick,
}) => {
  return (
    <div
      className={`${Style.step} ${index >= current + 1 ? "" : Style.active}`}
      onClick={onClick}
    >
      <div className={Style.stepIcon}>
        {icone ? <Icon src={icone} alt="step" size={20} /> : ""}
      </div>
      {title && <div className={Style.stepTitle}>{title}</div>}
    </div>
  );
};

const Step = ({
  page,
  setPage,
}: {
  page: number;
  setPage: (e: number) => void;
}) => {
  return (
    <div className={Style.container}>
      <StepItem
        index={0}
        current={page}
        title={"Arquivo Logico Interno"}
        icone={iconeCloud}
        onClick={() => setPage(0)}
      />
      <StepItem
        index={1}
        current={page}
        title={"Arquivo Interface Externa"}
        icone={iconeWord}
        onClick={() => setPage(1)}
      />
      <StepItem
        index={2}
        current={page}
        title={"Entrada Externa"}
        icone={iconeChat}
        onClick={() => setPage(2)}
      />
      <StepItem
        index={3}
        current={page}
        title={"Saida Externa"}
        icone={iconeMsg}
        onClick={() => setPage(3)}
      />
      <StepItem
        index={4}
        current={page}
        title={"Consulta Externa"}
        icone={iconeFolder}
        onClick={() => setPage(4)}
      />
      <StepItem
        index={5}
        current={page}
        title={"Características Gerais"}
        icone={iconeLayer}
        onClick={() => setPage(5)}
      />
    </div>
  );
};
export default Step;
