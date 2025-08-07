import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
            Creative Developer & Designer
          </p>
          <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful digital experiences with a passion for clean code, 
            intuitive design, and innovative solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="bg-white text-primary hover:bg-gray-100 shadow-large px-8 py-3 text-lg font-semibold"
            >
              Learn More About Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
            >
              View My Work
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={scrollToAbout}
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;