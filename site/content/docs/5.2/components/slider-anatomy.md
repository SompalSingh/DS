---
layout: comps
title: Slider
description: Sliders allow users to make selections from a range of values.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link"  href="../slider/"> Code and Examples</a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../slider-anatomy/">Usage  </a>
  </li>
</ul>

Sliders allow users to view and select a value (or range) from the range along a bar. They’re ideal for adjusting settings such as volume and brightness, or for applying image filters. 

Sliders can use icons on both ends of the bar to represent a numeric or relative scale. The range of values or the nature of the values, such as volume change, can be communicated with icons.

## 1. Slider
 
<div class="grey-box pt-0">
 <div class="sub-heading">1.1. Design</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/slider/slider1.png" class="max-w-auto  mb-40" alt="" />
  <div class="sub-heading">1.2. Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/slider/slider1-a.png" class="max-w-auto  mb-40" alt="" />
</div>


## 2. Best Practice
<div class="mt-24"></div>

- <span class="sp-title">Adjustable</span>Sliders should be used for making selections from a range of values.
- <span class="sp-title">Immediate</span> When interacting with a slider, changes should be reflected back to a user immediately.
- <span class="sp-title">Accessible</span> Sliders should present the full range of choices that are available to a user.

## 3. Content guidelines
<div class="mt-24"></div>

- <span class="sp-title">Editable numeric values</span> <p>Editable numeric values allow users to set the exact value of a slider.</p> Upon pressing the slider thumb or the value indicator text field, the input becomes editable for text entry. Upon entry, the thumb position is updated immediately to match any change in value. Note that editable values are not part of the component’s default behavior, but is a feature you can develop. Our usability research supports that this feature can make sliders easier to use in some cases.
- <span class="sp-title">Slider can contain the following elements</span> 
<strong>Track :</strong><br> The track shows the range that is available for a user to select from. For left-to-right (LTR) languages, the smallest value appears on the far left end of the track and the largest value is on the far right. For right-to-left (RTL) languages this orientation is reversed.<br><br><strong>Thumb :</strong><br> The thumb is a position indicator that can be moved along the track, displaying the selected value of its position.<br><br><strong>Value label (optional):</strong><br>  A value label displays the specific numeric value that corresponds with the thumb’s placement.<br><br><strong>Tick mark (optional):</strong><br> Tick marks along a track represent predetermined values that the user can move the slider to.

## 4. Accessibility
<div class="mt-24"></div>

- <span class="sp-title">Mouse</span>Users can trigger a value change by clicking anywhere on the horizontal track. Users can also drag the slider handle. Either method repositions the slider and automatically updates the value in the text input.