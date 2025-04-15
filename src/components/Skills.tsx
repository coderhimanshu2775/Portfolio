import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    category: 'Testing',
    skills: ['Selenium', 'JUnit', 'TestNG', 'Manual Testing', 'API Testing'],
  },
  {
    category: 'Development',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript'],
  },
  {
    category: 'Programming',
    skills: ['Java', 'Python', 'C++', 'SQL'],
  },
  {
    category: 'Content',
    skills: ['Technical Writing', 'Poetry', 'Blog Writing', 'Documentation'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{skill}</span>
                    </div>
                    <motion.div
                      className="h-2 bg-gray-200 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : {}}
                      transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                    >
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${85 - skillIndex * 10}%` }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;