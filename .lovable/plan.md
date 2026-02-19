

# Update Portfolio Dialog: Icons, Links, Content Edits, and Navigation Tabs

## Overview

Several updates to the portfolio dialog system: add icons to each portfolio card title, add links where available, fix content issues, remove an item, and add navigation tabs inside the dialog so users can browse across service categories without closing and reopening.

---

## Content Changes

| Category | Change |
|----------|--------|
| Professional Development | Rename "CLP National Professional Learning Portfolio" to "National Professional Learning Portfolio" |
| Project Management | Remove "(ISTE)" from the digital skills initiative title |
| Project Management | Add link to OTAN DLG: https://otan.us/Resources/DigitalLearningGuidance |
| Curriculum | Add link to SkillRise Digital Skills Framework: https://skillrise.org/digital-skills |
| Curriculum | Add link to SkillRise MLE: https://mle.skillrise.org/skills |
| Keynotes | Remove "National and Regional Course Cohorts" item entirely (leaves 2 items) |

## Data Structure Update

Add an optional `link` field to the portfolio item type:

```ts
Record<string, { title: string; description: string; link?: string }[]>
```

## Icons for Each Portfolio Card

Add a relevant Lucide icon to each card title to give visual distinction. Suggested mapping:

- **Professional Development**
  - National Professional Learning Portfolio: `GraduationCap`
  - Statewide Staff Digital Skills Training: `Monitor`
  - AI Professional Learning Series: `Sparkles`
  - Digital Literacy Train-the-Trainer Toolkit: `BookOpen`

- **Project Management**
  - $2M+ National Digital Skills Initiative: `Target`
  - Data Infrastructure and Compliance Systems: `BarChart3`
  - OTAN Digital Learning Guidance Update: `FileText` (has link)
  - National TA Podcast and Content Operations: `Podcast`
  - Louisiana's First Fully Remote Adult Ed: `Rocket`
  - Google Workspace Integration: `Laptop`
  - Micro-Credentialing and Digital Credentials: `Award`

- **Keynotes**
  - Arizona Teachers N Technology Day: `Presentation`
  - North Carolina CCR PD Days: `Users`

- **Curriculum**
  - SkillRise Digital Skills Framework: `Layers` (has link)
  - SkillRise MLE Interactive Skills Story: `Smartphone` (has link)
  - Goodwill Industries International Toolkits: `Wrench`
  - Digital Literacy Curriculum: `BookOpen`

## Link Styling

For cards that have a link, render a subtle "View Resource" link below the description using the `ExternalLink` icon. Styled as a small text link (`text-primary text-xs`) so it doesn't compete with the card content but is clearly interactive. Cards without links simply don't show this element.

## Navigation Tabs Inside Dialog

Replace the current single-category dialog with a tabbed dialog. When a user clicks "View Portfolio" on any service card, the dialog opens with that service's tab pre-selected, but all four tabs are accessible via icon-only triggers at the top of the dialog.

This means:
- The `PortfolioDialog` component receives the initial `serviceId` as the default tab
- Inside `DialogContent`, a `Tabs` component with a horizontal `TabsList` shows all 4 service icons
- Switching tabs shows different category content without closing the dialog
- Dialog title updates to match the selected tab

---

## Technical Implementation

### File: `src/components/Services.tsx`

### 1. Update imports

Add new Lucide icons: `GraduationCap`, `Monitor`, `BookOpen`, `Target`, `BarChart3`, `FileText`, `Podcast`, `Rocket`, `Laptop`, `Award`, `Layers`, `Wrench`, `Smartphone`, `ExternalLink`

### 2. Update portfolio data type and content

```ts
const portfolioItems: Record<string, { 
  title: string; 
  description: string; 
  icon: LucideIcon;
  link?: string 
}[]> = { ... }
```

With all content edits applied (renamed titles, removed items, added links and icons).

### 3. Rewrite PortfolioDialog component

```tsx
const PortfolioDialog = ({ serviceId, serviceTitle }: { ... }) => {
  const [activeTab, setActiveTab] = useState(serviceId);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <FolderOpen className="w-4 h-4" />
          View Portfolio
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Portfolio</DialogTitle>
          <DialogDescription>Selected projects and outcomes</DialogDescription>
        </DialogHeader>
        
        {/* Navigation tabs inside dialog */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 ...">
            {services.map(s => (
              <TabsTrigger value={s.id}>
                <s.icon /> <span className="hidden sm:inline">{s.shortTitle}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(portfolioItems).map(([key, items]) => (
            <TabsContent value={key}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map(item => (
                  <div className="p-4 rounded-xl border ...">
                    <h4 className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-primary" />
                      {item.title}
                    </h4>
                    <p>{item.description}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" className="text-xs text-primary ...">
                        View Resource <ExternalLink />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
```

Note: Since `PortfolioDialog` is defined inside the `Services` component, it has access to the `services` array for rendering the tab triggers.

### 4. Reset active tab on dialog open

Use the `onOpenChange` callback on `Dialog` to reset `activeTab` back to the originating `serviceId` each time the dialog opens, so users always land on the relevant tab first.

