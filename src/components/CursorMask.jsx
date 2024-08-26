import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from './ThemeContext.jsx';

const CursorMask = () => {
  const { isDarkMode } = useTheme();
  const maskSize = 5;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentX = e.clientX - maskSize;
      const currentY = e.clientY - maskSize;

      setIsVisible(true);
      x.set(currentX);
      y.set(currentY);

      setOpacity(1);
    };

    const handleMouseOut = () => {
      setOpacity(0);
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [x, y]);

  const deformX = useTransform([springX, springY], ([latestX, latestY]) => {
    const dx = latestX - x.getPrevious();
    return 1 + Math.abs(dx) * 0.002;
  });

  const deformY = useTransform([springX, springY], ([latestX, latestY]) => {
    const dy = latestY - y.getPrevious();
    return 1 + Math.abs(dy) * 0.002;
  });

  return (
    isVisible && (
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 w-5 h-5 rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          scaleX: deformX,
          scaleY: deformY,
          backgroundColor: isDarkMode ? '#FAFAFA' : '#ECECEC',
          mixBlendMode: 'difference',
          opacity: opacity,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    )
  );
};

export default CursorMask;