import React from 'react';

interface DisplayProps {
  value: number;
}

const Display: React.FC<DisplayProps> = ({
  value,
}) => (
  <div className='display'>{value}</div>
);

export default React.memo(Display);
