import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const form = e.currentTarget;
      const response = await fetch('https://formspree.io/f/moveyvyl', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="tel:+919569926322" className="flex items-center space-x-4 hover:text-blue-400 transition-all transform hover:scale-105">
                <Phone className="w-6 h-6" />
                <span>+91-9569926322</span>
              </a>
              <a href="mailto:co.himanshu95699@gmail.com" className="flex items-center space-x-4 hover:text-blue-400 transition-all transform hover:scale-105">
                <Mail className="w-6 h-6" />
                <span>co.himanshu95699@gmail.com</span>
              </a>
              <a href="https://github.com/coderhimanshu2775" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-blue-400 transition-all transform hover:scale-105">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/himanshu2403" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-blue-400 transition-all transform hover:scale-105">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>
                {status === 'sending' ? 'Sending...' :
                 status === 'success' ? 'Message Sent!' :
                 status === 'error' ? 'Try Again' :
                 'Send Message'}
              </span>
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center">Thank you for your message!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;