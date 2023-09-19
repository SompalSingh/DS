---
layout: comps
title: Toast Notification
description: A toast provides simple feedback about an operation in a small popup. It only fills the amount of space required for the message and the current activity remains visible and interactive. Toasts automatically disappear after a timeout.
group: components
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link" href="../toasts/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link active" href="../toasts-anatomy/">Guidelines  </a>
  </li>
</ul>

Toasts display brief, temporary notifications. They are noticeable but do not disrupt the user experience and do not require an action to be taken. Toasts should only be used for confirmations, simple notifications, and low-priority alerts that do not need to completely interrupt the user experience.

- <span class="sp-title">Icon</span> Indicates the type of notification displayed (e.g. info, success, warning or error).
- <span class="sp-title">Message</span> The message should explain what just happened and what the user needs to perform next. Do not include any unnecessary text. Ideally, the message is no longer than one line. Bold the important information (e.g. the names of relevant objects).
- <span class="sp-title">Action (optional)</span> Show actions on the right for easy access. It is recommended that only one action is shown in each notification. However, the ellipsis icon can be used when more than one actions are available. Clicking on an action should either help the user achieve the goal automatically, or open up a modal window or a different page. After the user clicks on the action, the notification will be dismissed right away.
- <span class="sp-title">Close (optional)</span> The user can dismiss the toast notification by clicking on the close icon.

## 1. Best Practice

It is recommended that Toast Notifications are transient and stay on the screen for eight seconds so that the user has time to read the message without it blocking information on the page for an extended amount of time. All Toast Notifications should remain on the screen when the user is hovering over one of them. Ideally, the user can decide what kinds of notifications appear and how long they remain on the screen. The notifications should have a consistent location in each application.

## 2. Accessibility

A toast is a non-modal dialog that appears and disappears in the span of a few seconds. It may also optionally have a small close “X”. Typically, toast messages display one or two-line non-critical messages that do not require user interaction.

## 3. Anatomy

<div class="grey-box pt-0">
  <div class="sub-heading">3.1. Toast Notification without Icon</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/toast/withoutIcon.svg" class="w-100 mb-20" alt="" />
</div>
<div class="grey-box pt-0">
  <div class="sub-heading">3.2. Toast Notification with Icon</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/toast/withIcon.svg" class="w-100 mb-20" alt="" />
</div>
<div class="grey-box pt-0">
  <div class="sub-heading">3.3. Toast with Action</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/toast/withAction.svg" class="w-100 mb-20" alt="" />
</div>
<div class="grey-box pt-0">
  <div class="sub-heading">3.4. Toast with Heading, Icon & Actions</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/toast/withIconAction.svg" class="w-100 mb-20" alt="" />
</div>
