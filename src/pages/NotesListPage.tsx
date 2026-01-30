import React from 'react';
import { Download, User, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface NotesListPageProps {
  subject: string;
  onBack: () => void;
}

const sampleNotes = [
  { id: 1, title: 'Chapter 1: Introduction to Calculus', author: 'Alex', quality: 'Gold' },
  { id: 2, title: 'Chapter 2: Limits and Continuity', author: 'Ben', quality: 'Silver' },
  { id: 3, title: 'Chapter 3: Differentiation Rules', author: 'Carla', quality: 'Gold' },
  { id: 4, title: 'Exam 1 Review Sheet', author: 'Alex', quality: 'Bronze' },
];

export const NotesListPage: React.FC<NotesListPageProps> = ({ subject, onBack }) => {
  const getBadgeColor = (quality: string) => {
    switch (quality) {
      case 'Gold': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
      case 'Silver': return 'bg-gray-400/20 text-gray-300 border-gray-400';
      case 'Bronze': return 'bg-orange-600/20 text-orange-500 border-orange-600';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-600';
    }
  };

  return (
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <button onClick={onBack} className="mb-8 text-purple-400 hover:text-purple-300 transition-colors duration-300">&larr; Back to Subjects</button>
        <h1 className="text-4xl font-bold mb-8">Notes for <span className="text-purple-400">{subject}</span></h1>
      </motion.div>
      
      <div className="space-y-4">
        {sampleNotes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/60 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold text-gray-100">{note.title}</h2>
              </div>
              <div className="flex items-center text-sm text-gray-400 gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{note.author}</span>
                </div>
                <span className={`px-2 py-1 text-xs font-bold rounded-full border ${getBadgeColor(note.quality)}`}>{note.quality}</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 hover:from-emerald-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <Download className="w-5 h-5" />
              <span>Download</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};