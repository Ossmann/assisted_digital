'use client'

import React, { useEffect, useRef } from 'react';

interface LottiePlayerProps {
  path: string;
  style?: React.CSSProperties;
  className?: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ 
  path,
  style,
  className
}) => {
  const container = useRef<HTMLDivElement>(null);
  const anim = useRef<any>(null);

  useEffect(() => {
    import('lottie-web').then((L) => {
      const lottie = L.default;
      
      if (container.current && !anim.current) {
        anim.current = lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path
        });
      }
    });

    return () => {
      if (anim.current) {
        anim.current.destroy();
      }
    };
  }, [path]);

  return (
    <div 
      ref={container} 
      style={style} 
      className={className}
    />
  );
};

export default LottiePlayer;
