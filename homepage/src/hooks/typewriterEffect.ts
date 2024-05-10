import  { useState, useEffect, useRef } from 'react';

export default function useTypewriter (typingText: string,typingSpeed: number) : string {
  const [curPos, setCurPos] = useState(0);
  const tmpPos = useRef(0);
  const addNum = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurPos((pos) => pos + addNum);
      tmpPos.current += addNum;
      if (tmpPos.current > typingText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => {
      clearInterval(interval);
      tmpPos.current = 0;
      setCurPos(0);
    };
  }, [typingSpeed, typingText]);

  return typingText.slice(0, curPos);
}