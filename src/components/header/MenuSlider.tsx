import React, { useState } from 'react';

interface MenuSliderProps {
  visible: string;
}

const MenuSlider: React.FC<MenuSliderProps> = (
  visible
) => {
  return (
    <div className={`menu-slider ${visible}`}>
      {/* <div>
        <p>계산기</p>
        <ul>
          <li>표준</li>
          <li>공학용</li>
          <li>그래프</li>
          <li>프로그래머</li>
          <li>날짜 계산</li>
        </ul>
        <p>변환기</p>
        <ul>
          <li>통화 환율</li>
          <li>부피</li>
          <li>길이</li>
          <li>무게 및 질량</li>
          <li>온도</li>
          <li>에너지</li>
          <li>면적</li>
          <li>속도</li>
          <li>시간</li>
          <li>일률</li>
          <li>데이터</li>
          <li>압력</li>
          <li>각도</li>
        </ul>
      </div> */}
    </div>
  );
};

export default React.memo(MenuSlider);

// TODO: 확장성을 위해 더 만드신 것 같네용
