import { Code, Palette, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern technologies like React, TypeScript, and Node.js'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful, user-centered designs with attention to detail and usability'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong communication skills and experience working with diverse teams'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating meaningful digital experiences that bridge the gap 
              between beautiful design and powerful functionality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  With over 5 years of experience in web development and design, I've had the 
                  privilege of working with startups, established companies, and everything in between. 
                  My journey began with a curiosity about how things work, which evolved into a 
                  passion for creating digital solutions that make a real impact.
                </p>
                <p className="leading-relaxed">
                  I believe in the power of clean, efficient code and thoughtful design. Every 
                  project is an opportunity to learn something new and push the boundaries of 
                  what's possible. When I'm not coding, you'll find me exploring new design 
                  trends, contributing to open-source projects, or enjoying the great outdoors.
                </p>
                <p className="leading-relaxed">
                  I'm always excited to take on new challenges and collaborate with fellow 
                  creators who share my enthusiasm for building exceptional digital experiences.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 animate-slide-up">
              {skills.map((skill, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="hero-gradient p-3 rounded-full mb-4">
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center space-x-8 bg-card p-6 rounded-2xl shadow-soft">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;