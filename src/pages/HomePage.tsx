import React from 'react';
import { SubjectCard } from '../components/SubjectCard';
import { Calculator, Atom, Code, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomePageProps {
  onSubjectSelect: (subject: string) => void;
}

const subjects = [
  { name: 'Mathematics', icon: Calculator, color: 'text-blue-400' },
  { name: 'Physics', icon: Atom, color: 'text-green-400' },
  { name: 'Computer Science', icon: Code, color: 'text-purple-400' },
  { name: 'Economics', icon: BarChart2, color: 'text-yellow-400' },
];

export const HomePage: React.FC<HomePageProps> = ({ onSubjectSelect }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Find Your Study Materials
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Explore high-quality, peer-reviewed notes across all your subjects. Upload your own to help others!
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {subjects.map((subject) => (
          <motion.div key={subject.name} variants={itemVariants}>
            <SubjectCard
              subject={subject.name}
              icon={subject.icon}
              color={subject.color}
              onSelect={() => onSubjectSelect(subject.name)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};