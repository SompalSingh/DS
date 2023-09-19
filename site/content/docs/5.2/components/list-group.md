---
layout: docs
title: Lists Groups
description: Lists are vertical groupings of related content. List items begin with either a number or a bullet.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../list-group/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../list-group-anatomy/">Guidelines  </a>
  </li>
</ul>


## 1. List Group
<div class="grey-box p-0">
{{< example >}}
<ul class="list-group ds-list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
{{< /example >}}
</div>

## 2. Active items
<div class="grey-box p-0">
{{< example >}}
<ul class="list-group ds-list-group" id="activeList">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
{{< /example >}}
</div>

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
// list group active li 
$("#activeList").on('click','li',function(){
  // remove classname 'active' from all li who already has classname 'active'
  $("#activeList li.active").removeClass("active"); 
  // adding classname 'active' to current click li 
  $(this).addClass("active"); 
});

```

## 3. Disabled items
<div class="grey-box p-0">
{{< example >}}
<ul class="list-group ds-list-group">
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
{{< /example >}}
</div>

## 4. Links
<div class="grey-box p-0">
{{< example >}}
<div class="list-group ds-list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
</div>
{{< /example >}}
</div>

## 5. Flush
<div class="grey-box p-0">
{{< example >}}
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
{{< /example >}}
</div>

## 6. Numbered
<div class="grey-box p-0">
{{< example >}}
<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>
{{< /example >}}


{{< example >}}
<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>
{{< /example >}}
</div>

## 7. Horizontal
<div class="grey-box p-0">
{{< example >}}
{{< list-group.inline >}}
{{- range $.Site.Data.breakpoints }}
<ul class="list-group list-group-horizontal{{ .abbr }}">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
{{- end -}}
{{< /list-group.inline >}}
{{< /example >}}
</div>

## 8. Contextual classes
<div class="grey-box p-0">
{{< example >}}
<ul class="list-group ds-list-group">
  <li class="list-group-item">A simple default list group item</li>
{{< list.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
  <li class="list-group-item list-group-item-{{ .name }}">A simple {{ .name }} list group item</li>
{{- end -}}
{{< /list.inline >}}
</ul>
{{< /example >}}

{{< example >}}
<div class="list-group ds-list-group">
  <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>
{{< list.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
  <a href="#" class="list-group-item list-group-item-action list-group-item-{{ .name }}">A simple {{ .name }} list group item</a>
{{- end -}}
{{< /list.inline >}}
</div>
{{< /example >}}
</div>

## 9. With badges
<div class="grey-box p-0">
{{< example >}}
<ul class="list-group ds-list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>
{{< /example >}}
</div>

## 10. Custom content
<div class="grey-box p-0">
{{< example >}}
<div class="list-group ds-list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
</div>
{{< /example >}}
</div>

## 11. Checkboxes and radios
<div class="grey-box p-0">
{{< example >}}
<ul class="list-group ds-list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
    <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
    <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
  </li>
</ul>
{{< /example >}}

{{< example >}}
<ul class="list-group ds-list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
    <label class="form-check-label" for="firstRadio">First radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
    <label class="form-check-label" for="secondRadio">Second radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
    <label class="form-check-label" for="thirdRadio">Third radio</label>
  </li>
</ul>
{{< /example >}}

</div>

## 12. With button
<div class="grey-box p-0">
{{< example >}}
<ul class="list-group ds-list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-x-small">Primary</button>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-x-small">Primary</button>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-x-small">Primary</button>
  </li>
</ul>
{{< /example >}}
</div>