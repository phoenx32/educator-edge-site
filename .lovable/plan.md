

# Fix Image Vertical Alignment

## The Issue

Looking at your reference image, the image's top edge should align with the title "Professional Development Cohorts". Currently, the layout is:

```
[Title spans full width                    ]
[Description text...    ] [Image           ]
[• Bullet points        ] [                ]
```

But it should be:

```
[Title text...          ] [Image           ]
[Description text...    ] [                ]
[• Bullet points        ] [                ]
```

## Solution

Move the title inside the left text column so the entire left column (title + description + bullets) sits alongside the image. This way the top of the image aligns with the top of the title.

## Technical Changes

**File:** `src/components/Services.tsx` (lines 62-95)

Update `ServiceContent` layout structure:

```tsx
const ServiceContent = ({ service }: { service: typeof services[0] }) => (
  <div className="h-full">
    {/* Two-column layout: Text left (including title), Image right aligned to top */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* Text content - Title is now INSIDE this column */}
      <div className="flex-1">
        {/* Title moved here */}
        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
          <service.icon className="w-6 h-6 text-primary flex-shrink-0" />
          {service.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
        
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-foreground/80">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Image - Now aligns with title at top */}
      <div className="md:w-80 flex-shrink-0 self-start order-first md:order-last">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 md:h-72 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  </div>
);
```

## Key Change

The title `<h3>` element moves from outside the flex container to inside the left `<div className="flex-1">` column. This ensures:

1. Title and image tops align on the same horizontal line
2. Image height won't extend past the bullet list
3. Layout matches the reference image exactly

