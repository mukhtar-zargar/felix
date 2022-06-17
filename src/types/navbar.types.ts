export interface NavProps extends React.PropsWithChildren {}

export type TLink = {
  to: string;
  label: string;
};

export interface INavBarProps {
  links: TLink[];
  auth: boolean;
}
