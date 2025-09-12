const Clients = () => {
  const clients = [
    { name: 'ISTE', alt: 'International Society for Technology in Education' },
    { name: 'Google for Education', alt: 'Google for Education' },
    { name: 'COABE', alt: 'Coalition on Adult Basic Education' },
    { name: 'Goodwill', alt: 'Goodwill Industries International' },
    { name: 'Technical College of the Lowcountry', alt: 'Technical College of the Lowcountry' },
    { name: 'IACEA', alt: 'Illinois Adult and Continuing Educators Association' },
    { name: 'Delgado Community College', alt: 'Delgado Community College' },
    { name: 'Bluegrass Community College', alt: 'Bluegrass Community and Technical College' },
    { name: 'LAPCAE', alt: 'Louisiana Association of Public and Community Adult Education' },
    { name: 'NCLA', alt: 'North Carolina Literacy Association' },
    { name: 'JCCB', alt: 'Jefferson Community and Technical College' },
    { name: 'OTAN', alt: 'Outreach and Technical Assistance Network' }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
              <div key={index} className="flex-shrink-0 h-16 w-32 flex items-center justify-center">
                <div className="text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 font-medium text-sm text-center">
                  {client.name}
                </div>
              </div>
            ))}
            {/* Duplicate for seamless scrolling */}
            {clients.map((client, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 h-16 w-32 flex items-center justify-center">
                <div className="text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 font-medium text-sm text-center">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;