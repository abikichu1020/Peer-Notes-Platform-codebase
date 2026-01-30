import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SubjectCardProps {
  subject: string;
  icon: React.ElementType;
  color: string;
  onSelect: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, icon: Icon, color, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onSelect}
      className="bg-gray-800/50 rounded-xl p-6 cursor-pointer shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 border border-gray-700 hover:border-purple-500"
    >
      <div className="flex flex-col items-center text-center">
        <div className={`mb-4 p-4 bg-gray-700 rounded-full`}>
          <Icon className={`w-12 h-12 ${color}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-100 mb-2">{subject}</h3>
        <div className="flex items-center text-purple-400 group">
          <span className="font-semibold">View Notes</span>
          <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};