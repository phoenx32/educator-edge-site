import { Users } from 'lucide-react';
import joeyPhoto from '@/assets/team/joey-lehrman.jpg';
import christinPhoto from '@/assets/team/christin-smith.jpg';

const team = [
  {
    name: 'Joey Lehrman',
    role: 'Managing Director',
    photo: joeyPhoto,
    bio: 'Joey Lehrman is an award-winning adult educator, speaker, and project manager with nearly 20 years of experience in adult education and workforce development. He helped build Louisiana\u2019s first statewide online adult education program, expanding it from 30 learners to more than 5,000 across 15 community colleges, and now leads large-scale education projects and AI training for educators in collaboration with ISTE, Google, COABE, OTAN, TCALL, and Goodwill Industries International.',
  },
  {
    name: 'Christin Smith',
    role: 'Director of Curriculum and Professional Learning',
    photo: christinPhoto,
    bio: 'Christin Smith is an award-winning educator and curriculum designer with nearly 20 years of experience teaching and designing learning for adults. She developed an online mathematics program that served more than 1,000 adult learners each year and has created curriculum and professional learning for adult education programs across the country. Christin brings deep classroom knowledge to curriculum design, especially in mathematics and teaching with technology.',
  },
];


const Team = () => (
  <section id="team" className="section-spacing bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center content-gap">
        <div className="section-badge-secondary inline-flex mb-4">
          <Users size={16} />
          Our Team
        </div>
        <h2>Co-Founders</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mt-10">
        {team.map((member) => (
          <div
            key={member.name}
            className="p-6 md:p-8 bg-muted/40 rounded-2xl border border-border/40 text-center flex flex-col items-center"
          >
            <img
              src={member.photo}
              alt={`Portrait of ${member.name}`}
              loading="lazy"
              className="h-32 w-32 md:h-36 md:w-36 rounded-full object-cover object-top border border-border/50"
            />
            <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-left">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
