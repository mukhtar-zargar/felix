import { TSpacing } from "./common.types";

export interface IContainerProps
  extends React.PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLDivElement> {
  marginTop?: TSpacing;
  marginBottom?: TSpacing;
}
