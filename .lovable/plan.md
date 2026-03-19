

# Fix Uneven Label Spacing in Design Cycle

## Problem
A uniform radial offset (44px) doesn't produce visually even spacing because labels at different angular positions have different visual relationships to their icons. Side-positioned labels (Observe at 120°, Iterate at 300°, Revise at 240°) appear closer to their icons than top/bottom ones (Build, Reflect) because the text box center doesn't account for the directional relationship.

## Solution
Use per-step label offsets tuned to each position, pushing side labels further out and keeping top/bottom labels closer. This matches the reference image where all labels appear equally distanced from their icons.

## Changes in `src/components/DesignCycle.tsx`

Replace the uniform `labelOffset = 44` with per-step offsets in the `cycleSteps` data:

```tsx
const cycleSteps = [
  { icon: Hammer, label: 'Build', angle: 0, labelOffset: 42 },       // top — fine
  { icon: FlaskConical, label: 'Try', angle: 60, labelOffset: 48 },   // upper-right — good baseline
  { icon: MessageCircle, label: 'Observe', angle: 120, labelOffset: 52 }, // lower-right — push out
  { icon: Lightbulb, label: 'Reflect', angle: 180, labelOffset: 42 },  // bottom — fine
  { icon: Pencil, label: 'Revise', angle: 240, labelOffset: 52 },      // lower-left — push out to match Try
  { icon: RefreshCw, label: 'Iterate', angle: 300, labelOffset: 50 },  // upper-left — push out
];
```

Then use `step.labelOffset` instead of the constant:
```tsx
const labelPos = getPosition(step.angle, outerRadius + step.labelOffset);
```

One data array change + one line update. Values may need minor tuning after visual review.

