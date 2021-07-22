import React from 'react';
import MenuSlider from '@/components/menu/MenuSlider';
import MemoryDisplay from '@/components/display/MemoryDisplay';

const Menus: React.FC = () => (
  <div className='menus'>
    <MenuSlider />
    <div className='calc_name'>표준 계산기</div>
    <MemoryDisplay />
  </div>
);

export default React.memo(Menus);
