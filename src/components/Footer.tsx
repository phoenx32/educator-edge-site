import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Community Learning Partners</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Empowering educators with digital tools and professional development 
              to create more accessible, connected, and meaningful adult education.
            </p>
            <p className="text-white/70 text-sm mb-4">
              🌎 Remote & On-site Services Available Nationwide
            </p>
            <div className="text-white/60 text-sm">
              © {currentYear} Community Learning Partners. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-white transition-colors">Professional Development Cohorts</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Project Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Keynote Sessions & Conference Workshops</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Curriculum Development and Instructional Design</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:hello@communitylearningpartners.com" className="hover:text-white transition-colors">Email Us</a></li>
              <li><a href="https://calendar.app.google/WF7LJ74vmmK92THEA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Schedule Consultation</a></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.linkedin.com/company/community-learning-partners" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/joey_lehrman/status/1336322607990206465" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://joeylehrman.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Substack Newsletter"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
              </a>
              <a 
                href="mailto:hello@communitylearningpartners.com"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;