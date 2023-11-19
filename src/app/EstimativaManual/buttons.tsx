import Button from "@/components/elements/button/button";
import styles from "./buttons.module.css";
import LinkButton from "@/components/elements/linkButton/link";

interface IButtonChamadosProps {
  pageCurrent: number;
  updatePage: (e: number) => void;
}
const ButtonChamados = ({
  page,
  setPage,
}: {
  page: number;
  setPage: (e: number) => void;
}) => {
  return (
    <div className={styles.buttons}>
      <Button
        type="button"
        modelo="erro"
        estilo="link"
        onClick={() => {
          if (page > 0) {
            setPage(page - 1);
          }
        }}
      >
        Voltar
      </Button>

      <Button type="submit" modelo="success">
        {page == 5 ? "Concluir" : "Proximo"}
      </Button>
    </div>
  );
};

export default ButtonChamados;
