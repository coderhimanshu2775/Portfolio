import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from './Avatar';

const Welcome = ({ onComplete }: { onComplete: () => void }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const stars = Array.from({ length: 200 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 3 + 2
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setTimeout(onComplete, 1000);
    }, 5500);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
          style={{
            perspective: '1000px',
          }}
        >
          {/* 3D Space Background with Digital Grid */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{
              background: 'radial-gradient(circle at center, #000235 0%, #000000 100%)',
              backgroundImage: `linear-gradient(rgba(0, 0, 30, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0, 0, 30, 0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
              transformStyle: 'preserve-3d',
            }}
          />

          {/* 3D Digital Nebula Effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 255, 255, 0.05) 40%, rgba(0, 30, 255, 0.1) 60%, transparent 100%)',
              filter: 'blur(40px)',
              transform: `rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
              transformStyle: 'preserve-3d',
            }}
          />

          {/* 3D Floating Cubes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`cube-${i}`}
              className="absolute w-4 h-4"
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                rotateX: 0,
                rotateY: 0,
                opacity: 0
              }}
              animate={{ 
                rotateX: [0, 360],
                rotateY: [0, 360],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
              style={{
                border: '1px solid rgba(0, 255, 255, 0.2)',
                transform: `rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`,
                transformStyle: 'preserve-3d',
              }}
            />
          ))}

          {/* Enhanced Digital Circuit Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`circuit-${i}`}
              className="absolute h-px"
              style={{
                width: '100%',
                top: `${(i + 1) * 15}%`,
                background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent)',
                boxShadow: '0 0 8px rgba(0, 255, 255, 0.3)',
                transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
                transformStyle: 'preserve-3d',
              }}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ 
                x: ['-100%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}

          {/* 3D Energy Waves */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute rounded-full"
              initial={{ 
                width: '100px',
                height: '100px',
                opacity: 0,
                x: '-50%',
                y: '-50%',
                left: '50%',
                top: '50%'
              }}
              animate={{ 
                width: ['100px', '800px'],
                height: ['100px', '800px'],
                opacity: [0.4, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut"
              }}
              style={{
                border: '1px solid rgba(0, 255, 255, 0.1)',
                background: `radial-gradient(circle at center, 
                  rgba(0, 255, 255, 0.1) 0%, 
                  rgba(0, 30, 255, 0.05) 50%, 
                  transparent 70%)`,
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.1) inset',
                transform: `rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`,
                transformStyle: 'preserve-3d',
              }}
            />
          ))}

          {/* Enhanced Stars with 3D Effect */}
          {stars.map((star, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute rounded-full"
              initial={{ 
                x: `${star.x}%`, 
                y: `${star.y}%`, 
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, i % 3 === 0 ? 0.9 : 0.5, 0]
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: i % 5 === 0 ? '#00ffff' : 
                               i % 3 === 0 ? '#0088ff' : 
                               i % 2 === 0 ? '#0044ff' :
                               'rgba(0, 255, 255, 0.9)',
                boxShadow: i % 4 === 0 ? '0 0 12px rgba(0, 255, 255, 0.8)' : 
                          i % 3 === 0 ? '0 0 12px rgba(0, 136, 255, 0.8)' : 
                          i % 2 === 0 ? '0 0 12px rgba(0, 68, 255, 0.8)' :
                          '0 0 8px rgba(0, 255, 255, 0.6)',
                transform: `translateZ(${Math.random() * 100}px)`,
                transformStyle: 'preserve-3d',
              }}
            />
          ))}

          {/* 3D Digital Shooting Stars */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`shooting-star-${i}`}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{ 
                x: '-10%',
                y: `${30 + i * 20}%`,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                x: '120%',
                y: [`${30 + i * 20}%`, `${40 + i * 20}%`],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 3,
                ease: "linear"
              }}
              style={{
                boxShadow: '0 0 20px 4px rgba(0, 255, 255, 0.8), 0 0 40px 8px rgba(0, 255, 255, 0.6)',
                transform: `translateZ(${Math.random() * 50}px)`,
                transformStyle: 'preserve-3d',
              }}
            />
          ))}

          <div className="text-center z-10 relative" style={{ transformStyle: 'preserve-3d' }}>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 0.5,
                type: "spring",
                stiffness: 200
              }}
              className="mb-8 relative"
              style={{
                transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
              }}
            >
              <Avatar size="md" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{
                transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
                textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
              }}
            >
              Welcome to
            </motion.h1>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold"
              style={{
                transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
              }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-gradient">
                Himanshu's World
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;