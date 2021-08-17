import React, { useState } from 'react';
import MenuSlider from '@/components/header/MenuSlider';
import MemoryDisplay from '@/components/display/MemoryDisplay';
import { Spin as Hamburger } from 'hamburger-react';

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='header'>
      <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
      <MenuSlider visible='' />
      <div className='title'>표준 계산기</div>
      <MemoryDisplay />
    </div>
  );
};

export default React.memo(Header);
