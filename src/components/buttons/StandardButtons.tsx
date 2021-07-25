import React from 'react';
import Button, { ButtonType } from '@/components/buttons/Buttons';
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
        <Button name='1/x' />
        <Button name='x²' onClick={handleOperator(OperatorType.Square)} />
        <Button name='√' onClick={handleOperator(OperatorType.Sqrt)} />
        <Button name='÷' onClick={handleOperator(OperatorType.Divide)} />
      </div>
      <div className='buttons_std__3'>
        <Button buttonType={ButtonType.Number} name='7' onClick={handleNumerical(7)} />
        <Button buttonType={ButtonType.Number} name='8' onClick={handleNumerical(8)} />
        <Button buttonType={ButtonType.Number} name='9' onClick={handleNumerical(9)} />
        <Button name='×' onClick={handleOperator(OperatorType.Multiply)} />
      </div>
      <div className='buttons_std__4'>
        <Button buttonType={ButtonType.Number} name='4' onClick={handleNumerical(4)} />
        <Button buttonType={ButtonType.Number} name='5' onClick={handleNumerical(5)} />
        <Button buttonType={ButtonType.Number} name='6' onClick={handleNumerical(6)} />
        <Button name='-' onClick={handleOperator(OperatorType.Subtract)} />
      </div>
      <div className='buttons_std__5'>
        <Button buttonType={ButtonType.Number} name='1' onClick={handleNumerical(1)} />
        <Button buttonType={ButtonType.Number} name='2' onClick={handleNumerical(2)} />
        <Button buttonType={ButtonType.Number} name='3' onClick={handleNumerical(3)} />
        <Button name='+' onClick={handleOperator(OperatorType.Add)} />
      </div>
      <div className='buttons_std__6'>
        <Button name='+ / -' onClick={handleOperator(OperatorType.SwitchSign)} />
        <Button buttonType={ButtonType.Number} name='0' onClick={handleNumerical(0)} />
        <Button name='.' />
        <Button name='=' onClick={handleOperator(OperatorType.Equals)} />
      </div>
    </div>
  )
}

export default React.memo(StandardCalculator);
