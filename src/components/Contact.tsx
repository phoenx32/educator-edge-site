import { Mail, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('https://joeylehrman.substack.com/api/v1/free', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          first_url: window.location.href
        })
      });

      if (response.ok) {
        setMessage('Thanks for subscribing! Check your email to confirm.');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="section-spacing bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center content-gap">
          <div className="section-badge-accent">
            <MessageCircle size={16} />
            Get in Touch
          </div>
          <h2 className="mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect & Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reach out to discuss your educational needs, or subscribe to our newsletter for expert insights on digital learning, curriculum development, and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 md:mb-8">Connect With Our Team</h3>
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
          <div id="newsletter" className="space-y-6">
            <Card className="border-0 shadow-card bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Join Our Newsletter</h4>
                    <p className="text-muted-foreground text-sm">
                      Get expert insights on digital learning and professional development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="h-12 flex-1"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="h-12 px-8"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
              
              {message && (
                <p className={`text-sm ${message.includes('Thanks') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
              
              <p className="text-xs text-muted-foreground">
                Powered by Substack. By subscribing you agree to their{' '}
                <a href="https://substack.com/tos" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  Terms of Use
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;