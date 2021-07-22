import React, { FC } from 'react';

interface ButtonProps {
  name?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  // onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Buttons: FC<ButtonProps> = ({
  name,
  onClick,
}) => (
  <button onClick={onClick}>{name}</button>
);

export default React.memo(Buttons);
