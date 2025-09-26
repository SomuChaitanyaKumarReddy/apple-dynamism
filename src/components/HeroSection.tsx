import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroJobsImage from '@/assets/hero-jobs.jpg';
import heroTrainingImage from '@/assets/hero-training.jpg';

interface HeroSectionProps {
  mode: 'jobs' | 'training';
}

const HeroSection = ({ mode }: HeroSectionProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [mode]);

  const content = {
    jobs: {
      headline: "Find Your Dream Job",
      subheadline: "Connect with top employers and discover opportunities that match your skills and ambitions.",
      primaryCTA: "Find Jobs",
      secondaryCTA: "Upload Resume",
      image: heroJobsImage
    },
    training: {
      headline: "Upgrade Your Skills", 
      subheadline: "Learn from industry experts and advance your career with cutting-edge courses and training programs.",
      primaryCTA: "Start Learning",
      secondaryCTA: "Free Demo",
      image: heroTrainingImage
    }
  };

  const currentContent = content[mode];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg transition-all duration-700" />
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={currentContent.image}
          alt="Hero background"
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`space-y-8 ${isAnimating ? 'crossfade-exit' : 'crossfade-enter'}`}>
          {/* Main Headlines */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              {currentContent.headline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {currentContent.subheadline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold group"
            >
              {currentContent.primaryCTA}
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-secondary group"
            >
              <Play size={18} className="mr-2 transition-transform group-hover:scale-110" />
              {currentContent.secondaryCTA}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            {mode === 'jobs' ? (
              <>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-muted-foreground">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-muted-foreground">Companies</div>
                </div>
                <div className="text-center md:col-span-1 col-span-2">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">200+</div>
                  <div className="text-muted-foreground">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50K+</div>
                  <div className="text-muted-foreground">Students</div>
                </div>
                <div className="text-center md:col-span-1 col-span-2">
                  <div className="text-3xl font-bold text-accent">4.9★</div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;