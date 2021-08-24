import React from 'react';
import MemoryDisplay from '@/components/display/MemoryDisplay';
import { Spin as Hamburger } from 'hamburger-react';

interface HeaderProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  isOpen,
  setOpen,
}) => {
  return (
    <div className='header'>
      <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
      <div className='title'>표준 계산기</div>
      <MemoryDisplay />
    </div>
  );
};

export default React.memo(Header);

// 
