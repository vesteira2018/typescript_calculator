import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import '@/assets/stylesheets/common.scss';

import Display from '@/components/display/Display';
import StandardButtons from '@/components/buttons/StandardButtons';
import EngineeringButtons from '@/components/buttons/EngineeringButtons';
import Header from '@/components/header/Header';
import CalculateLogic, { CalculateInput, InputType, OperatorType } from '@/assets/logic/calculate_logic';

const Root: React.FC = () => {
  const [inputs, setInputs] = useState<Array<CalculateInput>>([]);
  const state = CalculateLogic.getState(inputs);

  const handleNumerical = (value: number) => () => {
    setInputs((prev) => [...prev, { type: InputType.Numerical, value }]);
  }

  const handleOperator = (operator: OperatorType) => () => {
    setInputs((prev) => [...prev, { type: InputType.Operator, operator }]);
  }

  const handleAllClear = () => setInputs([]);

  const handleDelete = () => setInputs(prev => prev.slice(0, -1));

  return (
    <div className='calculator'>
      <Header />
      <Display value={state.displayValue} />
      <EngineeringButtons
        handleNumerical={handleNumerical}
        handleOperator={handleOperator}
        handleAllClear={handleAllClear}
        handleDelete={handleDelete} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
