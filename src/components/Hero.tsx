import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, FileDown } from 'lucide-react';
import Avatar from './Avatar';

const Hero = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/coderhimanshu2775', 
      label: 'GitHub',
      isExternal: true 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/himanshu2403', 
      label: 'LinkedIn',
      isExternal: true 
    },
    { 
      icon: Mail, 
      href: 'mailto:co.himanshu95699@gmail.com', 
      label: 'Email',
      isExternal: false 
    },
    { 
      icon: Phone, 
      href: 'tel:+919569926322', 
      label: 'Phone',
      isExternal: false 
    }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, isExternal: boolean) => {
    if (isExternal) {
      // For external links, ensure they open in a new tab
      e.currentTarget.target = '_blank';
      e.currentTarget.rel = 'noopener noreferrer';
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Deep Space Background with Digital Grid */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #000235 0%, #000000 100%)',
          backgroundImage: `linear-gradient(rgba(0, 0, 30, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 0, 30, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Avatar size="lg" />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
          Hi, I'm Himanshu Singh
        </h1>
        <div className="text-xl md:text-2xl text-cyan-300 mb-8 h-20">
          <Typewriter
            options={{
              strings: [
                'Software Testing Expert',
                'Web Developer',
                'Programmer',
                'Content Writer',
                'Poetry Enthusiast',
                'Technophile'
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map(({ icon: Icon, href, label, isExternal }) => (
            <motion.a
              key={label}
              href={href}
              onClick={(e) => handleLinkClick(e, isExternal)}
              className="text-cyan-400 hover:text-cyan-300 transition-all transform hover:scale-110"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.a
          href="https://drive.google.com/file/d/1JdvG40mslDvUZOGcMQPH2jwr7EbVtyFU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,255,0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          <FileDown className="mr-2" />
          Download Resume
        </motion.a>

        {/* Digital Energy Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border border-cyan-900/20"
            style={{
              width: '100%',
              height: '100%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;