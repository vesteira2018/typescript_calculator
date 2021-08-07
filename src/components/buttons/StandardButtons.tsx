import React from 'react';
import Button from '@/components/buttons/Buttons';
import MemoryButtons from '@/components/buttons/MemoryButtons';
import { OperatorType } from '@/assets/logic/calculate_logic';

interface StandardCalcProps {
  handleNumerical: (value: number) => () => void;
  handleOperator: (operator: OperatorType) => () => void;
  handleAllClear: () => void;
  handleDelete: () => void;
}

const StandardCalculator: React.FC<StandardCalcProps> = ({
  handleNumerical,
  handleOperator,
  handleAllClear,
  handleDelete,
}) => {
  return (
    <div className='standard_buttons'>
      <MemoryButtons />
      <div className='buttons_std__1'>
        <Button name='%' onClick={handleOperator(OperatorType.Percent)} />
        <Button name='CE' />
        <Button name='C' onClick={handleAllClear} />
        <Button name='<' onClick={handleDelete} />
      </div>
      <div className='buttons_std__2'>
        <Button name='1/x' onClick={handleOperator(OperatorType.DivideAsX)} />
        <Button name='x²' onClick={handleOperator(OperatorType.Square)} />
        <Button name='√' onClick={handleOperator(OperatorType.Sqrt)} />
        <Button name='÷' onClick={handleOperator(OperatorType.Divide)} />
      </div>
      <div className='buttons_std__3'>
        <Button name='7' onClick={handleNumerical(7)} />
        <Button name='8' onClick={handleNumerical(8)} />
        <Button name='9' onClick={handleNumerical(9)} />
        <Button name='×' onClick={handleOperator(OperatorType.Multiply)} />
      </div>
      <div className='buttons_std__4'>
        <Button name='4' onClick={handleNumerical(4)} />
        <Button name='5' onClick={handleNumerical(5)} />
        <Button name='6' onClick={handleNumerical(6)} />
        <Button name='-' onClick={handleOperator(OperatorType.Subtract)} />
      </div>
      <div className='buttons_std__5'>
        <Button name='1' onClick={handleNumerical(1)} />
        <Button name='2' onClick={handleNumerical(2)} />
        <Button name='3' onClick={handleNumerical(3)} />
        <Button name='+' onClick={handleOperator(OperatorType.Add)} />
      </div>
      <div className='buttons_std__6'>
        <Button name='+ / -' onClick={handleOperator(OperatorType.SwitchSign)} />
        <Button name='0' onClick={handleNumerical(0)} />
        <Button name='.' onClick={handleOperator(OperatorType.Point)} />
        <Button name='=' onClick={handleOperator(OperatorType.Equals)} />
      </div>
    </div>
  )
}

export default React.memo(StandardCalculator);

// TODO: buttons 폴더에 불필요하게 반복되는 컴포넌트들이 많은 듯 합니다.
