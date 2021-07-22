import React from 'react';
import MemoryButtons from '@/components/buttons/MemoryButtons';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({
  value,
}) => (
  <div className='display_space'>
    <div>{value}</div>
    <MemoryButtons />
  </div>
);

export default React.memo(Display);
