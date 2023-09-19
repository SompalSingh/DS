---
layout: comps
title: Accordion
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link"  href="../accordion/"> Code and Examples</a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../accordion-anatomy/">Guidelines  </a>
  </li>
</ul>

- To organize related information.
- To shorten pages and reduce scrolling when content is not crucial to read in full.
- When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel.

## 1. Best Practices
<div class="mt-24"></div>

- <span class="sp-title">Alignment</span> By default the chevron icon is placed on the end side of the header. This allows for the title on the start side to align with other type elements in the layout, which is the preferred alignment scenario. 

- <span class="sp-title">Placement</span> Accordions can be placed with main page content or placed inside of a container such as a side panel or tile. 

- <span class="sp-title">Scrolling content</span> When the accordion content is longer than the viewport the whole accordion should vertically scroll. Content should not scroll inside of an individual panel. Content should never scroll horizontally in an accordion. 

- <span class="sp-title">States</span> The accordion component has two main states: collapsed and expanded. The chevron icon at the end of the accordion indicates which state the accordion is in. The chevron points down to indicate collapsed and up to indicate expanded. Accordions begin by default in the collapsed state with all content panels closed. Starting in a collapsed state gives the user a high level overview of the available information.


## 2. Accessibility
<div class="mt-24"></div>

- Make sure the label and the icon are both buttons and that they both open the same thing (e.g., your label shouldn’t link you to a page, and your icon opens the accordion). One exception may be with filter accordions where the label may be part of the checkbox.
- Is the closed state of the accordion more than 44px high? (For touch areas) 
- Do the colors meet the AAA compliance standards?
- Does your accordion have focus states.
- Make sure that the accordion works on a tabbing map.
  
## 3. Box Layout
 
<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/accordion/accordion1.png" width="800" class="max-w-100 mb-40" alt="" />
</div>

## 4. Line Layout
 
<div class="grey-box pt-0">
 
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/accordion/accordion2.png" width="800" class="max-w-100 mb-40" alt="" />
</div>

## 5. Single Action
 
<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/accordion/accordion3.png" width="800" class="max-w-100 mb-40" alt="" />
</div>

## 6. Multiple Action
 
<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/accordion/accordion4.png" width="800" class="max-w-100 mb-40" alt="" />
</div>


