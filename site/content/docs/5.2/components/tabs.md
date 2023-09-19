---
layout: docs
title: Tabs
description: Tabs are used to organize related content. They allow the user to navigate between groups of information that appear within the same context.
group: components
aliases: "/docs/5.2/components/navs/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../tabs/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../tabs-anatomy/">Usage  </a>
  </li>
</ul>

## 1. Primary Tabs 

<div class="bd-example">
<div id="tab-slider" class="ds-slide-tab tabslider">
  <ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
    <li class="nav-item active" role="presentation">
      <a class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab1-pane" type="button" role="tab" aria-controls="tab1-pane" aria-selected="true">Tab 1</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab2-pane" type="button" role="tab" aria-controls="tab2-pane" aria-selected="false">Tab 2</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#tab3-pane" type="button" role="tab" aria-controls="tab3-pane" aria-selected="false">Tab 3</a>
    </li>
    <li class="slider" role="presentation"></li>
    
  </ul>
  </div>
  <div class="tab-content" id="primary-tabsContent">
    <div class="tab-pane fade show active" id="tab1-pane" role="tabpanel" aria-labelledby="tab1" tabindex="0">
      <p>This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="tab2-pane" role="tabpanel" aria-labelledby="tab2" tabindex="0">
      <p>This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="tab3-pane" role="tabpanel" aria-labelledby="tab3" tabindex="0">
      <p>This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="tab-disabled-pane" role="tabpanel" aria-labelledby="tab-disabled" tabindex="0">
      <p>This is some placeholder content the <strong>Disabled tab's</strong> associated content.</p>
    </div>
  </div>
</div>

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">HTML</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```html
<div id="tab-slider" class="ds-slide-tab tabslider">
<ul class="nav nav-tabs primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab1-pane" type="button" role="tab" aria-controls="tab1-pane" aria-selected="true">Tab 1</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab2-pane" type="button" role="tab" aria-controls="tab2-pane" aria-selected="false">Tab 2</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#tab3-pane" type="button" role="tab" aria-controls="tab3-pane" aria-selected="false">Tab 3</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="tab-disabled" data-bs-toggle="tab" data-bs-target="#tab-disabled-pane" type="button" role="tab" aria-controls="tab-disabled-pane" aria-selected="false" disabled>Disabled</button>
  </li>
  <li class="slider" role="presentation"></li>
</ul>
</div>
<div class="tab-content" id="primary-tabsContent">
  <div class="tab-pane fade show active" id="tab1-pane" role="tabpanel" aria-labelledby="tab1" tabindex="0">...</div>
  <div class="tab-pane fade" id="tab2-pane" role="tabpanel" aria-labelledby="tab2" tabindex="0">...</div>
  <div class="tab-pane fade" id="tab3-pane" role="tabpanel" aria-labelledby="tab3" tabindex="0">...</div>
  <div class="tab-pane fade" id="tab-disabled-pane" role="tabpanel" aria-labelledby="tab-disabled" tabindex="0">...</div>
</div>
```

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js

$(document).ready(function () {
  $("#tab-slider .nav-tabs button").click(function() {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
      $("#tab-slider .slider").css({"left":+ position.left,"width":width});
    });
    var actWidth = $("#tab-slider .nav-tabs").find(".active").parent("li").width();
    var actPosition = $("#tab-slider .nav-tabs .active").position();
    $("#tab-slider .slider").css({"left":+ actPosition.left,"width": actWidth});
});

```

## 2. Secondry Tabs

<div class="bd-example tabs-block">
  <nav>
    <div class="nav nav-tabs secondry-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Tab 1</button>
      <button class="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Tab 2</button>
      <button class="nav-link" id="ntab3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Tab 3</button>
    </div>
  </nav>
  <div class="tab-content contant-block" id="nav-tabContent">
    <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1" tabindex="0">
      <p>This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2" tabindex="0">
      <p>This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="ntab3" tabindex="0">
      <p>This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
  </div>
</div>

```html
<nav>
    <div class="nav nav-tabs secondry-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Tab1</button>
      <button class="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Tab 2</button>
      <button class="nav-link" id="ntab3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Tab 3</button>
    </div>
  </nav>
  <div class="tab-content contant-block" id="nav-tabContent">
    <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1" tabindex="0">
      <p>This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2" tabindex="0">
      <p>This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="ntab3" tabindex="0">
      <p>This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
  </div>
```


