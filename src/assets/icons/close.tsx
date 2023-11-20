import React from "react";
import styles from "./close.module.css";

interface CloseProps {
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Close: React.FC<CloseProps> = ({ style, onClick }) => {
  return (
    <svg
      className={styles.close}
      style={style}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M0.888916 0H20.8889V20H0.888916V0Z"
        fill="white"
        fillOpacity="0.01" // Alteração: fill-opacity -> fillOpacity
      />
      <path
        d="M4.22224 3.3335L17.5556 16.6668"
        stroke="currentColor"
        strokeWidth="2" // Alteração: stroke-width -> strokeWidth
        strokeLinecap="round" // Alteração: stroke-linecap -> strokeLinecap
        strokeLinejoin="round" // Alteração: stroke-linejoin -> strokeLinejoin
      />
      <path
        d="M4.22224 16.6668L17.5556 3.3335"
        stroke="currentColor"
        strokeWidth="2" // Alteração: stroke-width -> strokeWidth
        strokeLinecap="round" // Alteração: stroke-linecap -> strokeLinecap
        strokeLinejoin="round" // Alteração: stroke-linejoin -> strokeLinejoin
      />
    </svg>
  );
};

export default Close;
