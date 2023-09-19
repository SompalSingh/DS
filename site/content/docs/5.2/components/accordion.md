---
layout: docs
title: Accordion
description: An accordion is a design element that expands in place to expose some hidden information. Unlike overlays, accordions push the page content down instead of being superposed on top of page content.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../accordion/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../accordion-anatomy/">Guidelines  </a>
  </li>
</ul>


## 1. Box Layout
<div class="grey-box p-0">
{{< example >}}
<!--Accordion Box-->
  <div class="accordion ds-accordion" id="accordionOptionOne">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionOptionOne">
          <div class="accordion-body">
            <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionOptionOne">
          <div class="accordion-body">
            <p>This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionOptionOne">
          <div class="accordion-body">
            <p>This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
    </div>
{{< /example >}}
</div>


## 2. Line Layout
<div class="grey-box p-0">
{{< example >}}
<!--Accordion Line-->
  <div class="accordion ds-accordion accordion-flush" id="accordionOptionTwo">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionOptionTwo">
          <div class="accordion-body">
            <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionOptionTwo">
          <div class="accordion-body">
            <p>This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionOptionTwo">
          <div class="accordion-body">
            <p>This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
    </div>
{{< /example >}}
</div>

## 3. Single Action
<div class="grey-box p-0">
{{< example >}}
<!--Accordion Single Button-->
  <div class="accordion ds-accordion accordion-flush withActionIcon" id="accordionOptionThree">
      <div class="accordion-item">
        <h2 class="accordion-header" id="withIcon-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#withIcon-collapseOne" aria-expanded="true" aria-controls="withIcon-collapseOne">
            Accordion Item #1 
          </button>
          <div class="action-icon">
              <a href="#"><span class="icon-Edit"></span></a>
          </div>
        </h2>
        <div id="withIcon-collapseOne" class="accordion-collapse collapse show" aria-labelledby="withIcon-headingOne" data-bs-parent="#accordionOptionThree">
          <div class="accordion-body">
            <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="withIcon-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#withIcon-collapseTwo" aria-expanded="false" aria-controls="withIcon-collapseTwo">
             Accordion Item #1 
          </button>
          <div class="action-icon">
              <a href="#"><span class="icon-Edit"></span></a>
          </div>
        </h2>
        <div id="withIcon-collapseTwo" class="accordion-collapse collapse" aria-labelledby="withIcon-headingTwo" data-bs-parent="#accordionOptionThree">
          <div class="accordion-body">
            <p>This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="withIcon-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#withIcon-collapseThree" aria-expanded="false" aria-controls="withIcon-collapseThree">
              Accordion Item #1 
          </button>
          <div class="action-icon">
              <a href="#"><span class="icon-Edit"></span></a>
          </div>
        </h2>
        <div id="withIcon-collapseThree" class="accordion-collapse collapse" aria-labelledby="withIcon-headingThree" data-bs-parent="#accordionOptionThree">
          <div class="accordion-body">
            <p>This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
    </div>
{{< /example >}}
</div>

## 4. Multiple Action

<div class="grey-box p-0">
{{< example >}}
<!--Accordion Multiple Button-->
  <div class="accordion ds-accordion accordion-flush withActionIcon" id="accordionOptionFour">
      <div class="accordion-item">
        <h2 class="accordion-header" id="withActionIcon-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#withActionIcon-collapseOne" aria-expanded="true" aria-controls="withActionIcon-collapseOne">
            Accordion Item #1
          </button>
          <div class="action-icon">
              <a href="#"><span class="icon-outline-delete"></span></a>
              <a href="#"><span class="icon-Download"></span></a>
              <a href="#"><span class="icon-Edit"></span></a>
              <a href="#"><span class="icon-Morevertical"></span></a>
          </div>
        </h2>
        <div id="withActionIcon-collapseOne" class="accordion-collapse collapse show" aria-labelledby="withActionIcon-headingOne" data-bs-parent="#accordionOptionFour">
          <div class="accordion-body">
            <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="withActionIcon-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#withActionIcon-collapseTwo" aria-expanded="false" aria-controls="withActionIcon-collapseTwo">
            Accordion Item #2
          </button>
          <div class="action-icon">
            <a href="#"><span class="icon-outline-delete"></span></a>
            <a href="#"><span class="icon-Download"></span></a>
            <a href="#"><span class="icon-Edit"></span></a>
            <a href="#"><span class="icon-Morevertical"></span></a>
           </div>
        </h2>
        <div id="withActionIcon-collapseTwo" class="accordion-collapse collapse" aria-labelledby="withActionIcon-headingTwo" data-bs-parent="#accordionOptionFour">
          <div class="accordion-body">
            <p>This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="withActionIcon-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#withActionIcon-collapseThree" aria-expanded="false" aria-controls="withActionIcon-collapseThree">
            Accordion Item #3
          </button>
          <div class="action-icon">
            <a href="#"><span class="icon-outline-delete"></span></a>
            <a href="#"><span class="icon-Download"></span></a>
            <a href="#"><span class="icon-Edit"></span></a>
            <a href="#"><span class="icon-Morevertical"></span></a>
          </div>
        </h2>
        <div id="withActionIcon-collapseThree" class="accordion-collapse collapse" aria-labelledby="withActionIcon-headingThree" data-bs-parent="#accordionOptionFour">
          <div class="accordion-body">
            <p>This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</p>
          </div>
        </div>
      </div>
    </div>
</div>

{{< /example >}}
</div>
