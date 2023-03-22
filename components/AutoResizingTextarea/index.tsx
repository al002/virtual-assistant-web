import { Textarea, TextareaProps } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';

type AutoResizingTextareaProps = TextareaProps;

export const AutoResizingTextarea = (props: AutoResizingTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [props.value]);

  return (
    <Textarea
      ref={textareaRef}
      minH="unset"
      overflow="hidden"
      resize="none"
      rows={1}
      {...props}
    />
  );
};
