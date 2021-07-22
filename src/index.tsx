import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import '@/assets/stylesheets/common.scss';

import Display from '@/components/display/Display';
import StandardButtons from '@/components/buttons/StandardButtons';
import Menus from '@/components/menu/Menus';

const Root: React.FC = () => (
  <div className='calculator'>
    <Menus />
    <Display value='1,234.56' />
    <StandardButtons />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
