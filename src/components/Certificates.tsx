import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, Code2, TestTube2 } from 'lucide-react';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: 'Software Testing',
      link: 'https://drive.google.com/file/d/1MQ6_z_7VqGoc5cI23Z6QIfxNudwOLeqx/view?usp=sharing',
      description: 'Successfully completed the Software Testing course offered by NPTEL (Jul–Oct 2024), earning valuable insights into software quality assurance, testing methodologies, and debugging techniques. This course has strengthened my understanding of manual and automated testing, black-box & white-box testing, and industry best practices, enhancing my skills in ensuring software reliability and performance.',
      icon: TestTube2,
    },
    {
      title: 'JavaScript for Web Development',
      link: 'https://drive.google.com/file/d/1TjQZTcS-pyBDhLPgfQwDNcjgeqRsJltW/view?usp=sharing',
      description: 'Completed comprehensive JavaScript training, mastering modern web development techniques, DOM manipulation, and asynchronous programming. Gained expertise in building interactive web applications and implementing best practices in JavaScript development.',
      icon: Code2,
    },
    {
      title: 'Object Oriented Programming',
      link: 'https://drive.google.com/file/d/1DaVD7CZORLCSOSwQorAXulyJuFtuQwxc/view?usp=sharing',
      description: 'Acquired in-depth knowledge of Object-Oriented Programming principles, including encapsulation, inheritance, polymorphism, and abstraction. Developed strong skills in designing and implementing robust, maintainable software solutions using OOP concepts.',
      icon: Code2,
    },
  ];

  const internship = {
    company: 'AADMEX LIFESCIENCES PRIVATE LIMITED',
    role: 'Business Developer',
    link: 'https://drive.google.com/file/d/1WZWj_6vs-1--CBCFAmOywFFS78BherE2/view?usp=sharing',
    description: 'Excited to complete my Business Development Trainee Internship at AADMEX Lifesciences Pvt. Ltd. (May 28 – July 18, 2024) in Marketing, Sales & Distribution! 🚀 Gained hands-on experience in market analysis, sales strategies, and client engagement, enhancing my leadership, discipline, and business acumen. Looking forward to applying these skills in future roles! 📊✨',
    icon: Briefcase,
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Certificates & Internship
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Certificates
              </h3>
            </motion.div>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <cert.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {cert.description}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      View Certificate
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Internship
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <internship.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {internship.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Role: {internship.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {internship.description}
                  </p>
                  <a
                    href={internship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates; 