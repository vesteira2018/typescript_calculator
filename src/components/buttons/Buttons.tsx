import React, { FC } from 'react';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: true | false;
}

const Buttons: FC<ButtonProps> = ({
  name,
  onClick,
  disabled,
}) => (
  <button onClick={onClick} disabled={disabled}>{name}</button>
);

export default React.memo(Buttons);
