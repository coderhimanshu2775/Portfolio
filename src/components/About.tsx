import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, TestTube2, Pencil, Brain } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a multi-skilled professional with a passion for technology and creativity. 
              My diverse skill set allows me to approach problems from multiple angles, 
              combining technical expertise with creative thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <TestTube2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold">Software Testing</h3>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-semibold">Web Development</h3>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-semibold">Programming</h3>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <Pencil className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="font-semibold">Content Writing</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;