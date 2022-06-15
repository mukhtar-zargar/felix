import React from "react";

export interface IInputProps
  extends React.ButtonHTMLAttributes<HTMLInputElement> {
  error: string | React.ReactNode;
}
