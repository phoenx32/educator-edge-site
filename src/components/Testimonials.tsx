import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've been really impressed with how accessible and user friendly everything has been, and I am looking forward to this week's module as well.",
      author: "Adult Education Instructor",
      program: "Professional Development Course"
    },
    {
      quote: "I am thrilled that this course has given me the opportunity to create some new tools that I have actually been able to apply to my work! Thank you for helping us explore new ways of doing things.",
      author: "ESL Program Director",
      program: "Technology Integration Training"
    },
    {
      quote: "I really like the module because it made me look into things I normally ignore. I really enjoy the creativity, so I am only shortchanging myself in the long run.",
      author: "ABE Instructor",
      program: "Digital Curriculum Design"
    },
    {
      quote: "Love this! I'm so excited to learn how to utilize this tool. I knew it existed but never really took the time to set it up! This will be very helpful ALL THE TIME!",
      author: "Career Navigator",
      program: "Educational Technology Workshop"
    },
    {
      quote: "The instructors did a great job giving feedback. Even though I'm not an instructor, it opened my eyes to the difference between feedback that helps someone learn and feedback that can inhibit learning. I now understand the importance of quality feedback and plan to share with our staff.",
      author: "Program Administrator",
      program: "Educator Training Workshop"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            What Educators Say
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Adult Educators</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold ml-2">4.9/5</span>
            <span className="text-muted-foreground">Course Evaluation Rate</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.program}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;