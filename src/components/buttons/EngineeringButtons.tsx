import React, { useCallback, MouseEvent } from 'react';
import Button from '@/components/buttons/Buttons';

const EngineeringButtons: React.FC = () => {
  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  }, []);

  return (
    <div className='button_space'>
      <div className='button_space__1'>
        <Button name='%' onClick={handleClick} />
        <Button name='CE' onClick={handleClick} />
        <Button name='C' onClick={handleClick} />
        <Button name='<' onClick={handleClick} />
      </div>
      <div className='button_space__2'>
        <Button name='1/x' onClick={handleClick} />
        <Button name='x²' onClick={handleClick} />
        <Button name='√' onClick={handleClick} />
        <Button name='÷' onClick={handleClick} />
      </div>
      <div className='button_space__3'>
        <Button name='7' onClick={handleClick} />
        <Button name='8' onClick={handleClick} />
        <Button name='9' onClick={handleClick} />
        <Button name='×' onClick={handleClick} />
      </div>
      <div className='button_space__4'>
        <Button name='4' onClick={handleClick} />
        <Button name='5' onClick={handleClick} />
        <Button name='6' onClick={handleClick} />
        <Button name='-' onClick={handleClick} />
      </div>
      <div className='button_space__5'>
        <Button name='1' onClick={handleClick} />
        <Button name='2' onClick={handleClick} />
        <Button name='3' onClick={handleClick} />
        <Button name='+' onClick={handleClick} />
      </div>
      <div className='button_space__6'>
        <Button name='+ / -' onClick={handleClick} />
        <Button name='0' onClick={handleClick} />
        <Button name='.' onClick={handleClick} />
        <Button name='=' onClick={handleClick} />
      </div>
    </div>
  );
};

export default React.memo(EngineeringButtons);
