import {
  CalendarDays, Clock, Globe, Video, Award, CheckCircle2, CreditCard, FileText, Info,
} from 'lucide-react';
import { RegisterButton } from './RegisterButton';

const timeline = [
  { date: 'Week of October 5', body: 'Course opens, project selection, introductory activities, and optional live opening session.' },
  { date: 'October', body: 'Participants define their project, explore relevant AI applications, and begin developing an initial version.' },
  { date: 'Early to Mid-November', body: 'Participants continue building, gather local input, and take part in the optional midpoint collaboration session.' },
  { date: 'Late November', body: 'Participants revise their projects based on feedback, coaching, and local testing.' },
  { date: 'Week of November 30', body: 'The bootcamp concludes with an optional live project showcase and planning for continued use or improvement.' },
];

const formatItems = [
  'Self-paced project work',
  'Optional live sessions',
  'Recorded sessions',
  'Individual coaching',
  'Personalized feedback',
  'Practical resources and examples',
  'Optional peer collaboration',
];

const includes = [
  'Access to the full ten-week online bootcamp',
  'Three optional live cohort sessions',
  'Recordings of all live sessions',
  'Administrator Spotlight Talks',
  'Individual coaching',
  'Personalized project feedback',
  'Project templates and planning resources',
  'Examples and demonstrations using free AI tools',
  'Opportunities for peer collaboration',
  'Certificate of completion',
];

const BootcampLogistics = () => (
  <>
    {/* Schedule */}
    <section id="schedule" className="section-spacing bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center content-gap">
          <div className="section-badge-primary">
            <CalendarDays size={16} />
            Schedule
          </div>
          <h2>Bootcamp Timeline</h2>
        </div>

        <ol className="relative border-l border-border pl-6 space-y-6">
          {timeline.map(({ date, body }) => (
            <li key={date} className="relative">
              <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <h3 className="text-base font-semibold">{date}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-2xl border border-border/60 bg-muted/40 p-5 flex items-start gap-3">
          <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            The three optional live sessions will be scheduled after registration through a Doodle poll.
            Participants will help identify times that work best for the group. All live sessions will be recorded.
          </p>
        </div>

        <div className="text-center mt-10">
          <RegisterButton />
        </div>
      </div>
    </section>

    {/* Time & format */}
    <section className="section-spacing bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center content-gap">
          <div className="section-badge-primary">
            <Clock size={16} />
            Time Commitment and Format
          </div>
          <h2>Built to Fit Alongside Your Work</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-border/50 bg-card p-5">
            <CalendarDays className="h-5 w-5 text-primary mb-3" />
            <h3 className="text-base font-semibold mb-2">Duration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ten weeks, beginning the week of October 5 and ending the week of November 30, 2026.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-5">
            <Clock className="h-5 w-5 text-primary mb-3" />
            <h3 className="text-base font-semibold mb-2">Weekly Time</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Approximately one hour per week. Time may vary based on the project each participant chooses and how
              extensively they involve colleagues or test their work.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-5">
            <Globe className="h-5 w-5 text-primary mb-3" />
            <h3 className="text-base font-semibold mb-2">Format</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {formatItems.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border/60 bg-card p-5 flex items-start gap-3">
          <Video className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            All tools introduced during the bootcamp will have free versions available. Some tools may offer
            additional features through paid plans, but participants will not be required to purchase a paid AI
            subscription to complete the bootcamp.
          </p>
        </div>
      </div>
    </section>

    {/* Cost */}
    <section id="cost" className="section-spacing bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center content-gap">
          <div className="section-badge-primary">
            <CreditCard size={16} />
            Registration
          </div>
          <h2>$350 per Participant</h2>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-elegant)] p-6 md:p-8">
          <h3 className="text-base font-semibold mb-4">Registration includes:</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <span className="text-sm text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4 border-t border-border/60 pt-6">
            <div className="flex items-start gap-3">
              <CreditCard className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">Payment options</p>
                <p className="text-sm text-muted-foreground">Credit card or purchase order. There are no group discounts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">Registration policy</p>
                <p className="text-sm text-muted-foreground">Registrations are final. Refunds and cancellations are not available.</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <RegisterButton className="w-full sm:w-auto" />
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border/50 bg-muted/40 p-6">
          <h3 className="flex items-center gap-2 text-base font-semibold mb-3">
            <Award className="h-4 w-4 text-primary" />
            Certificate of Completion
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Participants who complete the bootcamp requirements will receive a certificate of completion from
            COABE and Community Learning Partners. Requirements include:
          </p>
          <ul className="text-sm text-muted-foreground space-y-2">
            {[
              'Completing the core course activities',
              'Developing a project connected to a local program priority',
              'Submitting a final project summary or reflection',
            ].map((r) => (
              <li key={r} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Attendance at the optional live sessions is not required to receive the certificate.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default BootcampLogistics;
