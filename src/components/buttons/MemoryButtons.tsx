import React, { useCallback, MouseEvent } from 'react';
import Button from '@/components/buttons/Buttons';

// TODO: props를 아무것도 넘기지 않을 땐, React.FC를 굳이 쓸 필요는 없습니다.
// TODO: 심지어 React.FC를 쓸 때와 쓰지 않을 때는 다릅니다.
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
