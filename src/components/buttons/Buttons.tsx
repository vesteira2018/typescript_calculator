import React, { FC } from 'react';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
}

const Buttons: FC<ButtonProps> = ({
  name,
  onClick,
  className,
  disabled,
}) => (
  <button className={className} onClick={onClick} disabled={disabled}>{name}</button>
);

export default React.memo(Buttons);
