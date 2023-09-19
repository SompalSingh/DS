---
layout: docs
title: Cards
description: A card is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.
group: components
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../card/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../card-anatomy/">Guidelines  </a>
  </li>
</ul>


## 1. Small Cards

<div class="grey-box p-0">
  {{< example >}}
  <div class="row">
    <div class="col-sm-4">
      <div class="card ds-card">
        <div class="card-body">
          <h5 class="card-title">What is Lorem Ipsum?</h5>
          <p class="card-text mb-3">dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
          <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
        </div>
      </div>
    </div>
  </div>
  {{< /example >}}
</div>


## 2. Small Card with Button

<div class="grey-box p-0">
  {{< example >}}
  <div class="row">
    <div class="col-sm-4">
    <div class="card ds-card">
      <div class="card-body">
        <h5 class="card-title">What is Lorem Ipsum?</h5>
        <p class="card-text mb-3">dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
        <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-small me-2">Primary-S</button>
        <button class="btn btn-primary ds-btn-primary btn-ripple ds-btn-small">Primary-S</button>
      </div>
    </div>
    </div>
  </div>
  {{< /example >}}
</div>

## 3. Small Card Image & Button

<div class="grey-box p-0">
  {{< example >}}
  <div class="row">
    <div class="col-sm-4">
    <div class="card ds-card">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">What is Lorem Ipsum?</h5>
        <p class="card-text mb-3">dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
        <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-small me-2">Primary-S</button>
        <button class="btn btn-primary ds-btn-primary btn-ripple ds-btn-small">Primary-S</button>
      </div>
    </div>
    </div>
  </div>
  {{< /example >}}
</div>

## 4. Card with Image (Horizontal)

<div class="grey-box p-0">
  {{< example >}}
  <div class="row">
  <div class="col-sm-6">
   <div class="card ds-card ds-large-card">
   <div class="col-sm-4">
    <div class="card-img">
      {{< placeholder width="100%" height="187" class="card-img-top" text="Image cap" >}}
     </div>
   </div>
   <div class="col-sm-8">
    <div class="card-body">
        <h5 class="card-title">What is Lorem Ipsum?</h5>
          <p class="card-text mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
      </div>
   </div>
   
    
  </div>
  </div>
</div>
  {{< /example >}}
</div>

## 5. Card with Date and Time (Vertical)

<div class="grey-box p-0">
  {{< example >}}
   <div class="row">
    <div class="col-sm-4">
    <div class="card ds-card">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
        <h5 class="card-title">What is Lorem Ipsum?</h5>
        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
      </div>
    </div>
    </div>
  </div>
  {{< /example >}}
</div>

## 6. Card with Date, Time and CTA

<div class="grey-box p-0">
  {{< example >}}
   <div class="row">
    <div class="col-sm-4">
    <div class="card ds-card">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
        <h5 class="card-title">What is Lorem Ipsum?</h5>
        <button class="btn btn-primary ds-btn-primary btn-ripple ds-btn-small">Primary-S</button>
      </div>
    </div>
    </div>
  </div>
  {{< /example >}}
</div>

<!-- ## 4. Medium Card

<div class="grey-box p-0">
  {{< example >}}
  <div class="row">
    <div class="col-sm-8">
      <div class="card ds-card ds-card-md">
        <div class="card-body">
          <h5 class="card-title">What is Lorem Ipsum?</h5>
          <p class="card-text mb-3">dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
          <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
        </div>
      </div>
    </div>
  </div>
  {{< /example >}}
</div>


## 5. Medium Card Button

<div class="grey-box p-0">
  {{< example >}}
  <div class="row">
    <div class="col-sm-8">
    <div class="card ds-card ds-card-md">
      <div class="card-body">
          <h5 class="card-title">What is Lorem Ipsum?</h5>
          <p class="card-text mb-3">dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
           <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline me-2">Primary-S</button>
          <button class="btn btn-primary ds-btn-primary btn-ripple">Primary-S</button>
      </div>
    </div>
    </div>
  </div>
  {{< /example >}}
</div>

## 6. Medium Card Image & Button

<div class="grey-box p-0">
  {{< example >}}
  <div class="row">
    <div class="col-sm-8">
    <div class="card ds-card ds-card-md">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
          <h5 class="card-title">What is Lorem Ipsum?</h5>
          <p class="card-text mb-3">dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
           <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline me-2">Primary-S</button>
          <button class="btn btn-primary ds-btn-primary btn-ripple">Primary-S</button>
      </div>
    </div>
    </div>
  </div>
  {{< /example >}}
</div>

## 7. Large Card
<div class="grey-box p-0">
{{< example >}}
<div class="row">
  <div class="col-sm-12">
    <div class="card ds-card ds-card-lg">
      <div class="card-body">
        <h5 class="card-title">What is Lorem Ipsum?</h5>
          <p class="card-text mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt…</p>
          <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
      </div>
    </div>
  </div>
</div>
{{< /example >}}
</div>

## 8. Large Card Button
<div class="grey-box p-0">
{{< example >}}
<div class="row">
  <div class="col-sm-12">
   <div class="card ds-card ds-card-lg">
    <div class="card-body">
       <h5 class="card-title">What is Lorem Ipsum?</h5>
          <p class="card-text mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt…</p>
       <button class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-large me-2">Primary-S</button>
          <button class="btn btn-primary ds-btn-primary btn-ripple ds-btn-large">Primary-S</button>
    </div>
  </div>
   </div>
</div>
{{< /example >}}
</div>

## 9. Large Card Image & Button
<div class="grey-box p-0">
{{< example >}}
<div class="row">
  <div class="col-sm-12">
   <div class="card ds-card ds-large-card ds-card-lg">
   <div class="col-sm-4">
    <div class="card-img">
      {{< placeholder width="100%" height="190" class="card-img-top" text="Image cap" >}}
     </div>
   </div>
   <div class="col-sm-8">
    <div class="card-body">
        <h5 class="card-title">What is Lorem Ipsum?</h5>
          <p class="card-text mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
      </div>
   </div>
   
    
  </div>
  </div>
</div>
{{< /example >}}
</div>-->

## 7. Card Image hover effect
<div class="grey-box p-0">
{{< example >}}
<div class="row">
  <div class="col-sm-4">
   <div class="card ds-card ds-card-effect">
    <div class="card-img-sec">
      <div class="card-img">
        {{< placeholder width="100%" height="300" class="card-img-top" text="Image cap" >}}
      </div>
     </div>
    <div class="card-body">
        <h5 class="card-title">What is Lorem Ipsum?</h5>
          <p class="card-text mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <a href="#" class="ds-card-link"><span>Read more</span><i class="icon bb-icon-arrow  font-14"></i></a>
      </div>
   </div>
  </div>
</div>
{{< /example >}}
</div> 

  
  