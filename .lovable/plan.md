

# Update Portfolio Content

## Overview

Content-only updates to the portfolio data from the approved plan. No UI/UX changes needed -- just reorganizing and editing project entries across the four service categories.

---

## Changes by Category

### 1. Professional Development Cohorts

| Action | Project | Detail |
|--------|---------|--------|
| Keep | CLP National Professional Learning Portfolio | No changes |
| Remove | Google Applied Digital Skills National Trainer | Per request |
| Keep | Statewide Staff Digital Skills Training | No changes |
| Edit | Cohort-Based AI Professional Learning | Remove "Cohort-Based" from title, reword to avoid "cohorts" -- rename to "AI Professional Learning Series" |
| Move OUT | Digital Literacy Curriculum | Move to Curriculum Development |
| Keep | Digital Literacy Train-the-Trainer Toolkit | Remove "Texas" from title, keep rest |

**Final list (4 items):**
1. CLP National Professional Learning Portfolio
2. Statewide Staff Digital Skills Training
3. AI Professional Learning Series
4. Digital Literacy Train-the-Trainer Toolkit

### 2. Project Management

| Action | Project | Detail |
|--------|---------|--------|
| Edit | ISTE National Digital Skills Initiative | Change "Directed" to "Coordinated" |
| Keep | Data Infrastructure and Compliance Systems | No changes |
| Keep | OTAN Digital Learning Guidance Update | No changes |
| Keep | National TA Podcast and Content Operations | No changes |
| Remove | Bayou Treme Incubator | Per request |
| Move IN | Louisiana's First Fully Remote Adult Ed Program | From Curriculum |
| Move IN | Google Workspace Integration | From Curriculum |
| Move IN | Micro-Credentialing and Digital Credential Systems | From Curriculum |

**Final list (7 items):**
1. ISTE National Digital Skills Initiative (with "Coordinated")
2. Data Infrastructure and Compliance Systems
3. OTAN Digital Learning Guidance Update
4. National TA Podcast and Content Operations
5. Louisiana's First Fully Remote Adult Education Program
6. Google Workspace Integration
7. Micro-Credentialing and Digital Credential Systems

### 3. Keynotes and Workshops

| Action | Project | Detail |
|--------|---------|--------|
| Keep | Arizona Teachers N Technology Day | No changes |
| Keep | North Carolina CCR Professional Development Days | No changes |
| Edit | National and Regional Course Cohorts | Add California to state list |

**Final list (3 items):** unchanged count, just add California to cohorts description.

### 4. Curriculum Development and Instructional Design

| Action | Project | Detail |
|--------|---------|--------|
| Move OUT | Louisiana Remote Program | To Project Management |
| Move OUT | Google Workspace Integration | To Project Management |
| Edit | SkillRise MLE Skills Platform | Change from "platform" to "interactive, mobile-friendly story" |
| Move OUT | Micro-Credentialing | To Project Management |
| Move IN | Digital Literacy Curriculum | From PD Cohorts |
| Keep | SkillRise Digital Skills Framework | No changes |
| Keep | Goodwill Industries International Toolkits | No changes |

**Final list (4 items):**
1. SkillRise Digital Skills Framework
2. SkillRise MLE Interactive Skills Story (reworded)
3. Goodwill Industries International Toolkits
4. Digital Literacy Curriculum (moved from PD)

---

## Technical Details

All changes are to the `portfolioItems` data object in `src/components/Services.tsx`. The portfolio dialog UI, button placement, and animations remain exactly as previously approved.

### Updated Portfolio Data

```ts
const portfolioItems: Record<string, { title: string; description: string }[]> = {
  'professional-development': [
    {
      title: 'CLP National Professional Learning Portfolio',
      description: 'Designed and delivered professional learning to 3,000+ educators across 100+ organizations, earning 4.9/5 satisfaction ratings.'
    },
    {
      title: 'Statewide Staff Digital Skills Training',
      description: 'Built modular curricula and facilitator guides for a state agency, achieving 100% completion among participating staff.'
    },
    {
      title: 'AI Professional Learning Series',
      description: 'Designed national AI-focused professional learning translating emerging technologies into applied practice for adult educators and workforce systems.'
    },
    {
      title: 'Digital Literacy Train-the-Trainer Toolkit',
      description: 'Built a comprehensive toolkit enabling statewide implementation across six content subareas with pacing guides, slide decks, and facilitator scripts.'
    }
  ],
  'project-management': [
    {
      title: '$2M+ National Digital Skills Initiative (ISTE)',
      description: 'Coordinated cross-functional teams producing national frameworks, curricula, and tools adopted by 40+ organizations. Improved course completion by ~40%.'
    },
    {
      title: 'Data Infrastructure and Compliance Systems',
      description: 'Managed 24+ monthly reporting workflows tied to $3.5M+ in WIOA funding. Built dashboards that reduced attrition 10-25%.'
    },
    {
      title: 'OTAN Digital Learning Guidance Update',
      description: 'Led revision of statewide Digital Learning Guidance, synthesizing field input, research, and policy into a practical framework.'
    },
    {
      title: 'National TA Podcast and Content Operations',
      description: 'Managed multi-stakeholder production of three podcast seasons and multi-format TA resources with structured editorial systems.'
    },
    {
      title: "Louisiana's First Fully Remote Adult Education Program",
      description: "Designed the state's first remote model, growing enrollment from ~30 to 5,000+ learners across 15 colleges. Earned COABE State Innovation of the Year."
    },
    {
      title: 'Google Workspace Integration',
      description: 'Led integration into SIS platforms serving 15,000+ students across 15+ programs, increasing digital access and instructional consistency.'
    },
    {
      title: 'Micro-Credentialing and Digital Credential Systems',
      description: 'Designed badging systems with reflection workflows and dashboards, improving skill articulation and program transparency.'
    }
  ],
  'keynotes': [
    {
      title: 'Arizona Teachers N Technology Day',
      description: 'Keynote presentation on digital learning and technology integration for adult educators.'
    },
    {
      title: 'North Carolina CCR Professional Development Days',
      description: 'Conference sessions connecting research to practice for college and career readiness.'
    },
    {
      title: 'National and Regional Course Cohorts',
      description: 'Delivered multi-week cohorts across states including California, Kentucky, Rhode Island, Texas, and Maine on topics from AI to digital literacy to math instruction.'
    }
  ],
  'curriculum': [
    {
      title: 'SkillRise Digital Skills Framework',
      description: 'Designed a competency model translating workforce expectations into structured digital skills, adopted as a shared language across programs.'
    },
    {
      title: 'SkillRise MLE Interactive Skills Story',
      description: 'Led design and deployment of an interactive, mobile-friendly story for skill exploration and alignment to workforce pathways.'
    },
    {
      title: 'Goodwill Industries International Toolkits',
      description: 'Designed two national toolkits: a skills-based hiring course and a technical training development guide, scaled across a national network.'
    },
    {
      title: 'Digital Literacy Curriculum',
      description: 'Co-designed a digital literacy curriculum with campus libraries, serving 500+ learners and contributing to ~40% increases in persistence.'
    }
  ]
};
```

