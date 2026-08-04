import {
  UserPlus, ClipboardList, HeartHandshake, LineChart, FolderKanban, Mail, PieChart,
  Briefcase, FileSignature, Megaphone, PlayCircle, BarChart3, Library, Workflow,
  Banknote, TrendingUp, Map, Search, Users, Lightbulb, Hammer, MessagesSquare, RefreshCw,
  Sparkles, Mic, BookOpen, CheckCircle2, GraduationCap,
} from 'lucide-react';
import { RegisterButton } from './RegisterButton';

const focusAreas = [
  { icon: UserPlus, text: 'Connecting with prospective learners' },
  { icon: ClipboardList, text: 'Supporting enrollment, orientation, and onboarding' },
  { icon: HeartHandshake, text: 'Strengthening learner persistence and retention' },
  { icon: LineChart, text: 'Monitoring attendance, educational gains, and credential attainment' },
  { icon: FolderKanban, text: 'Organizing policies, procedures, and staff resources' },
  { icon: Mail, text: 'Improving routine communications and administrative processes' },
  { icon: PieChart, text: 'Analyzing program information to support local decisions' },
  { icon: Briefcase, text: 'Exploring workforce trends and career pathway opportunities' },
  { icon: FileSignature, text: 'Developing grants, plans, reports, or evaluation resources' },
];

const projects = [
  { icon: Megaphone, title: 'Recruitment and Outreach Campaign', description: 'Develop flyers, social media content, email messages, outreach materials, and a landing page designed for the audiences your program wants to reach.' },
  { icon: PlayCircle, title: 'Student Orientation', description: 'Create an on-demand orientation using text, audio, video, or an interactive website to share program information, services, schedules, and next steps.' },
  { icon: BarChart3, title: 'Program Data Dashboard', description: 'Organize enrollment, attendance, measurable skill gains, credential attainment, retention, or other locally selected measures into a useful dashboard.' },
  { icon: Library, title: 'Staff Resource Hub', description: 'Build a searchable resource that helps staff locate policies, procedures, forms, calendars, referral information, and other program materials.' },
  { icon: Workflow, title: 'Administrative Workflow', description: 'Develop or improve a process related to intake, communication, scheduling, information collection, referrals, or another recurring administrative task.' },
  { icon: Banknote, title: 'Grant Development Package', description: 'Research potential funding opportunities, organize supporting information, gather evidence, and develop materials for a grant connected to a local priority.' },
  { icon: TrendingUp, title: 'Labor Market and Credential Analysis', description: 'Examine regional employment trends, occupations, industries, and credentials that may inform program planning or career pathway development.' },
  { icon: Map, title: 'Strategic Planning Resource', description: 'Develop an environmental scan, implementation roadmap, strategic plan, or related resource shaped by the program\u2019s own priorities and planning process.' },
  { icon: Search, title: 'Program Evaluation or Data Analysis', description: 'Explore locally available information, identify patterns, and develop questions or recommendations that can support continued program improvement.' },
];

const steps = [
  { icon: Lightbulb, title: 'Choose and Plan', body: 'Select a program priority and identify the people, needs, information, and intended results connected to the project.', note: 'Participants can use an individual coaching conversation to talk through the project idea, consider possible approaches, and define a manageable scope.' },
  { icon: Hammer, title: 'Build', body: 'Use course examples, planning resources, and freely available AI tools to develop an initial version of the project.', note: 'Participants can request personalized feedback on their work and discuss questions that arise as they apply the material within their own setting.' },
  { icon: MessagesSquare, title: 'Gather Local Input', body: 'Participants may share the project with colleagues, staff members, learners, partners, or other relevant people in their program.', note: 'The type and extent of feedback will depend on the project and the participant\u2019s local context. Participants decide who to involve and how to use the input they receive.' },
  { icon: RefreshCw, title: 'Refine and Continue', body: 'Revise the project based on local feedback, coaching, peer input, and the participant\u2019s own assessment.', note: 'By the end of the bootcamp, participants will have a working resource and a plan for how they may continue testing, adapting, or expanding it after the course.' },
];

const includes = [
  { icon: FolderKanban, title: 'Flexible Project Work', body: 'Participants work on a project they select and complete course activities on a schedule that fits alongside their professional responsibilities.' },
  { icon: HeartHandshake, title: 'Personalized Coaching and Feedback', body: 'Each participant has access to individual support from a Community Learning Partners facilitator. Coaching can be used to discuss project ideas, consider tools and approaches, review work in progress, or think through questions specific to the participant\u2019s program.' },
  { icon: Mic, title: 'Administrator Spotlight Talks', body: 'Adult education administrators will share examples of how they are choosing to use AI within their own programs, focusing on practical applications, local decision making, and lessons from implementation.' },
  { icon: BookOpen, title: 'Practical Resources and Examples', body: 'Participants will have access to project templates, planning tools, examples, demonstrations, and other resources they can adapt to their own work.' },
  { icon: Users, title: 'Peer Learning', body: 'Participants can exchange ideas with administrators working in different roles and settings. Peer participation is encouraged but flexible, allowing each person to engage in ways that support their project and schedule.' },
];

const explorations = [
  'Identify AI applications that fit a specific program priority',
  'Develop prompts and instructions for administrative work',
  'Organize, summarize, and communicate information',
  'Develop written, visual, audio, or interactive resources',
  'Analyze locally available program information',
  'Create resources that can be reviewed and adapted by staff',
  'Gather feedback from the people who may use a resource',
  'Evaluate whether a tool or process is helpful in a particular setting',
  'Plan for continued use, revision, or expansion',
  'Work with colleagues on a shared program project',
];

const audience = [
  'Program directors',
  'Assistant and associate directors',
  'State adult education staff',
  'Professional development coordinators',
  'Data, accountability, and performance staff',
  'College and institutional administrators',
  'Workforce and career pathway leaders',
  'Grant and program development staff',
  'Instructional leaders working on program-wide initiatives',
  'Teams interested in developing a shared project',
];

const BootcampProgram = () => (
  <>
    {/* Priority */}
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="section-badge-primary">
          <Sparkles size={16} />
          Your context, your project
        </div>
        <h2 className="mt-4 mb-6">Apply AI to a Priority That Matters in Your Program</h2>
        <p className="text-muted-foreground leading-relaxed">
          Adult education programs differ in their learners, communities, staffing, services, systems, and goals.
          This bootcamp does not prescribe a single way to use AI or require every participant to complete the
          same assignment.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Instead, each participant chooses an administrative priority that reflects their role and local context.
          Over ten weeks, participants can use the course resources, examples, coaching, and peer community to
          build and refine something their program may be able to use.
        </p>

        <h3 className="mt-10 mb-4 text-lg font-semibold">Potential areas of focus include:</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {focusAreas.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 px-4 py-3">
              <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-sm text-foreground leading-relaxed">{text}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
          Participation in the bootcamp is voluntary. Participants decide which ideas and tools are useful for
          their setting and how, or whether, to apply them within their programs.
        </p>
      </div>
    </section>

    {/* Projects */}
    <section id="build" className="section-spacing bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center content-gap max-w-3xl mx-auto">
          <div className="section-badge-primary">
            <Hammer size={16} />
            What You Can Build
          </div>
          <h2 className="mb-4">Build Something Your Program Can Use</h2>
          <p className="text-muted-foreground">
            Participants may choose from a range of project types or propose another project that fits their
            responsibilities and program priorities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {projects.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-border/50 bg-card p-5 shadow-[var(--shadow-card)]">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 rounded-2xl border border-border/50 bg-card p-6 flex items-start gap-4">
          <Users className="h-5 w-5 flex-shrink-0 text-secondary mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Participants may also work with colleagues from their program on a shared project. Teams can use the
            bootcamp as a structure for discussing priorities, gathering local input, testing ideas, and refining
            a resource together.
          </p>
        </div>

        <div className="text-center mt-10">
          <RegisterButton />
        </div>
      </div>
    </section>

    {/* Process */}
    <section id="experience" className="section-spacing bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center content-gap">
          <div className="section-badge-primary">
            <Workflow size={16} />
            How the Bootcamp Works
          </div>
          <h2 className="mb-4">Develop Your Project at a Pace That Fits Your Work</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The bootcamp provides a flexible process for moving from an initial idea to a working resource.
            Participants can adapt each stage based on their role, available time, program context, and project scope.
          </p>
        </div>

        <ol className="relative space-y-8 border-l border-border pl-6 md:pl-10">
          {steps.map(({ icon: Icon, title, body, note }, i) => (
            <li key={title} className="relative">
              <span className="absolute -left-[2.1rem] md:-left-[3.35rem] flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {i + 1}
              </span>
              <div className="rounded-2xl border border-border/50 bg-card p-5">
                <h3 className="flex items-center gap-2 text-base font-semibold mb-2">
                  <Icon className="h-4 w-4 text-primary" />
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed border-l-2 border-primary/30 pl-3">
                  {note}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Includes */}
    <section className="section-spacing bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center content-gap">
          <div className="section-badge-primary">
            <CheckCircle2 size={16} />
            What&rsquo;s Included
          </div>
          <h2>What the Bootcamp Includes</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {includes.slice(0, 2).map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border/50 bg-card p-5">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                <Icon className="h-5 w-5 text-secondary" />
              </span>
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-border/50 bg-card p-5">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
              <Video className="h-5 w-5 text-secondary" />
            </span>
            <h3 className="text-base font-semibold mb-2">Optional Live Cohort Sessions</h3>
            <ul className="text-sm text-muted-foreground space-y-1 mb-3">
              <li>Opening session</li>
              <li>Midpoint collaboration session</li>
              <li>Closing project showcase</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Session times will be selected through a Doodle poll with registered participants. All sessions
              will be recorded for those unable to attend live.
            </p>
          </div>

          {includes.slice(2).map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border/50 bg-card p-5">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                <Icon className="h-5 w-5 text-secondary" />
              </span>
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Explore */}
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="section-badge-primary">
          <Sparkles size={16} />
          What Participants Can Explore
        </div>
        <h2 className="mt-4 mb-6">Practical Uses of AI in Adult Education Administration</h2>
        <p className="text-muted-foreground mb-6">
          Depending on their project and interests, participants may explore how to:
        </p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {explorations.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
              <span className="text-sm text-foreground leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-border/60 bg-muted/40 p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Participants will also consider privacy, accuracy, accessibility, transparency, and human review as
            part of developing resources for their programs. Each participant remains responsible for following
            local policies and deciding which tools, information, and applications are appropriate for their setting.
          </p>
        </div>
      </div>
    </section>

    {/* Audience */}
    <section className="section-spacing bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="section-badge-primary">
          <GraduationCap size={16} />
          Who It&rsquo;s For
        </div>
        <h2 className="mt-4 mb-6">Designed for Adult Education Leaders and Teams</h2>
        <p className="text-muted-foreground mb-6">
          The bootcamp is open to professionals who manage, coordinate, or support adult education programs, including:
        </p>
        <div className="flex flex-wrap gap-2">
          {audience.map((role) => (
            <span
              key={role}
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-4 py-2 text-sm text-foreground"
            >
              {role}
            </span>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
          COABE membership is not required. No coding or technical background is needed. Participants can begin
          with limited AI experience or use the bootcamp to build on work they have already started.
        </p>

        <div className="mt-10 rounded-2xl border border-border/50 bg-card p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-3">A Flexible Experience for Individuals and Teams</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Participants may complete the bootcamp independently or involve colleagues from their program.
            Working with a team may be especially useful for projects that affect multiple roles, departments, or
            services. Team members can help identify local needs, contribute program knowledge, review drafts,
            test resources, and provide feedback.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Each registered participant receives access to the course, live sessions, coaching, resources, and
            certificate of completion. There is no separate group registration rate.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default BootcampProgram;
