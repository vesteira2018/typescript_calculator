import React from 'react';
import MenuSlider from '@/components/header/MenuSlider';
import MemoryDisplay from '@/components/display/MemoryDisplay';

const Header: React.FC = () => (
  <div className='header'>
    <MenuSlider />
    <div className='title'>표준 계산기</div>
    <MemoryDisplay />
  </div>
);

export default React.memo(Header);
