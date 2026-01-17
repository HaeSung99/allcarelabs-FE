"use client";

import { useState, useEffect } from 'react';

/**
 * 타이핑 애니메이션 컴포넌트
 * 여러 텍스트를 순환하며 타이핑했다가 지우고 다음으로 전환
 * 모든 텍스트 완료 시 onComplete 콜백 호출
 */
export default function Typewriter({ 
  texts = [], 
  typingSpeed = 20, 
  deletingSpeed = 100, 
  pauseTime = 500,
  onComplete,
  className = "" 
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (texts.length === 0 || isComplete) return;

    const currentFullText = texts[currentTextIndex];
    
    // 일시정지 중이면 타이핑하지 않음
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        // 마지막 텍스트면 완료 (커서는 계속 표시)
        if (currentTextIndex === texts.length - 1) {
          // 완료 콜백 호출 후에 isComplete를 true로 설정하여 커서가 마지막에 사라지도록
          if (onComplete) {
            // 먼저 onComplete 호출
            onComplete();
            // 약간의 딜레이 후 커서 숨김
            setTimeout(() => setIsComplete(true), 100);
          } else {
            setIsComplete(true);
          }
        } else {
          setIsPaused(false);
          setIsDeleting(true);
        }
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // 타이핑 중
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        } else {
          // 타이핑 완료, 일시정지
          setIsPaused(true);
        }
      } else {
        // 삭제 중
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // 삭제 완료, 다음 텍스트로
          setIsDeleting(false);
          setCurrentTextIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, isPaused, isComplete, texts, typingSpeed, deletingSpeed, pauseTime, onComplete]);

  return (
    <span className={className}>
      {currentText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-[1em] bg-neutral-900 ml-1 animate-pulse align-middle">|</span>
      )}
    </span>
  );
}
