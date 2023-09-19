---
layout: comps
title: Table
description: Data tables are used to organize and display data efficiently. The data table component allows for customization with additional functionality, as needed by your product’s users.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link"  href="../tables/"> Code and Examples</a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../tables-anatomy/">Guidelines  </a>
  </li>
</ul>

<!-- Data tables display information in a grid-like format of rows and columns. They organize information in a way that’s easy to scan so that users can look for patterns and develop insights from data.

<strong>Data tables can contain:</strong>
- Interactive components (such as chips, buttons, or menus)
- Non-interactive elements (such as badges)
- Tools to query and manipulate data

<strong>When to use</strong>
- To organize and display data.
- If your user must navigate to a specific piece of data to complete a task.
- Displaying all of a user’s resources.

<strong>When not to use</strong>
- When a more complex display of the data or interactions are required.
- As a replacement for a spreadsheet application. -->

## 1 Best Practices

<div class="mt-24"></div>

- <span class="sp-title">Organized</span> Information should be organized in a meaningful way, such as hierarchy or alphabetization.
- <span class="sp-title">Interactive</span> Data tables should allow user interaction so that a data display is customizable and interactive.
- <span class="sp-title">Intuitive</span> SData tables should be easy to use, with a logical structure that makes content easy to understand.

<!-- ## 2. Content guidelines

- <span class="sp-title">Baseline elements</span> Column header names describe the type of content displayed in each column. Each row contains data related to a single entity.
- <span class="sp-title">Interactive elements</span> Data tables can include interactive elements, such as:<br>Checkboxes<br>Sorting (on columns)<br>Icons that communicate alerts<br>Pagination
- <span class="sp-title">Height and padding</span> The baseline row height is 52dp, and the column header row height is 56dp (4dp taller than regular rows).
- <span class="sp-title">Padding</span> There is 32dp or more of padding between columns.
- <span class="sp-title">Text</span> Column header text uses a medium weight font to differentiate from row text. <br>Text that is longer than the column width is truncated with an ellipsis. On hover, a tooltip shows the full name.

- <span class="sp-title">Sorting</span> To help users sort information, a column can display column sorting by default.<br>To help users sort information, column can be displayed sorting by default.<br>To indicate which column is sorted by default, place a downward or upward arrow icon next to the column header’s name.

- <span class="sp-title">Reversing sort order</span> To reverse the sort order of a column, a user taps the header name or arrow icon. Upon sorting, the arrow icon reverses direction.

- <span class="sp-title">Row checkbox</span> When a row checkbox is selected, the row should display a background color.

- <span class="sp-title">Row hover (Desktop)</span> When the user hovers over a column header:<br>A tooltip can display the full column name (if it’s truncated) or a more detailed description of the column<br>If sorting is enabled, an arrow icon can appear next to the column header

- <span class="sp-title">Focus</span> When using keyboard focus, an indicator appears as users tab through interactive items (such as checkboxes).

- <span class="sp-title">Inline menus</span> Inline menus allow selection from a predefined set of menu items. They’re embedded directly in a table cell. Menus display a list of choices.

- <span class="sp-title">Pagination</span> Pagination controls provide swift access to all pages, while indicating that more pages exist. Pagination controls display:<br>Number of rows per page<br>Total number of rows, including the range currently in view<br>Left and right arrows for navigating pages -->

## 2. Accessibility

<div class="mt-24"></div>

- <span class="sp-title">Keyboard interaction</span> There are three data table variants with different interactions. Optional features like column sorting can appear in any of the variants. Table pagination is treated as a separate component.
- <span class="sp-title">Controls inside tables</span> Any interactive controls in data cells are in the tab order and maintain normal keyboard operation. This also applies to expandable table rows, which operate in the same manner as accordions.
- <span class="sp-title">Labeling and updates</span> If columns are sortable, the sort symbols appear on hover or focus. A sorted column retains an indicator until it is no longer sorted.

## 3. Anatomy

<div class="grey-box pt-0">

<br>

#### 3.1. Heading with icons

  <img src="/docs/5.2/assets/brand/custom/anatomy-images/table/table-a.png" style="max-width:800px;" class="w-100  mb-30" alt="" />

#### 3.2. With colored background

  <img src="/docs/5.2/assets/brand/custom/anatomy-images/table/table-b.png" style="max-width:800px;" class="w-100  mb-30" alt="" />

#### 3.3. Line table

  <img src="/docs/5.2/assets/brand/custom/anatomy-images/table/table-c.png" style="max-width:800px;" class="w-100  mb-30" alt="" />

#### 3.4. Sorting table

  <img src="/docs/5.2/assets/brand/custom/anatomy-images/table/table-d.png" style="max-width:800px;" class="w-100  mb-0" alt="" />
</div>
