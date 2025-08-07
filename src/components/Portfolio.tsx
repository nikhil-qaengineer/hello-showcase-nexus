import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that provides detailed forecasts, interactive maps, and personalized weather alerts for multiple locations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A clean, minimalist portfolio website showcasing creative work with smooth animations and an intuitive user experience.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media managers featuring comprehensive metrics, automated reporting, and intuitive data visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular', 'D3.js', 'Express.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Recipe Sharing Platform',
      description: 'A community-driven recipe sharing platform with user profiles, recipe ratings, meal planning, and shopping list generation.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'GraphQL', 'Prisma', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills in development, design, 
              and problem-solving across various technologies and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {projects.map((project, index) => (
              <Card key={index} className="group shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-white text-primary hover:bg-gray-100"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground border-primary text-primary"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;