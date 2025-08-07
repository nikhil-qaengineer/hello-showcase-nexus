import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:alex.johnson@example.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity duration-200"
              >
                Alex Johnson
              </button>
              <p className="text-muted-foreground mt-2">
                Creative Developer & Designer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground flex items-center justify-center md:justify-end">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> © {currentYear}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                All rights reserved.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-muted-foreground">
                Built with React, TypeScript, and Tailwind CSS
              </p>
              <div className="flex space-x-6">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;