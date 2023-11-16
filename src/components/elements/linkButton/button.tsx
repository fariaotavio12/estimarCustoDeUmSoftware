"use client";

import React, { ButtonHTMLAttributes, useState } from "react";
import styles from "./button.module.css";
import Link from "next/link";

interface IButton {
  size?: "sm" | "md" | "lg";
  // MUDAR NOMES PARA INGLÊS PARA PADRONIZAR
  modelo?: "primary" | "erro" | "success" | "warning" | "black";
  estilo?: "filled" | "secondary" | "outline" | "ghost" | "link";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
}

const HandleRipple = (event: any, className: string) => {
  const button = event.currentTarget;
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  ripple.classList.add("ripple");

  const existingRipple = button.querySelector(className);
  if (existingRipple) {
    button.removeChild(existingRipple);
  }

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};

const LinkButton: React.FC<IButton> = ({
  size = "md",
  modelo = "primary",
  estilo = "filled",
  iconLeft,
  iconRight,
  children,
  onClick,
  className = "",
  style,
  href,
  ...props
}) => {
 
  const handlePress = (event: any) => {
    HandleRipple(event, ".ripple");
  };

  return (
    <Link
      className={`${styles.btn} }
       ${styles[estilo]} ${styles[modelo]} ${styles[size]}`}
      {...props}
      href={href ?? "/"}
      style={style}
      onClick={handlePress}
    >
      {iconLeft && iconLeft}
      {children}
      {iconRight && iconRight}
      <span className={styles.ripple} />
    </Link>
  );
};

export default LinkButton;
