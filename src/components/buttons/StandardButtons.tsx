import React, { useCallback, MouseEvent } from 'react';
import Button from '@/components/buttons/Buttons';

const StandardButtons: React.FC = () => {
  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    console.log(((e.target) as HTMLInputElement).innerText);
  }, []);

  return (
    <div className='button_space'>
      <div className='std_buttons__1'>
        <Button name='%' onClick={handleClick} />
        <Button name='CE' onClick={handleClick} />
        <Button name='C' onClick={handleClick} />
        <Button name='<' onClick={handleClick} />
      </div>
      <div className='buttons_std__2'>
        <Button name='1/x' onClick={handleClick} />
        <Button name='x²' onClick={handleClick} />
        <Button name='√' onClick={handleClick} />
        <Button name='÷' onClick={handleClick} />
      </div>
      <div className='buttons_std__3'>
        <Button name='7' onClick={handleClick} />
        <Button name='8' onClick={handleClick} />
        <Button name='9' onClick={handleClick} />
        <Button name='×' onClick={handleClick} />
      </div>
      <div className='buttons_std__4'>
        <Button name='4' onClick={handleClick} />
        <Button name='5' onClick={handleClick} />
        <Button name='6' onClick={handleClick} />
        <Button name='-' onClick={handleClick} />
      </div>
      <div className='buttons_std__5'>
        <Button name='1' onClick={handleClick} />
        <Button name='2' onClick={handleClick} />
        <Button name='3' onClick={handleClick} />
        <Button name='+' onClick={handleClick} />
      </div>
      <div className='buttons_std__6'>
        <Button name='+ / -' onClick={handleClick} />
        <Button name='0' onClick={handleClick} />
        <Button name='.' onClick={handleClick} />
        <Button name='=' onClick={handleClick} />
      </div>
    </div>
  );
};

export default React.memo(StandardButtons);
