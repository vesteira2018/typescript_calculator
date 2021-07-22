import React from 'react';

const MemoryDisplay: React.FC = () => (
  <div className='memory_display'>
    <div></div>
  </div>
);

export default React.memo(MemoryDisplay);
