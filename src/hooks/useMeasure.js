import { RefObject, useState, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export const useMeasure = (ref) => {
  const [bounds, setContentRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  useLayoutEffect(() => {
    if (!ref) return;
    let animationFrameId = null;
    const measure = ([entry]) => {
      animationFrameId = window.requestAnimationFrame(() => {
        setContentRect(entry.contentRect);
      });
    };
    const ro = new ResizeObserver(measure);
    ro.observe(ref.current);
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      ro.disconnect();
    };
  }, [ref]);
  return bounds;
};
