import  { useState, useEffect, useRef } from 'react';

export default function useTypewriter (typingText: string,typingSpeed: number) : String {
  const [curPos, setCurPos] = useState(0);
  const tmpPos = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurPos((pos) => pos + 1);
      tmpPos.current += 1;
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

  return typingText.substring(0, curPos);
}