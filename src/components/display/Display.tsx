import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({
  value,
}) => (
  <input type='text' className='display' value={value} maxLength={8} readOnly />
);

export default React.memo(Display);
