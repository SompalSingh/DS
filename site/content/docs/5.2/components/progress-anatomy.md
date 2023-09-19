---
layout: comps
title: Progress
description: A progress bar is a graphical control element used to visualize the progression of an extended computer operation
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link"  href="../progress/"> Code and Examples</a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../progress-anatomy/">Guidelines  </a>
  </li>
</ul>

A progress bar shows the completion status of an ongoing task. It also indicates whether a user can leave the current view. 

Use a progress bar when you can determine the percentage of the completed task at any time. This can include uploading files or upgrading an application.

## 1. Best Practices
<div class="mt-24"></div>

- <span class="sp-title">Inform your users</span> hy they need to wait? What’s happening? Informing your users will make your users wait or else they may assume it as a bug and move onto other websites. Include a label with a progress bar to add context. Don’t use vague terms like ‘Loading’ and ‘Processing’. Use simple, meaningful sentences that inform users.

- <span class="sp-title">Make it a part of your overall design</span> our progress bar must look distinctive. But nothing stops you from give it a flavor of your website or app. Use same colors or similar shades of it. If possible use your logo, mascot and branding style to design it

- <span class="sp-title">Keep it interesting</span> Remember waiting is boring. Don’t make it more painful with bland progress bars. Make it interesting. Use animations to make it playful. Bring in some activity that makes users enjoy while waiting for his task to complete. 

- <span class="sp-title">Give your progress bar good visibility</span> Use a progress bar in a view, not a window frame. Progress bars shouldn’t be used within portions of window frames, such as in toolbars and status bars. For progress bars displaying content downloading like refreshing timeline or news feed, put it at the top if the content is updating from the top and at the bottom if content is updating at the bottom.

- <span class="sp-title">Allow people to pause or cancel, if possible</span> sers like control. Give them control to pause or stop the process midway if they wish to. If pausing or stopping the process has any side effects like loss of previously filled data then warn them with a message.

- <span class="sp-title">Keep your progress bar moving or spinning</span> Keep your progress bar moving so users know something is happening. Making it stationary will indicate stalled process. And people like movements even if it is at small pace.

- <span class="sp-title">Make it look faster</span> hile it will take its scheduled time to complete the activity, you can make it look faster. Use distractions to make your progress bar speedier. A bouncing spinning wheel. A linear bar that starts slowly but ends fast- all help to create perceptions of speed. Use some gamification so that make your users enjoy their wait

- <span class="sp-title">Don’t misreport progress</span> Don’t report inaccurate progress information just to stop your users from leaving your website. An inaccurate progress indicator will mislead users causing further annoyance.



## 2. Content guidelines
<div class="mt-24"></div>

- Use helper text with a progress bar if the process is complex or has a long wait time. This lets users know what sub-processes are taking place.
- Use a success state when the actions required to continue have been fulfilled

## 3. Accessibility
<div class="mt-24"></div>

- <span class="sp-title">Keyboard interaction</span> The progress bar itself is not keyboard operable; however, when a progress bar is active, it may temporarily disable any dependent components. For example, if a progress bar is being used to upload a file, the Upload button is disabled until the progress bar state changes to either error or completed.

- <span class="sp-title">Labelling and states</span> The label above the progress bar as well as the optional helper text below it are surfaced to assistive technologies. Changes to the helper text are provided programmatically as status updates.
  
## 4. With label
 
<div class="grey-box pt-0">
    <div class="sub-heading">Anatomy</div>
     <img src="/docs/5.2/assets/brand/custom/anatomy-images/progress/prog-1.png" width="700" class="max-w-100  mb-40" alt="" />
</div>

## 5. Multiple Step
 
<div class="grey-box pt-0">
    <div class="sub-heading">Anatomy</div>
     <img src="/docs/5.2/assets/brand/custom/anatomy-images/progress/prog-2.png" width="700" class="max-w-100  mb-40" alt="" />
</div>

## 6. Striped with label
 
<div class="grey-box pt-0">
    <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/progress/prog-3.png" width="700" class="max-w-100  mb-40" alt="" />
</div>

<!-- ## 4. Process Bar
 
<div class="grey-box pt-0">
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/progress/progress-bar.svg" class="w-100 mb-40" alt="" />
</div> -->


