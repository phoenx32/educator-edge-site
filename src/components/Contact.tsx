import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@communitylearningpartners.com',
      action: 'mailto:hello@communitylearningpartners.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Remote & On-site Services Available',
      action: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            💬 Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="bg-gradient-primary bg-clip-text text-transparent">Educational Impact?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help you integrate digital tools, develop curricula, 
            and empower your educators with professional development that drives results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Connect With Our Team</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg text-white">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-card bg-gradient-primary text-white">
              <CardHeader>
                <CardTitle className="text-xl">Schedule a Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Ready to get started? Book a 30-minute consultation to discuss your specific needs and goals.
                </p>
                <Button variant="secondary" className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-elegant bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" placeholder="Your organization or institution" />
              </div>
              
              <div>
                <Label htmlFor="service">Service of Interest</Label>
                <select 
                  id="service" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="ai-integration">AI Integration & Digital Tools</option>
                  <option value="curriculum">Curriculum Development</option>
                  <option value="professional-dev">Professional Development</option>
                  <option value="resources">Resource Development</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your goals and how we can help..."
                  className="min-h-32"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;