import type { ReactElement } from 'react';
import useTypewriter from '../hooks/typewriterEffect'
import type { TypeProp } from 'types/ityping';


export default function Typewriter({ typingText, typingSpeed, textStyle }:TypeProp): ReactElement {
    const displayText = useTypewriter(typingText, typingSpeed);
    return (<p className={textStyle}>{displayText}</p>);
}