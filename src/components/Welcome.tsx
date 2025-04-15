import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from './Avatar';

const Welcome = ({ onComplete }: { onComplete: () => void }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [stars] = useState(() => 
    Array.from({ length: 200 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setTimeout(onComplete, 1000);
    }, 5500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Deep Space Background with Digital Grid */}
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
            }}
          />

          {/* Digital Nebula Effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 255, 255, 0.05) 40%, rgba(0, 30, 255, 0.1) 60%, transparent 100%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Digital Circuit Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`circuit-${i}`}
              className="absolute h-px"
              style={{
                width: '100%',
                top: `${(i + 1) * 15}%`,
                background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent)',
                boxShadow: '0 0 8px rgba(0, 255, 255, 0.3)',
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

          {/* Energy Waves with Digital Effect */}
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
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.1) inset'
              }}
            />
          ))}

          {/* Data Stream Effects */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`data-stream-${i}`}
              className="absolute w-px h-20"
              style={{
                left: `${i * 10}%`,
                background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.3), transparent)',
              }}
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ 
                y: ['-100%', '100%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          ))}

          {/* Enhanced Stars with Digital Glow */}
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
                          '0 0 8px rgba(0, 255, 255, 0.6)'
              }}
            />
          ))}

          {/* Digital Shooting Stars */}
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
              }}
            />
          ))}

          <div className="text-center z-10 relative">
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
            >
              {/* Logo Container with Digital Glow */}
              <Avatar size="md" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Welcome to
            </motion.h1>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold"
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