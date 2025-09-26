import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Building, GraduationCap } from 'lucide-react';

interface TestimonialsSectionProps {
  mode: 'jobs' | 'training';
}

const TestimonialsSection = ({ mode }: TestimonialsSectionProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [mode]);

  const jobsTestimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      content: "CareerFlow connected me with my dream job at a top tech company. The process was seamless and the matching algorithm is incredible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Johnson", 
      role: "Product Manager",
      company: "StartupXYZ",
      location: "New York, NY",
      content: "I found my perfect role in just 2 weeks. The platform made networking with recruiters effortless and professional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Elena Rodriguez",
      role: "Data Scientist", 
      company: "DataFlow Inc",
      location: "Austin, TX",
      content: "The career guidance and interview prep resources helped me land a role with a 40% salary increase. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const trainingTestimonials = [
    {
      name: "David Kim",
      role: "Full-Stack Developer",
      course: "Web Development Bootcamp",
      duration: "6 months",
      content: "Transitioned from marketing to tech with CareerFlow's comprehensive training program. Now working at my dream company!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      role: "UX Designer",
      course: "Design Thinking Masterclass", 
      duration: "4 months",
      content: "The mentorship and hands-on projects gave me the confidence to pivot my career. The support from instructors was amazing.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Miller",
      role: "Data Analyst",
      course: "Python & Analytics",
      duration: "5 months", 
      content: "From zero coding experience to landing a data analyst role. The curriculum is practical and industry-focused.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const currentTestimonials = mode === 'jobs' ? jobsTestimonials : trainingTestimonials;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isAnimating ? 'crossfade-exit' : 'crossfade-enter'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {mode === 'jobs' ? 'Success Stories' : 'Student Success'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {mode === 'jobs' 
              ? 'Real people who found their dream careers through our platform'
              : 'Real students who transformed their careers through our training programs'
            }
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid md:grid-cols-3 gap-8 ${isAnimating ? 'crossfade-exit' : 'crossfade-enter'}`}>
          {currentTestimonials.map((testimonial, index) => (
            <Card key={`${mode}-${index}`} className="card-lift bg-card border-border/50 hover:border-accent/50">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      {mode === 'jobs' ? (
                        <>
                          <Building size={12} />
                          <span>{(testimonial as any).company}</span>
                          <span className="mx-1">•</span>
                          <MapPin size={12} />
                          <span>{(testimonial as any).location}</span>
                        </>
                      ) : (
                        <>
                          <GraduationCap size={12} />
                          <span>{(testimonial as any).course}</span>
                          <span className="mx-1">•</span>
                          <span>{(testimonial as any).duration}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;