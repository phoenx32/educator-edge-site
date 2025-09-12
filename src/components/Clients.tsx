const Clients = () => {
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
        
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/b6b84003-6a10-483c-955b-f21b602462bb.png"
            alt="Client logos including ISTE, Google, COABE, Goodwill, Technical College of Lowcountry, IACEA, Delgado, Bluegrass Community College, and other educational organizations"
            className="max-w-4xl w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;