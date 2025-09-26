import { Button } from '@/components/ui/button';
import { ArrowRight, Upload, Play } from 'lucide-react';

interface FooterProps {
  mode: 'jobs' | 'training';
}

const Footer = ({ mode }: FooterProps) => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            {mode === 'jobs' ? 'Ready to Find Your Dream Job?' : 'Ready to Transform Your Career?'}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {mode === 'jobs' 
              ? 'Join thousands of professionals who have found their perfect career match'
              : 'Join thousands of students who have successfully upskilled and advanced their careers'
            }
          </p>
          
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold group">
            {mode === 'jobs' ? (
              <>
                <Upload size={20} className="mr-2 transition-transform group-hover:-translate-y-1" />
                Upload Your Resume
              </>
            ) : (
              <>
                <Play size={20} className="mr-2 transition-transform group-hover:scale-110" />
                Join Free Demo
              </>
            )}
            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Press</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {mode === 'jobs' ? 'For Job Seekers' : 'For Students'}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Career Advice</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Resume Builder</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Salary Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {mode === 'jobs' ? 'For Employers' : 'For Instructors'}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Post Jobs</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Find Talent</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Recruiting Tools</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="liquid-hover hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 CareerFlow. All rights reserved. Built with ❤️ for career growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;