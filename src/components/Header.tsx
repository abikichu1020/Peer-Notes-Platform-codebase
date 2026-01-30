import React from 'react';
import { BookOpen, Upload, Home } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'notes' | 'upload') => void;
  currentPage: 'home' | 'notes' | 'upload';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const navItemClass = "flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105";
  const activeClass = "bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg";
  const inactiveClass = "bg-gray-700 hover:bg-gray-600";

  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-3 cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => onNavigate('home')}
          >
            <BookOpen className="w-10 h-10 text-purple-400" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300">
              Student Notes Hub
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => onNavigate('home')} className={`${navItemClass} ${currentPage === 'home' ? activeClass : inactiveClass}`}>
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button onClick={() => onNavigate('upload')} className={`${navItemClass} ${currentPage === 'upload' ? activeClass : inactiveClass}`}>
              <Upload className="w-5 h-5" />
              <span>Upload Notes</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};