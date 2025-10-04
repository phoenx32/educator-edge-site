import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import avatarBlackWoman from '@/assets/avatars/avatar-black-woman.jpg';
import avatarBlackMan from '@/assets/avatars/avatar-black-man.jpg';
import avatarWhiteWoman from '@/assets/avatars/avatar-white-woman.jpg';
import avatarWhiteMan from '@/assets/avatars/avatar-white-man.jpg';
import avatarHispanicWoman from '@/assets/avatars/avatar-hispanic-woman.jpg';
import avatarAsianMan from '@/assets/avatars/avatar-asian-man.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've been really impressed with how accessible and user friendly everything has been, and I am looking forward to this week's module as well.",
      author: "Adult Education Instructor",
      location: "Lexington, KY",
      avatar: avatarBlackWoman
    },
    {
      quote: "I am thrilled that this course has given me the opportunity to create some new tools that I have actually been able to apply to my work! Thank you for helping us explore new ways of doing things.",
      author: "ESL Program Director",
      location: "Waco, TX",
      avatar: avatarWhiteMan
    },
    {
      quote: "I really like the module because it made me look into things I normally ignore. I really enjoy the creativity, so I am only shortchanging myself in the long run.",
      author: "ABE Instructor",
      location: "Atlanta, GA",
      avatar: avatarHispanicWoman
    },
    {
      quote: "Love this! I'm so excited to learn how to utilize this tool. I knew it existed but never really took the time to set it up! This will be very helpful ALL THE TIME!",
      author: "Career Navigator",
      location: "Providence, RI",
      avatar: avatarAsianMan
    },
    {
      quote: "The instructors did a great job giving feedback. Even though I'm not an instructor, it opened my eyes to the difference between feedback that helps someone learn and feedback that can inhibit learning. I now understand the importance of quality feedback and plan to share with our staff.",
      author: "Program Administrator",
      location: "Sacramento, CA",
      avatar: avatarWhiteWoman
    },
    {
      quote: "I truly loved this course. I hope we can both meet up again for year three of digital skills!! This is the most important thing we can be learning for our roles in supporting students, as this piece changes daily and there is always more to learn. Thankful to have leadership that values these types of professional development.",
      author: "Adult Education Director",
      location: "Chicago, IL",
      avatar: avatarBlackMan
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
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
                <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
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
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground mt-1">{testimonial.location}</div>
                    </div>
                  </div>
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