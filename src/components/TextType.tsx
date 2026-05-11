import { useEffect, useMemo, useRef, useState } from 'react';

interface TextTypeProps {
  text: string | string[];
  as?: keyof JSX.IntrinsicElements;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  textColors?: string[];
}

export default function TextType({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  cursorCharacter = '|',
  cursorClassName = '',
  textColors = [],
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    let timeout: number;
    const currentText = textArray[currentTextIndex];

    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false);
        if (currentTextIndex === textArray.length - 1 && !loop) return;
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        setCurrentCharIndex(0);
      } else {
        timeout = window.setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else if (currentCharIndex < currentText.length) {
      timeout = window.setTimeout(
        () => {
          setDisplayedText((prev) => prev + currentText[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        },
        currentCharIndex === 0 ? initialDelay : typingSpeed,
      );
    } else if (textArray.length >= 1) {
      if (!loop && currentTextIndex === textArray.length - 1) return;
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    }

    return () => window.clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, deletingSpeed, displayedText, initialDelay, isDeleting, loop, pauseDuration, textArray, typingSpeed]);

  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    const cursor = cursorRef.current;
    const animation = cursor.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 500,
      direction: 'alternate',
      easing: 'ease-in-out',
      iterations: Infinity,
    });

    return () => animation.cancel();
  }, [showCursor]);

  const currentColor = textColors[currentTextIndex % textColors.length] ?? 'inherit';

  return (
    <Component className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}>
      <span className="inline" style={{ color: currentColor }}>
        {displayedText}
      </span>
      {showCursor && (
        <span ref={cursorRef} className={`ml-1 inline-block opacity-100 ${cursorClassName}`}>
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
}
