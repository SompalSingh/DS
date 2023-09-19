---
layout: docs
title: Side Panel
description: Side Panels are containers that anchor to the left or right side of the screen.
group: components
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../side-panel/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../side-panel-anatomy/">Guidelines  </a>
  </li>
</ul>

## 1. Buttons Horizontally Aligned
<div class="grey-box p-0">
{{< example >}}
<button class="btn btn-primary ds-btn-primary btn-ripple" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas ds-offcanvas ds-offcanvas-sm  offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Heading</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    </p>
  </div>
  <div class="offcanvas-footer d-flex align-items-center justify-content-between">
    <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-small">Secondary-S</button>
    <button class="btn btn-primary btn-ripple ds-btn-primary ds-btn-small">Primary-S</button>
  </div>
</div>
{{< /example >}}
</div>

## 2 Buttons Vertically Left Aligned
<div class="grey-box p-0">
{{< example >}}
<button class="btn btn-primary ds-btn-primary btn-ripple" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas ds-offcanvas ds-offcanvas-sm  offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Heading</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    </p>
  </div>
  <div class="offcanvas-footer d-flex align-items-center justify-content-between flex-column">
    <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-small mb-16 w-100">Secondary-S</button>
    <button class="btn btn-primary btn-ripple ds-btn-primary ds-btn-small w-100">Primary-S</button>
  </div>
</div>
{{< /example >}}
</div>

## 3. Medium Side panel
<div class="grey-box p-0">
{{< example >}}
<button class="btn btn-primary ds-btn-primary btn-ripple" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight-md" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas ds-offcanvas ds-offcanvas-md  offcanvas-end" tabindex="-1" id="offcanvasRight-md" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Heading</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    </p>
  </div>
  <div class="offcanvas-footer d-flex align-items-center justify-content-center">
  <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline me-3">Secondary-M</button>
    <button class="btn btn-primary btn-ripple ds-btn-primary">Primary-M</button>
  </div>
</div>
{{< /example >}}
</div>

## 4. Large Side panel
<div class="grey-box p-0">
{{< example >}}
<button class="btn btn-primary ds-btn-primary btn-ripple" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight-lg" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas ds-offcanvas ds-offcanvas-lg  offcanvas-end" tabindex="-1" id="offcanvasRight-lg" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Heading</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    </p>
  </div>
  <div class="offcanvas-footer d-flex align-items-center justify-content-center">
  <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-large me-3">Secondary-L</button>
    <button class="btn btn-primary btn-ripple ds-btn-primary ds-btn-large">Primary-L</button>
  </div>
</div>
{{< /example >}}
</div>