import React from "react";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string | React.ReactNode;
}
