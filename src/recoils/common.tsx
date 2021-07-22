import { atom } from 'recoil';

const ButtonState = atom(
  {
    key: 'buttonState',
    default: 0,
  },
);

export {
  ButtonState,
};
