import { useRef } from 'react';

const useScroll = () => {
  const elementToScrollToRef = useRef(null);
  const executeScroll = () => {
    window.scrollTo(0, elementToScrollToRef.current.offsetTop);
  };

  return [executeScroll, elementToScrollToRef];
};

export default useScroll;
