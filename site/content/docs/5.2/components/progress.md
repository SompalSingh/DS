---
layout: docs
title: Progress Bar
description: A progress bar is a graphical control element used to visualize the progression of an extended computer operation
group: components
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../progress/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../progress-anatomy/">Guidelines  </a>
  </li>
</ul>

## 1. With label

<div class="grey-box p-0">
  {{< example >}}
  <div class="text-right"><span class="font-500" style="font-size:14px;">100%</span></div>
  <div class="progress small">
    <div class="progress-bar basic-bar" role="progressbar" aria-label="Basic Demo" style="width: 80%; height:8px;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  {{< /example >}}
</div>

## 2. Multiple Step

<div class="grey-box p-0">
  {{< example >}}

  <div class="text-right"><span class="font-500" style="font-size:14px;">3 of 4 Stage</span></div>
  <div class="progress">
    <div class="progress-bar multiplebar-1" role="progressbar" aria-label="Segment one" style="width: 50%; height:8px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar multiplebar-2" role="progressbar" aria-label="Segment two" style="width: 25%; height:8px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  {{< /example >}}
</div>

## 3. Striped with label
<div class="grey-box p-0">
  {{< example >}}
  <div class="text-right"><span class="font-500" style="font-size:14px;">100%</span></div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped multiplebar-1" role="progressbar" aria-label="Success striped example" style="width: 25%; height:16px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  {{< /example >}}
</div>

## 4. Striped with Animated
<div class="grey-box p-0">
  {{< example >}}
  <div class="progress ">
    <div class="progress-bar progress-bar-striped progress-bar-animated multiplebar-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%; height:16px;">100%</div>
  </div>
  {{< /example >}}
</div>


<!--

{{< example >}}
<p>Progress bar with label on bar</p>
<div class="progress">
  <div class="progress-bar basic-bar" role="progressbar" aria-label="Example with label" style="width: 25%;height:16px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
<p>Multiple bar with label on bar</p>
<div class="progress">
  <div class="progress-bar multiplebar-1" role="progressbar" aria-label="Segment one" style="width: 25%; height:16px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
  <div class="progress-bar multiplebar-2" role="progressbar" aria-label="Segment two" style="width: 25%; height:16px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
  <div class="progress-bar multiplebar-3" role="progressbar" aria-label="Segment three" style="width: 25%; height:16px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{{< /example >}} -->
