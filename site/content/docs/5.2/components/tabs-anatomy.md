---
layout: comps
title: Tabs
description: Tabs are used to organize related content. They allow the user to navigate between groups of information that appear within the same context.
group: components
aliases: "/docs/5.2/components/navs/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link" href="../tabs/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link active" href="../tabs-anatomy/">Guidelines  </a>
  </li>
</ul>

<strong class="font-700 font-10">When to use</strong>

Use tabs to group related information into different categories, helping to reduce cognitive load.

Tabs can be used to organize content such as forms, settings, and dashboards so a user does not have to navigate away from their workflow to complete their task.

<strong class="font-700 font-10">When not to use</strong>

Use tabs to group related information into different categories, helping to reduce cognitive load.

Tabs can be used to organize content such as forms, settings, and dashboards so a user does not have to navigate away from their workflow to complete their task.

Tabs should not be used if the user is comparing information in two groups, as this would result in the user having to click back and forth to complete a task.

## 1. Best Practice 

- The tab component consists of two distinct zones: selected and unselected. There are always at least two tabs and one is selected by default. Icons are optional.

- Tab labels provide clear and concise explanations of the content within. Each tab’s content is independently categorized and mutually exclusive of the content of other tabs.

## 2. Content guidelines

<div class="do-dont do">
    <div class="box">
    <img src="/docs/5.2/assets/brand/custom/do.svg" class="w-100" alt="" />
    </div>
    <div class="content">
        <strong>Do’s</strong>
        <ul>
            <li>
                <p>Tab labels can include icons and text. Text labels should be short.</p>
            </li>
            <li>
                <p>Present tabs as a single row above their associated content.</p>
            </li>
            <li>
                <p>Although label text can wrap to a second line, scrollable tabs confine text to a single row.</p>
            </li>
            <li>
                <p>Tabs can use icons to communicate content.</p>
            </li>
            <li>
                <p>Use caution when only representing tab content with icons, as an icon’s meaning may not be clear on every topic.</p>
            </li>
            <li>
                <p>Use caution when placing swipeable content in UIs that have tabs, as users could easily swipe the wrong component.</p>
            </li>
            <li>
                <p>Avoid nesting a tab within another tab.</p>
            </li>
            <li>
                <p>On mobile and desktop, offset the first tab on the left to signal that tabs are scrollable.</p>
            </li>
            <li>
                <p>On desktop, provide a visual indicator that more tabs are available off screen.</p>
            </li>
        </ul>
    </div>
</div>
<div class="do-dont dont">
    <div class="box">
    <img src="/docs/5.2/assets/brand/custom/dont.svg" class="w-100" alt="" />
    </div>
    <div class="content">
        <strong>Dont’s</strong>
        <ul>
            <li>
                <p>Don’t use tabs to move through sequential content that needs to be read in a particular order.</p>
            </li>
            <li>
                <p>Avoid using tabs for comparing content across multiple tabs, such as different sizes of the same item.</p>
            </li>
            <li>
                <p>Don’t resize text labels to fit them onto a single line. If labels are too long, wrap text to a second line or use scrollable tabs.</p>
            </li>
            <li>
                <p>Don’t truncate labels unless required, as truncated text can impede comprehension.</p>
            </li>
            <li>
                <p>Don’t mix tabs that contain only text, with tabs that contain only icons. Use either all text labels, all icon labels, or both, across all labels.</p>
            </li>
            <li>
                <p>Don’t use tabs with both icons and text labels on only some tabs, but not others.</p>
            </li>
            <li>
                <p>Avoid placing swipeable items in the content area of a UI that has tabs, as the user may mistakenly swipe the wrong component.</p>
            </li>
            <li>
                <p>Don’t scroll tabs behind a top app bar. When tabs are attached to a component, they should appear and move as a single unit.</p>
            </li>
            <li>
                <p>Don’t place tabs below one another.</p>
            </li>
            <li>
                <p>Don’t use tabs with short top app bars, or top app bars that transition to short top app bars on scroll.</p>
            </li>
            <li>
                <p>Don’t attach tabs to bottom navigation as it can cause confusion about what action or tab controls which content.</p>
            </li>
            <li>
                <p>Avoid using inconsistent padding on each tab.</p>
            </li>
        </ul>
    </div>
</div>

## 3. Accessibility

<strong>Keyboard</strong>

- <strong>Tab key</strong>, we must be able to use the tab to move focus along the tabs

- <strong>Return key</strong>, we must be able to press return when a tab is focused to move to it

- <strong>Space key</strong>, the space key should act like the return key

- <strong>Home key</strong>, we must select the first tab in the tablist

- <strong>End key</strong>, we must select the final tab in the tablist

- <strong>Arrow keys</strong>, we must be able to move to the next or previous tab when pressing the right or left key but only when the focus is within our tablist

<strong>Mouse</strong>

- <strong>Clicking</strong> on a tab should set that tab as active

- <strong>Hovering</strong> should give some indication of the target



## 4. Primary Tabs 

<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/tab/tab-prim-ana.svg" class="max-w-auto  mb-40" alt="" />
</div>

## 5. Secondary Tabs

<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/tab/tab-sec-ana.svg" class="max-w-auto  mb-40" alt="" />
</div>

