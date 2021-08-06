import React, { useCallback, MouseEvent } from 'react';
import Button from '@/components/buttons/Buttons';

const MemoryButtons: React.FC = () => {
  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    console.log(((e.target) as HTMLInputElement).innerText);
  }, []);

  return (
    <div className='memory_buttons'>
      <Button name='MC' onClick={handleClick} disabled={true} />
      <Button name='MR' onClick={handleClick} disabled={true} />
      <Button name='M+' onClick={handleClick} />
      <Button name='M-' onClick={handleClick} />
      <Button name='MS' onClick={handleClick} />
    </div>
  );
};

export default React.memo(MemoryButtons);
