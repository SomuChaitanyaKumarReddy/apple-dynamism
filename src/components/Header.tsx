import { useState } from 'react';
import { Zap, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DynamicIsland from './DynamicIsland';

interface HeaderProps {
  mode: 'jobs' | 'training';
  onModeChange: (mode: 'jobs' | 'training') => void;
}

const Header = ({ mode, onModeChange }: HeaderProps) => {
  const jobsNavItems = ['Jobs', 'Companies', 'Employers'];
  const trainingNavItems = ['Courses', 'Mentors', 'Workshops'];
  
  const currentNavItems = mode === 'jobs' ? jobsNavItems : trainingNavItems;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`transition-all duration-500 ${mode === 'jobs' ? 'spring-enter' : 'spring-enter'}`}>
              <Zap 
                size={32} 
                className={`transition-colors duration-500 ${
                  mode === 'jobs' 
                    ? 'text-primary' 
                    : 'text-accent'
                }`}
              />
            </div>
            <span className="text-2xl font-bold text-foreground">CareerFlow</span>
          </div>

          {/* Center Navigation + Dynamic Island */}
          <div className="flex items-center gap-6">
            {/* Dynamic Island */}
            <DynamicIsland 
              mode={mode}
              onModeChange={onModeChange}
            />
            
            {/* Pill Navigation */}
            <nav className="hidden md:flex items-center bg-card/50 backdrop-blur-sm rounded-full px-6 py-2 border border-border/50">
              {currentNavItems.map((item, index) => (
                <button
                  key={`${mode}-${item}`}
                  className={`liquid-hover px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    index === 0 ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <User size={18} className="mr-2" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;