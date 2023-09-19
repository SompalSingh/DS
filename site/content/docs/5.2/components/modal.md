---
layout: docs
title: Modal
description: A modal is a web page element that displays in front of and deactivates all other page content. To return to the main content, the user must engage with the modal by completing an action or by closing it.
group: components
toc: true
---


<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../modal/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../modal-anatomy/">Guidelines  </a>
  </li>
</ul>

## 1. Modal Design

<div class="grey-box p-0">
  <div class="bd-example bg-light">
  <div class="modal ds-modal position-static d-block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header pb-16">
          <h5 class="modal-title">Modal Small (Width 450px)</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
        <div class="modal-footer border-0">
          <div class="d-flex justify-content-end align-items-center">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-small me-3">Optional</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary ds-btn-small">Main CTA</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header pb-16">
        <h5 class="modal-title">Modal Small (Width 450px)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </div>
      <div class="modal-footer border-0">
         <div class="d-flex justify-content-end align-items-center">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-small me-3">Optional</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary ds-btn-small">Main CTA</a>
          </div>
        </div>
    </div>
  </div>
</div>
```


<!-- modal-sm -->
  <div class="modal ds-modal fade" id="exampleModal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header pb-16">
          <h5 class="modal-title" id="exampleModalLabel">Modal Medium (Width 650px)</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
        <div class="modal-footer border-0">
          <div class="d-flex justify-content-end align-items-center">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-small me-3">Optional</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary ds-btn-small">Main CTA</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>


<!-- modal-lg -->
  <div class="modal ds-modal fade" id="exampleModal1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal Medium (Width 650px)</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
        <div class="modal-footer border-0">
          <div class="d-flex justify-content-center align-items-center w-100">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline me-3">Secondary-M</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary">Primary-M</a>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- modal-xl -->
  <div class="modal ds-modal fade" id="exampleModal2">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal Large (Width 800px)</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
        <div class="modal-footer border-0">
          <div class="d-flex justify-content-start align-items-center w-100">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline ds-btn-large me-3">Secondary-L</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary ds-btn-large">Primary-L</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
<!-- modal-fullscreen -->
  <div class="modal ds-modal fade" id="exampleModal3">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Heading</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
        <div class="modal-footer border-0">
          <div class="d-flex justify-content-end align-items-center">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline me-3">Secondary-M</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary">Primary-M</a>
          </div>
        </div>
      </div>
    </div>
  </div>

## 2. Modal Small
<div class="grey-box pl-0">
<button type="button" class="btn btn-primary ds-btn-primary btn-ripple" data-bs-toggle="modal" data-bs-target="#exampleModal">Modal - Small</button>

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary ds-btn-primary btn-ripple" data-bs-toggle="modal" data-bs-target="#exampleModal">Modal - Small</button>

<!-- Modal -->
<!-- modal-sm -->
  <div class="modal ds-modal fade" id="exampleModal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal Small (Width 450px)</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
        <div class="modal-footer border-0">
          <div class="d-flex justify-content-end align-items-center">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline me-3">Secondary-M</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary">Primary-M</a>
          </div>
        </div>
      </div>
    </div>
  </div>

```
 </div>

## 3. Modal Medium 
<div class="grey-box pl-0">
<button type="button" class="btn btn-primary ds-btn-primary btn-ripple" data-bs-toggle="modal" data-bs-target="#exampleModal1">Modal - Medium</button>

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary ds-btn-primary btn-ripple" data-bs-toggle="modal" data-bs-target="#exampleModal1">Modal - Medium<button>

<!-- Modal -->

<!-- modal-lg -->
  <div class="modal ds-modal fade" id="exampleModal1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal medium (Width 650px)</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
        <div class="modal-footer border-0">
          <div class="d-flex justify-content-end align-items-center">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline me-3">Secondary-M</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary">Primary-M</a>
          </div>
        </div>
      </div>
    </div>
  </div>
```
</div>

## 4. Modal Large 
<div class="grey-box pl-0">
<button type="button" class="btn btn-primary ds-btn-primary btn-ripple" data-bs-toggle="modal" data-bs-target="#exampleModal2">Modal - Large</button>

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary ds-btn-primary btn-ripple" data-bs-toggle="modal" data-bs-target="#exampleModal2">Modal - Large</button>

<!-- modal-xl -->
  <div class="modal ds-modal fade" id="exampleModal2">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal Large (Width 800px)</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
        <div class="modal-footer border-0">
          <div class="d-flex justify-content-end align-items-center">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline me-3">Secondary-M</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary">Primary-M</a>
          </div>
        </div>
      </div>
    </div>
  </div>

```
 </div>

## 5. Modal Fluid 

<div class="grey-box pl-0">
<button type="button" class="btn btn-primary ds-btn-primary btn-ripple" data-bs-toggle="modal" data-bs-target="#exampleModal3">Modal - XXL Fluid</button>

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary ds-btn-primary btn-ripple" data-bs-toggle="modal" data-bs-target="#exampleModal3">Modal - XXL Fluid<button>

<!-- Modal -->
  
<!-- modal-fullscreen -->
  <div class="modal ds-modal fade" id="exampleModal3">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Heading</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
        <div class="modal-footer border-0">
          <div class="d-flex justify-content-end align-items-center">
            <a href="#" class="btn btn-primary-outline btn-ripple ds-btn-primary-outline me-3">Secondary-M</a>
            <a href="#" class="btn btn-primary btn-ripple ds-btn-primary">Primary-M</a>
          </div>
        </div>
      </div>
    </div>
  </div>
```
</div>
