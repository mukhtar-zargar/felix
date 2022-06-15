import React from "react";
import { TSize, TVariant } from "./common.types";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
  size?: TSize;
}
