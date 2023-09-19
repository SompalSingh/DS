---
layout: comps
title: Modal
description: A modal is a web page element that displays in front of and deactivates all other page content. To return to the main content, the user must engage with the modal by completing an action or by closing it.
group: components
toc: true
---


<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link " href="../modal/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link active" href="../modal-anatomy/">Guidelines  </a>
  </li>
</ul>

<div class="mt-24"></div>

- Modal windows are effective any time you need users to see or do something specific. They typically (but not always) appear after some trigger event like a button click, scroll event, or some exit intent. The most common uses of modals in web design include warnings, alerts, confirmations, forms, media displays, and multi-step processes.
- <span class="sp-title">Warnings, Alerts, and Confirmations</span> For those times when a user really should see something, modal windows are excellent at directing attention. A modal can contain an alert about a significant event or error, a warning about the consequences of some action, or confirmation of a completed process. Utilize modals only for the most critical messages. For example, errors that actively prevent a desired action from being completed (e.g., “We could not complete your request due to a server error. Please refresh the page and try again.”) and actions that cannot be reverted (e.g., “Are you sure you want to continue?”) are both sound reasons for a modal. A “cookie policy” alert, not so much — save this for a modeless notification window or bar.
- <span class="sp-title">Forms</span> If a process on your website requires user-submitted information, you can place a form inside a modal window. You’ll see this often as an alternative to a dedicated page for login/signup, or one that promotes an email newsletter, content offer, or discount code. Usually, the trigger for this type of modal is a CTA click or other button click, but it’s also common for sites to throw a modal after a scroll event. It’s up to you whether you deem this trigger too distracting, but know that some visitors will be bothered by this if they deem it irrelevant.
- <span class="sp-title">Media Displays</span> Media often supports the main content of a webpage and sets the tone for the browsing experience. However, if an image gallery or video serves as a focal point on your site, a modal window lets visitors view it in isolation without needing to open it in another page. An additional benefit of using modals to display media is space efficiency. Media tends to occupy valuable page space, but making a gallery or video player accessible with a smaller thumbnail saves valuable real estate.
- <span class="sp-title">Multi-Step Processes</span> For lengthier, more energy-intensive actions on your website — creating a user profile, signing up for a service, or completing a tool setup — consider separating each step into its own modal window so the experience feels more manageable.


 ## 1. Best Practice
<div class="mt-24"></div>

- Use modals intentionally and infrequently.
- Deactivate all background elements.
- Write clear instructions and button text.
- Give users an out.
- Size your modal window appropriately.
- Introduce and close modal with a fade.
- Limit modals on mobile.

## 2. Content guidelines
<div class="mt-24"></div>

- Modal dialog titles should use sentence case and prioritize keywords.
- Modal dialog body copy should contain only valuable and relevant information that is both helpful and concise.
- Label elements with action verbs that indicate what happens when the element is selected. For example, label a select menu with Choose a user instead of Users.
- The main action (a primary button) should reflect the modal title.


## 3. Accessibility
<div class="mt-24"></div>

- Every clickable action in the modal should also be possible with the keyboard. The escape key should close the window, and the tab and enter keys can be used to select options.
- All other elements outside the modal should not be accessible by the keyboard as long as the modal is in view.
- The modal window should visually contrast with the background page.
- Transitions into and out of the modal should be smooth and non-flashy.
- Any images, video, or other media items should include descriptive text
- All text and media can be interpreted by screen readers and other assistive technologies
  
## 4. Modal Small
<div class="grey-box text-center pl-0">
    <div class="sub-heading">Anatomy</div>
    <img src="/docs/5.2/assets/brand/custom/anatomy-images/modal/modal-s-ana.svg" class="max-w-100 mb-40" alt="" />
 </div>

## 5. Medium Modal
<div class="grey-box text-center pl-0">
    <div class="sub-heading">Anatomy</div>
    <img src="/docs/5.2/assets/brand/custom/anatomy-images/modal/modal-m-ana.svg" class="max-w-100 mb-40" alt="" />
 </div>

## 6. Modal Large 
<div class="grey-box text-center pl-0">
    <div class="sub-heading">Anatomy</div>
    <img src="/docs/5.2/assets/brand/custom/anatomy-images/modal/modal-l-ana.svg" class="max-w-100 mb-40" alt="" />
 </div>



