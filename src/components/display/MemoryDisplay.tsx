import React from 'react';

const MemoryDisplay: React.FC = () => (
  <div className='memory_display'>
    <div></div>
  </div>
);

export default React.memo(MemoryDisplay);

// TODO: 대부분의 기능에서 마찬가지겠지만,
// TODO: 메모리나 기록 관련한 기능은 상태관리와 데이터 저장을 어떻게 할 것인지
// TODO: 먼저 고려하는게 좋습니다
