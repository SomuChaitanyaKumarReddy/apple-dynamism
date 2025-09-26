import { Briefcase, BookOpen } from "lucide-react";
import { useState } from "react";

interface DynamicIslandProps {
  mode: 'jobs' | 'training';
  onModeChange: (mode: 'jobs' | 'training') => void;
  className?: string;
}

const DynamicIsland = ({ mode, onModeChange, className = "" }: DynamicIslandProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    const newMode = mode === 'jobs' ? 'training' : 'jobs';
    onModeChange(newMode);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleToggle}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`dynamic-island pulse-hint flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
          isExpanded ? 'px-6' : 'px-4'
        }`}
      >
        {mode === 'jobs' ? (
          <Briefcase size={20} className="text-primary" />
        ) : (
          <BookOpen size={20} className="text-primary" />
        )}
        
        {isExpanded && (
          <span className="text-sm font-medium text-primary capitalize">
            {mode === 'jobs' ? 'Jobs' : 'Training'}
          </span>
        )}
      </button>
    </div>
  );
};

export default DynamicIsland;