import { Mail, Calendar } from 'lucide-react';
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
      icon: Calendar,
      title: 'Schedule a Free Consultation',
      content: 'Book a 30-minute consultation to discuss your goals',
      action: 'https://calendar.app.google/Ju1nX9Trzxur32JR6'
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
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg text-white">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <a 
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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