const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <li><a href="#services" className="hover:text-white transition-colors">AI Integration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Curriculum Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Professional Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Resource Development</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:hello@communitylearningpartners.com" className="hover:text-white transition-colors">Email Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Schedule Consultation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>Built with passion for transforming adult education through digital innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;