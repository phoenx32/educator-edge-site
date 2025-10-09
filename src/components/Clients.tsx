import { Handshake } from 'lucide-react';
import coabeLogo from '@/assets/logos/coabe-logo.png';
import isteLogo from '@/assets/logos/iste-logo.png';
import googleEducationLogo from '@/assets/logos/google-education-logo.png';
import goodwillLogo from '@/assets/logos/goodwill-logo.png';
import otanLogo from '@/assets/logos/otan-logo.png';
import tcallLogo from '@/assets/logos/tcall-logo.png';
import tcsgLogo from '@/assets/logos/tcsg-logo.jpg';
import kyaeLogo from '@/assets/logos/kyae-logo.png';
import btcLogo from '@/assets/logos/btc-logo.jpg';
import iaceaLogo from '@/assets/logos/iacea-logo.jpg';
import annLogo from '@/assets/logos/ann-logo.png';
import arizonaLogo from '@/assets/logos/arizona-logo.png';
import atlasLogo from '@/assets/logos/atlas-logo.png';
import bluegrassLogo from '@/assets/logos/bluegrass-logo.png';
import mississippiLogo from '@/assets/logos/mississippi-logo.png';
import portlandLogo from '@/assets/logos/portland-logo.png';
import delgadoLogo from '@/assets/logos/delgado-logo.webp';
import moreheadLogo from '@/assets/logos/morehead-logo.webp';

const Clients = () => {
  const clientsRow1 = [
    { name: 'COABE', alt: 'Coalition on Adult Basic Education', logo: coabeLogo },
    { name: 'ISTE', alt: 'International Society for Technology in Education', logo: isteLogo },
    { name: 'Google for Education', alt: 'Google for Education', logo: googleEducationLogo },
    { name: 'Goodwill Industries International', alt: 'Goodwill Industries International', logo: goodwillLogo },
    { name: 'OTAN', alt: 'Outreach and Technical Assistance Network', logo: otanLogo },
    { name: 'TCALL', alt: 'Texas Center for the Advancement of Literacy and Learning', logo: tcallLogo },
    { name: 'Technical College System of Georgia', alt: 'Technical College System of Georgia', logo: tcsgLogo },
    { name: 'KYAE', alt: 'Kentucky Adult Education', logo: kyaeLogo },
  ];

  const clientsRow2 = [
    { name: 'BTC', alt: 'BTC', logo: btcLogo },
    { name: 'IACEA', alt: 'Illinois Adult and Continuing Educators Association', logo: iaceaLogo },
    { name: 'Adult Numeracy Network', alt: 'Adult Numeracy Network', logo: annLogo },
    { name: 'Arizona Department of Education', alt: 'Arizona Department of Education', logo: arizonaLogo },
    { name: 'Atlas/Hamline', alt: 'Atlas/Hamline University', logo: atlasLogo },
    { name: 'Bluegrass Community & Technical College', alt: 'Bluegrass Community and Technical College', logo: bluegrassLogo },
    { name: 'Mississippi Community College Board', alt: 'Mississippi Community College Board', logo: mississippiLogo },
    { name: 'Portland Adult Education', alt: 'Portland Adult Education', logo: portlandLogo },
    { name: 'Delgado Community College', alt: 'Delgado Community College', logo: delgadoLogo },
    { name: 'Morehead State University', alt: 'Morehead State University', logo: moreheadLogo },
  ];

  return (
    <section className="section-spacing-sm bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center content-gap-sm">
          <div className="section-badge-primary">
            <Handshake size={16} />
            Our Partners
          </div>
          <h2 className="mb-4">
            Trusted by Leading <span className="bg-gradient-primary bg-clip-text text-transparent">Educational Organizations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with adult education programs, community colleges, and workforce development organizations nationwide.
          </p>
        </div>
        
        {/* First row - Horizontal scrolling logos */}
        <div className="relative overflow-hidden mb-4">
          <div className="flex w-max animate-scroll will-change-transform">
            <div className="flex items-center gap-8 flex-none">
              {clientsRow1.map((client, index) => (
                <div key={index} className="flex-shrink-0 h-16 w-32 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="max-h-12 max-w-28 w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-8 flex-none" aria-hidden="true">
              {clientsRow1.map((client, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 h-16 w-32 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="max-h-12 max-w-28 w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second row - Reverse direction scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-fast will-change-transform">
            <div className="flex items-center gap-8 flex-none">
              {clientsRow2.map((client, index) => (
                <div key={index} className="flex-shrink-0 h-16 w-32 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="max-h-12 max-w-28 w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-8 flex-none" aria-hidden="true">
              {clientsRow2.map((client, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 h-16 w-32 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="max-h-12 max-w-28 w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;