import { Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@communitylearningpartners.com',
      action: 'mailto:hello@communitylearningpartners.com'
    },
    {
      icon: MapPin,
      title: 'Service Locations',
      content: 'Remote & On-site Services Available Nationwide',
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
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect & Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reach out to discuss your educational needs, or subscribe to our newsletter for expert insights on digital learning, curriculum development, and professional growth.
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

          {/* Newsletter Signup */}
          <Card className="border-0 shadow-elegant bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Connected</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Join our community of educators and professionals. Get the latest insights on digital learning strategies, curriculum innovation, AI integration, and professional development delivered directly to your inbox.
              </p>
              <div className="flex justify-center">
                <iframe 
                  src="https://joeylehrman.substack.com/embed" 
                  width="480" 
                  height="320" 
                  style={{ border: '1px solid hsl(var(--border))', background: 'hsl(var(--card))', maxWidth: '100%' }}
                  frameBorder="0" 
                  scrolling="no"
                  title="Newsletter Signup"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;