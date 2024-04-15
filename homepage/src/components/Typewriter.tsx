import type { ReactElement } from 'react';
import  useTypewriter from '../hooks/typewriterEffect'

const defaultSpeed = 30;

export default function Typewriter({typingText = '', typingSpeed = defaultSpeed, textStyle = ''}): ReactElement{
    const displayText = useTypewriter(typingText, typingSpeed);
    return (<p className={textStyle}>{displayText}</p>);
}