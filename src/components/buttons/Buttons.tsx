import React, { FC } from 'react';

export enum ButtonType {
  Number,
  Operator
}

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  buttonType?: ButtonType;
  name: string;
  // onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Buttons: FC<ButtonProps> = ({
  buttonType = ButtonType.Operator,
  name,
  onClick,
}) => (
  <button onClick={onClick}>{name}</button>
);

export default React.memo(Buttons);
