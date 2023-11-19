"use client";

import React, { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";
import Style from "./input.module.css";
import { useDebounce } from "@/lib/functions/debounce";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  mask?: string;
  notification?: string;
  direction?: "inline" | "column";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  width?: string;
  onDebounce?: boolean;
  deboounce?: number;
}

const Input = ({
 style,
  id = "",
  label,
  mask,
  direction = "column",
  notification,
  iconLeft,
  iconRight,
  width = "",
  onDebounce = false,
  deboounce = 500,

  ...props
}: IInput) => {
  return (
    <div
      style={style}
      className={`${Style.container} 
        ${direction === "column" ? Style.column : Style.inline}`}
      
    >
      {label && (
        <label className={Style.label} htmlFor={id}>
          {label}
        </label>
      )}

      <div>
        <div
          className={`${Style.inputWrapper} ${notification ? Style.error : ""}`}
        >
          {iconLeft && <div className={Style.iconLeft}>{iconLeft}</div>}
          <InputMask
            {...props}
            className={Style.input}
            id={id}
            mask={mask ?? ""}
          />
          {iconRight && <div className={Style.iconRight}>{iconRight}</div>}
        </div>
        {notification && (
          <div className={Style.notification}>{notification}</div>
        )}
      </div>
    </div>
  );
};

export default Input;