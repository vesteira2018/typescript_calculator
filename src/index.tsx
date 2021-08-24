import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import '@/assets/stylesheets/common.scss';

import Header from '@/components/header/Header';
import MenuSlider from '@/components/header/MenuSlider';
import Display from '@/components/display/Display';
import StandardButtons from '@/components/buttons/StandardButtons';
import EngineeringButtons from '@/components/buttons/EngineeringButtons';
import CalculateLogic, { CalculateInput, InputType, OperatorType } from '@/assets/logic/calculate_logic';

const Root: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [inputs, setInputs] = useState<Array<CalculateInput>>([]);
  const state = CalculateLogic.getState(inputs);


  // TODO: useCallback을 안 쓴 것과 쓴 것의 차이도 직접 해보고 느끼는 게 개발에 도움이 됩니다.
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
      <Header isOpen={isOpen} setOpen={setOpen} />
      <MenuSlider visible={isOpen} />
      <Display value={state.displayValue} />
      <StandardButtons
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

// TODO: React는 컴포넌트형식의 프레임워크입니다.
// TODO: 그 의미를 알면 리액트로 개발 시에 좀 더 재밌어 질 거에요.
