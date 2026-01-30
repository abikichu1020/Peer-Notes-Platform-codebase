import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { NotesListPage } from './pages/NotesListPage';
import { UploadNotesPage } from './pages/UploadNotesPage';

type Page = 'home' | 'notes' | 'upload';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [subject, setSubject] = useState<string | null>(null);

  const navigateTo = useCallback((page: Page) => {
    window.history.pushState({ page }, '', `/${page}`);
    setCurrentPage(page);
  }, []);

  const handleSubjectSelect = useCallback((selectedSubject: string) => {
    setSubject(selectedSubject);
    navigateTo('notes');
  }, [navigateTo]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        // Handle initial page load with path
        const path = window.location.pathname.substring(1);
        if (['home', 'notes', 'upload'].includes(path)) {
          setCurrentPage(path as Page);
        } else {
          setCurrentPage('home');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial page based on URL path
    const path = window.location.pathname.substring(1) as Page;
    if (['home', 'notes', 'upload'].includes(path)) {
        setCurrentPage(path);
    } else {
        setCurrentPage('home');
        window.history.replaceState({ page: 'home' }, '', '/home');
    }


    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'notes':
        return <NotesListPage subject={subject || 'All Subjects'} onBack={() => navigateTo('home')} />;
      case 'upload':
        return <UploadNotesPage />;
      case 'home':
      default:
        return <HomePage onSubjectSelect={handleSubjectSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main className="p-4 sm:p-6 md:p-8">
        {renderPage()}
      </main>
    </div>
  );
}