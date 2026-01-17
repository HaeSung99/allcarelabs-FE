"use client";

import { useState, useEffect } from 'react';

/**
 * 간단한 타이핑 애니메이션 컴포넌트
 * 텍스트를 타이핑만 하고 삭제하지 않음
 */
export default function SimpleTypewriter({ 
  text = '', 
  typingSpeed = 30, 
  onComplete,
  className = "",
  showCursor = true,
  isVisible = true
}) {
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!text || hasStarted || !isVisible) return;
    
    // isVisible이 true가 되면 시작
    setHasStarted(true);
  }, [text, hasStarted, isVisible]);

  useEffect(() => {
    if (!hasStarted || !text || isComplete) return;

    if (currentText.length < text.length) {
      const timer = setTimeout(() => {
        setCurrentText(text.substring(0, currentText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else {
      // 타이핑 완료
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentText, text, typingSpeed, isComplete, hasStarted, onComplete]);

  return (
    <span className={className}>
      {currentText}
      {showCursor && !isComplete && (
        <span className="inline-block w-0.5 h-[1em] bg-neutral-700 ml-1 animate-pulse align-middle">|</span>
      )}
    </span>
  );
}

