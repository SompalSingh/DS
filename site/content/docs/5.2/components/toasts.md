---
layout: docs
title: Toast Notification
description: A toast provides simple feedback about an operation in a small popup. It only fills the amount of space required for the message and the current activity remains visible and interactive. Toasts automatically disappear after a timeout.
group: components
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../toasts/">Code and Examples</a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../toasts-anatomy/">Guidelines</a>
  </li>
</ul>

## 1. Toast Notification without Icon

<div class="grey-box p-0">

### 1.1. Primary - Purpule

{{< example >}}

<!--Primary Purpule-->
<div class="toast ds-toast text-bg-purple border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary Purpule-->
{{< /example >}}

### 1.2. Primary-Blue

{{< example >}}

<!--Primary-Blue-->
<div class="toast ds-toast text-bg-blue border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Blue-->
{{< /example >}}

### 1.3. Primary-Green

{{< example >}}

<!--Primary-Green-->
<div class="toast ds-toast text-bg-Success border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Green-->
{{< /example >}}

### 1.4 Danger-Red

{{< example >}}

<!--Primary-Danger-->
<div class="toast ds-toast text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Danger-->
{{< /example >}}

### 1.5. Warning-Amber

{{< example >}}

<!--Primary-Warning-->
<div class="toast ds-toast text-bg-warning border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Warning-->
{{< /example >}}

### 1.6. Info-Teal

{{< example >}}

<!--Primary-Info-Teal-->
<div class="toast ds-toast text-bg-info border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Info-Teal-->
{{< /example >}}

### 1.7. Light-White

{{< example >}}

<!--Primary-Light-White-->
<div class="toast ds-toast text-bg-Light border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Light-White-->
{{< /example >}}

### 1.8. Dark-Black

{{< example >}}

<!--Primary-Dark-Black-->
<div class="toast ds-toast text-bg-Dark border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn-close abc me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Dark-Black-->
{{< /example >}}

<div class="toast-container position-fixed top-0 end-0 p-3">
  <div id="basicToast" class="toast ds-toast align-items-center text-bg-purple border-0" role="alert" aria-live="assertive" aria-atomic="true">
   <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  </div>
</div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary ds-btn-primary" id="withoutIconToast">Show live toast</button>
</div>

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">HTML</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```html
<button type="button" class="btn btn-primary ds-btn-primary" id="withoutIconToast">
  Show live toast
</button>

<div class="toast-container position-fixed top-0 end-0 p-3">
  <div id="basicToast" class="toast ds-toast align-items-center text-bg-purple border-0" role="alert" aria-live="assertive" aria-atomic="true">
   <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  </div>
</div>
</div>
```

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
// Instantiate all toasts in a docs page only
const toastTrigger = document.getElementById("withoutIconToast");
const toastExample = document.getElementById("basicToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastExample);
    toast.show();
  });
}
```

## 2. Toast Notification with Icon

<div class="grey-box p-0">

### 2.1. Primary-Purple

{{< example >}}

<!--Primary-Purple-->
<div class="toast ds-toast text-bg-purple border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-purple"></span> A simple primary alert with an icon</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Purple-->
{{< /example >}}

### 2.2. Primary-Blue

{{< example >}}

<!--Primary-Blue-->
<div class="toast ds-toast text-bg-blue border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-blue"></span> A simple primary alert with an icon</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Blue-->
{{< /example >}}

### 2.3. Success-Green

{{< example >}}

<!--Primary-Green-->
<div class="toast ds-toast text-bg-Success border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-success"></span> A simple primary alert with an icon</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Green-->
{{< /example >}}

### 2.4. Danger-Red

{{< example >}}

<!--Primary-Red-->
<div class="toast ds-toast text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-danger"></span> A simple primary alert with an icon</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Red-->
{{< /example >}}

### 2.5. Warning-Amber

{{< example >}}

<!--Primary-Amber-->
<div class="toast ds-toast text-bg-warning border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-warning"></span> A simple primary alert with an icon</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Amber-->
{{< /example >}}

### 2.6. Info-Teal

{{< example >}}

<!--Primary-Teal-->
<div class="toast ds-toast text-bg-info border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-info"></span> A simple primary alert with an icon</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Teal-->
{{< /example >}}

### 2.7. Light-White

{{< example >}}

<!--Primary-White-->
<div class="toast ds-toast text-bg-Light border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-Light"></span> A simple primary alert with an icon</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-White-->
{{< /example >}}

### 2.8. Dark-Black

{{< example >}}

<!--Primary-Black-->
<div class="toast ds-toast text-bg-Dark border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-Dark"></span> A simple primary alert with an icon</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
<!--Primary-Black-->
{{< /example >}}
</div>

<div class="toast-container position-fixed top-0 end-0 p-3">
  <div id="toastWithIcon" class="toast ds-toast text-bg-purple border-0" role="alert" aria-live="assertive" aria-atomic="true">
   <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-purple"></span> A simple primary alert with an icon</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary ds-btn-primary" id="toastIconBtn">Show live toast</button>
</div>

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">HTML</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```html
<button type="button" class="btn btn-primary ds-btn-primary" id="toastIconBtn">
  Show live toast
</button>

<div class="toast-container position-fixed top-0 end-0 p-3">
  <div
    id="toastWithIcon"
    class="toast ds-toast text-bg-purple border-0"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body">
        <span class="ds-tost-icon icon-bg-purple"></span> A simple primary alert
        with an icon
      </div>
      <button
        type="button"
        class="btn-close me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</div>
```

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
// Instantiate all toasts in a docs page only
const toastTrigger2 = document.getElementById("toastIconBtn");
const toastExample2 = document.getElementById("toastWithIcon");
if (toastTrigger2) {
  toastTrigger2.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastExample2);
    toast.show();
  });
}
```

## 3. Toast With Action

<div class="grey-box p-0">

### 3.1. Primary-Purple

{{< example >}}

<!--Primary-Purple-->
<div class="toast ds-toast text-bg-purple border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-purple me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Purple-->
{{< /example >}}

### 3.2. Primary-Blue

{{< example >}}

<!--Primary-Blue-->
<div class="toast ds-toast text-bg-blue border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-blue me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Blue-->
{{< /example >}}

### 3.3. Success-Green

{{< example >}}

<!--Primary-Green-->
<div class="toast ds-toast text-bg-Success border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-Success me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Green-->
{{< /example >}}

### 3.4. Danger-Red

{{< example >}}

<!--Primary-Red-->
<div class="toast ds-toast text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-danger me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Red-->
{{< /example >}}

### 3.5. Warning-Amber

{{< example >}}

<!--Primary-Amber-->
<div class="toast ds-toast text-bg-warning border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-amber me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Amber-->
{{< /example >}}

### 3.6. Info-Teal

{{< example >}}

<!--Primary-Teal-->
<div class="toast ds-toast text-bg-info border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-info me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Teal-->
{{< /example >}}

### 3.7. Light-White

{{< example >}}

<!--Primary-White-->
<div class="toast ds-toast text-bg-Light border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-Light me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-White-->
{{< /example >}}

### 3.8. Dark-Black

{{< example >}}

<!--Primary-Black-->
<div class="toast ds-toast text-bg-Dark border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-dark me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Black-->
{{< /example >}}
</div>

<div class="toast-container position-fixed top-0 end-0 p-3">
  <div id="toastWithAction" class="toast ds-toast text-bg-purple border-0" role="alert" aria-live="assertive" aria-atomic="true">
   <div class="d-flex">
    <div class="toast-body">A simple primary alert—check it out!</div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-purple me-3 m-auto" >Primary</button>
  </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary ds-btn-primary" id="toastActionBtn">Show live toast</button>
</div>

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">HTML</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```html
<button
  type="button"
  class="btn btn-primary ds-btn-primary"
  id="toastActionBtn"
>
  Show live toast
</button>

<div class="toast-container position-fixed top-0 end-0 p-3">
  <div
    id="toastWithAction"
    class="toast ds-toast text-bg-purple border-0"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body">A simple primary alert—check it out!</div>
      <button
        type="button"
        class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-purple me-3 m-auto"
      >
        Primary
      </button>
    </div>
  </div>
</div>
```

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
// Instantiate all toasts in a docs page only
const toastTrigger3 = document.getElementById("toastActionBtn");
const toastLiveExample3 = document.getElementById("toastWithAction");
if (toastTrigger3) {
  toastTrigger3.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample3);
    toast.show();
  });
}
```

## 4. Toast With Heading, Icon & Actions

<div class="grey-box p-0">

### 4.1. Primary-Purple

{{< example >}}

<!--Primary-Purple-->
<div class="toast ds-toast text-bg-purple border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      <span class="ds-tost-icon icon-bg-purple"></span>
      <div class="toast-content"><h5>Heading Title</h5> A simple primary alert—check it out!</div>
    </div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-purple me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Purple-->
{{< /example >}}

### 4.2. Primary-Blue

{{< example >}}

<!--Primary-Blue-->
<div class="toast ds-toast text-bg-blue border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
    <span class="ds-tost-icon icon-bg-blue"></span>
     <div class="toast-content"><h5>Heading Title</h5> A simple primary alert—check it out!</div>
    </div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-blue me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Blue-->
{{< /example >}}

### 4.3. Success-Green

{{< example >}}

<!--Primary-Green-->
<div class="toast ds-toast text-bg-Success border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-success"></span>
    <div class="toast-content"><h5>Heading Title</h5> A simple primary alert—check it out!</div>
    </div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-Success me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Green-->
{{< /example >}}

### 4.4. Danger-Red

{{< example >}}

<!--Primary-Red-->
<div class="toast ds-toast text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-danger"></span> 
    <div class="toast-content"><h5>Heading Title</h5> A simple primary alert—check it out!</div>
    </div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-danger me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Red-->
{{< /example >}}

### 4.5. Warning-Amber

{{< example >}}

<!--Primary-Amber-->
<div class="toast ds-toast text-bg-warning border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-warning"></span> 
    <div class="toast-content"><h5>Heading Title</h5> A simple primary alert—check it out!</div>
    </div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-amber me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Amber-->
{{< /example >}}

### 4.6. Info-Teal

{{< example >}}

<!--Primary-Teal-->
<div class="toast ds-toast text-bg-info border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-info"></span> 
    <div class="toast-content"><h5>Heading Title</h5> A simple primary alert—check it out!</div></div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-info me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Teal-->
{{< /example >}}

### 4.7. Light-White

{{< example >}}

<!--Primary-White-->
<div class="toast ds-toast text-bg-Light border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-Light"></span>
    <div class="toast-content"><h5>Heading Title</h5> A simple primary alert—check it out!</div></div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-Light me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-White-->
{{< /example >}}

### 4.8. Dark-Black

{{< example >}}

<!--Primary-Black-->
<div class="toast ds-toast text-bg-Dark border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-Dark"></span>
    <div class="toast-content"><h5>Heading Title</h5> A simple primary alert—check it out!</div></div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-dark me-3 m-auto" >Primary</button>
  </div>
</div>
<!--Primary-Black-->
{{< /example >}}
</div>

<div class="toast-container position-fixed top-0 end-0 p-3">
  <div id="toastWithIconAndAction" class="toast ds-toast text-bg-purple border-0" role="alert" aria-live="assertive" aria-atomic="true">
   <div class="d-flex">
    <div class="toast-body"><span class="ds-tost-icon icon-bg-purple"></span> 
    <div class="toast-content"><h5>Heading Title</h5> A simple primary alert—check it out!</div>
    </div>
    <button type="button" class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-purple me-3 m-auto" >Primary</button>
  </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary ds-btn-primary" id="toastBtnWithIconAction">Show live toast</button>
</div>

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">HTML</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```html
<button
  type="button"
  class="btn btn-primary ds-btn-primary"
  id="toastBtnWithIconAction"
>
  Show live toast
</button>

<div class="toast-container position-fixed top-0 end-0 p-3">
  <div
    id="toastWithIconAndAction"
    class="toast ds-toast text-bg-purple border-0"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body">
        <span class="ds-tost-icon icon-bg-purple"></span>
        <div class="toast-content">
          <h5>Heading Title</h5>
          A simple primary alert—check it out!
        </div>
      </div>
      <button
        type="button"
        class="btn ds-btn-ripple ds-btn-primary-outline ds-btn-toast btn-purple me-3 m-auto"
      >
        Primary
      </button>
    </div>
  </div>
</div>
```

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
// Instantiate all toasts in a docs page only
const toastTrigger4 = document.getElementById("toastBtnWithIconAction");
const toastLiveExample4 = document.getElementById("toastWithIconAndAction");
if (toastTrigger4) {
  toastTrigger4.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample4);
    toast.show();
  });
}
```
