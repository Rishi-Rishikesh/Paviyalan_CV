import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const yPct = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative w-full max-w-md rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden ${className}`}
    >
      {/* Inner shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {children}
    </motion.div>
  );
}
