import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: 'Software Testing',
      link: 'https://drive.google.com/file/d/1sWaOCnM1ep_-oqN_NGVUK9lH4sHdgEI6/view?usp=sharing',
      description: 'Successfully completed the Software Testing course offered by NPTEL (Jul–Oct 2024), earning valuable insights into software quality assurance, testing methodologies, and debugging techniques. This course has strengthened my understanding of manual and automated testing, black-box & white-box testing, and industry best practices, enhancing my skills in ensuring software reliability and performance.',
    },
    {
      title: 'JavaScript for Web Development',
      link: 'https://drive.google.com/file/d/1jCYwRd_i4gi00vh6iOkDXy7ezcYISJPI/view?usp=sharing',
      description: 'Completed comprehensive JavaScript training, mastering modern web development techniques, DOM manipulation, and asynchronous programming. Gained expertise in building interactive web applications and implementing best practices in JavaScript development.',
    },
    {
      title: 'Object Oriented Programming',
      link: 'https://drive.google.com/file/d/1DaVD7CZORLCSOSwQorAXulyJuFtuQwxc/view?usp=sharing',
      description: 'Acquired in-depth knowledge of Object-Oriented Programming principles, including encapsulation, inheritance, polymorphism, and abstraction. Developed strong skills in designing and implementing robust, maintainable software solutions using OOP concepts.',
    },
  ];

  const internship = {
    company: 'AADMEX LIFESCIENCES PRIVATE LIMITED',
    role: 'Business Developer',
    link: 'https://drive.google.com/file/d/1WZWj_6vs-1--CBCFAmOywFFS78BherE2/view?usp=sharing',
    description: 'Excited to complete my Business Development Trainee Internship at AADMEX Lifesciences Pvt. Ltd. (May 28 – July 18, 2024) in Marketing, Sales & Distribution! 🚀 Gained hands-on experience in market analysis, sales strategies, and client engagement, enhancing my leadership, discipline, and business acumen. Looking forward to applying these skills in future roles! 📊✨',
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Certificates & Internship
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
              Certificates
            </h3>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
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
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
              Internship
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
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
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Certificate
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates; 