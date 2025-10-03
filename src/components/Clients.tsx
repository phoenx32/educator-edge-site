import coabeLogo from '@/assets/logos/coabe-logo.png';
import isteLogo from '@/assets/logos/iste-logo.png';
import googleEducationLogo from '@/assets/logos/google-education-logo.png';
import goodwillLogo from '@/assets/logos/goodwill-logo.png';
import otanLogo from '@/assets/logos/otan-logo.png';
import tcallLogo from '@/assets/logos/tcall-logo.png';
import tcsgLogo from '@/assets/logos/tcsg-logo.jpg';
import kyaeLogo from '@/assets/logos/kyae-logo.png';

const Clients = () => {
  const clients = [
    { name: 'COABE', alt: 'Coalition on Adult Basic Education', logo: coabeLogo },
    { name: 'ISTE', alt: 'International Society for Technology in Education', logo: isteLogo },
    { name: 'Google for Education', alt: 'Google for Education', logo: googleEducationLogo },
    { name: 'Goodwill Industries International', alt: 'Goodwill Industries International', logo: goodwillLogo },
    { name: 'OTAN', alt: 'Outreach and Technical Assistance Network', logo: otanLogo },
    { name: 'TCALL', alt: 'Texas Center for the Advancement of Literacy and Learning', logo: tcallLogo },
    { name: 'Technical College System of Georgia', alt: 'Technical College System of Georgia', logo: tcsgLogo },
    { name: 'KYAE', alt: 'Kentucky Adult Education', logo: kyaeLogo },
    { name: 'NOLA Public Schools', alt: 'New Orleans Public Schools', logo: null },
    { name: 'Delgado Community College', alt: 'Delgado Community College', logo: null },
    { name: 'Bluegrass Community & Technical College', alt: 'Bluegrass Community and Technical College', logo: null },
    { name: 'Adult Numeracy Network', alt: 'Adult Numeracy Network', logo: null },
    { name: 'ICCB', alt: 'Illinois Community College Board', logo: null },
    { name: 'Providence Public Library', alt: 'Providence Public Library', logo: null },
    { name: 'Arizona Department of Education', alt: 'Arizona Department of Education', logo: null },
    { name: 'Atlas/Hamline', alt: 'Atlas/Hamline University', logo: null },
    { name: 'Morehead State University', alt: 'Morehead State University', logo: null },
    { name: 'Portland Adult Education', alt: 'Portland Adult Education', logo: null },
    { name: 'Rhode Island Department of Education', alt: 'Rhode Island Department of Education', logo: null }
  ];

  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Leading <span className="bg-gradient-primary bg-clip-text text-transparent">Educational Organizations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with adult education programs, community colleges, and workforce development organizations nationwide.
          </p>
        </div>
        
        {/* Horizontal scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 whitespace-nowrap">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0 h-20 w-40 flex items-center justify-center">
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    className="max-h-16 max-w-32 w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <div className="text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 font-medium text-sm text-center px-2">
                    {client.name}
                  </div>
                )}
              </div>
            ))}
            {/* Duplicate for seamless scrolling */}
            {clients.map((client, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 h-20 w-40 flex items-center justify-center">
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    className="max-h-16 max-w-32 w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <div className="text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 font-medium text-sm text-center px-2">
                    {client.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;