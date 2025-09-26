import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [mode, setMode] = useState<'jobs' | 'training'>('jobs');

  // Apply mode classes to body
  useEffect(() => {
    document.body.className = `mode-${mode}`;
    
    // Update page title based on mode
    document.title = mode === 'jobs' 
      ? 'CareerFlow - Find Your Dream Job' 
      : 'CareerFlow - Upgrade Your Skills';
      
    return () => {
      document.body.className = '';
    };
  }, [mode]);

  const handleModeChange = (newMode: 'jobs' | 'training') => {
    setMode(newMode);
  };

  return (
    <div className="min-h-screen flex flex-col transition-all duration-500">
      {/* Header with Dynamic Island */}
      <Header mode={mode} onModeChange={handleModeChange} />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection mode={mode} />
        
        {/* Testimonials Section */}
        <TestimonialsSection mode={mode} />
      </main>
      
      {/* Footer */}
      <Footer mode={mode} />
    </div>
  );
};

export default Index;
