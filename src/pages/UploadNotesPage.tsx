import React, { useState, useCallback } from 'react';
import { UploadCloud, File, User, Book } from 'lucide-react';
import { motion } from 'framer-motion';

export const UploadNotesPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;

    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setFile(null);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const onDragOver = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0]);
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-3xl"
    >
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 shadow-2xl shadow-black/30">
        <h1 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300">Upload Your Notes</h1>
        <p className="text-center text-gray-400 mb-8">Help fellow students by sharing your knowledge.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields can be added here, e.g., for author, subject */}
          <label 
            onDragOver={onDragOver}
            onDrop={onDrop}
            htmlFor="file-upload" 
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-900/50 hover:bg-gray-800/60 transition-colors duration-300"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloud className="w-12 h-12 mb-4 text-gray-400" />
              <p className="mb-2 text-sm text-gray-400"><span className="font-semibold text-purple-400">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">PDF, PNG, or JPG</p>
            </div>
            <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.png,.jpg,.jpeg" />
          </label>

          {file && !uploading && (
            <div className="text-center text-green-400 font-semibold">
              <p>File selected: {file.name}</p>
            </div>
          )}

          {uploading && (
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          )}

          <button 
            type="submit" 
            disabled={!file || uploading}
            className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/40"
          >
            {uploading ? 'Uploading...' : 'Upload Notes'}
          </button>
        </form>
      </div>
    </motion.div>
  );
};