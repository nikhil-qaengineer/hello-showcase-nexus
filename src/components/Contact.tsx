import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'alex.johnson@example.com',
      href: 'mailto:alex.johnson@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      href: 'https://github.com',
      username: '@alexjohnson'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: 'https://linkedin.com',
      username: '/in/alexjohnson'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-medium animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full hero-gradient text-white hover:opacity-90 transition-opacity duration-200"
                    size="lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a friendly chat about technology and design.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="hero-gradient p-3 rounded-full">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 bg-card p-4 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                    >
                      <link.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-200" />
                      <div>
                        <div className="font-semibold text-sm">{link.title}</div>
                        <div className="text-xs text-muted-foreground">{link.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Quick Response Promise</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I typically respond to all inquiries within 24 hours. 
                    For urgent matters, feel free to reach out via phone or LinkedIn.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;