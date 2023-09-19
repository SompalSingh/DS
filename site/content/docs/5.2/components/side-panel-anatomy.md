---
layout: comps
title: Side Panel
description: Side Panels are containers that anchor to the left or right side of the screen.
group: components
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link" href="../side-panel/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link active" href="../side-panel-anatomy/">Guidelines  </a>
  </li>
</ul>

Although the elements within a Side Panel are highly configurable to support various use cases, they are commonly used in the following ways:

- <span class="sp-title">Local Page Navigation</span> Provides users with a way to navigate within an area of your product.<br>
Typically tied to the main content region.<br>
Often collapsible but not closable, meaning the Panel remains on the page and cannot be dismissed.
- <span class="sp-title">Actionable</span> Lists present content in a way that makes it easy to identify a specific item in a collection and act on it.
- <span class="sp-title">Editing and Displaying Additional Information</span> Ideal for editing specific content within the page or displaying additional information that supports the main content area.<br>
Can be temporary, meaning the Panel may disappear when the associated content on the main page is no longer in focus.
- <span class="sp-title">Panel Overlays</span> When Panels open over an overlay, the user cannot interact with the main page. The overlay helps users focus attention on the contents of the Panel, making it ideal for higher-level navigation and editing or displaying additional information while minimizing distractions.<br>
A Side Panel that opens over an overlay has a close Button but not a collapse. Activating the Button closes the Panel and the Overlay so the user can return focus to the main page.


## 1. Best Practices
<div class="mt-24"></div>

- Side Panels can either push and resize content as it expands within a page or float over page content. See the Expandable pattern (coming soon!) for more detailed information on horizontal animation.
- When the content of the Side Panel exceeds the height of the viewport, overflow behavior such as a scrollbar is introduced. Refer to the Overflow pattern for more information.
- Consider the behavior of Side Panels at different responsive breakpoints and in different use cases. In use cases where the Side Panel is used to edit content within the page, keeping the Side Panel open and resizing the page content may be ideal. For use cases where a Side Panel is not required to remain open, enabling a Side Panel to automatically collapse when it reaches smaller screen sizes will prevent the panel from taking up too much of the screen until the user wants to take action on it.
- When using the Expand/Collapse Button within the Side Panel, use a Tooltip to provide additional affordance that the icon is interactive and to improve accessibility for the Side Panel. When the Side Panel is expanded, tooltip text reads “Collapse” and collapsed, the tooltip reads “Expand.”

## 2. Content guidelines
- Consider screen real estate when multiple Side Panels are present within a page. When multiple Side Panels are open at the same time, it may be overwhelming to users as their page content shrinks.
- When using the Expand / Collapse Button with the Side Panel, provide a Tooltip to label the Icon Button. When the Side Panel is expanded, the Tooltip contains the text “Collapse” and when collapsed, the Tooltip reads “Expand.”


## 3. Accessibility
<div class="mt-24"></div>

- Each Panel requires a unique, human-readable accessible name to allow a screen reader user to perceive and understand how the Panel sits within the context of your page.
- Consider using visually hidden live region announcements to help a screen reader user understand if the Panel is expanded or collapsed when the toggle control is pressed.
- Supplement interactive non-text based icons with custom tooltips to reveal their labels both on mouse hover and keyboard focus.
- All text content must have a minimum contrast ratio of 4.5:1 with its background colour.
- Important non-text content (including individual states) must have a minimum contrast ratio of 3:1 with their adjacent background.

## Buttons Horizontally Aligned
 
<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/offcanvas/side-p-a.png" width="750" class="max-w-100  mb-40" alt="" />
</div>

## 5 Buttons Vertically Left Aligned
 
<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/offcanvas/side-p-b.png" width="750" class="max-w-100  mb-40" alt="" />
</div>

<!-- ## 4. Small
 
<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/offcanvas/1-a.png" class="max-w-auto  mb-40" alt="" />
</div>

## 5. Medium
 
<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/offcanvas/2-a.png" class="max-w-auto  mb-40" alt="" />
</div>

## 6. Large
 
<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/offcanvas/3-a.png" class="max-w-auto  mb-40" alt="" />
</div> -->

