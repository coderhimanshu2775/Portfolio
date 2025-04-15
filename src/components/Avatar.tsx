import React from 'react';
import { motion } from 'framer-motion';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40'
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} mx-auto rounded-full overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.4)]`}
      >
        <img
          src={`${import.meta.env.BASE_URL}profile-pic.jpg`}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Digital Pulse Effect */}
      <motion.div
        className={`absolute inset-0 ${sizeClasses[size]} mx-auto rounded-full`}
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.3), rgba(0, 30, 255, 0.3))',
          filter: 'blur(15px)'
        }}
      />
    </div>
  );
};

export default Avatar; 