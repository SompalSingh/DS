---
layout: docs
title: Carousel
description: A slideshow component for cycling through elements—images or slides of text—like a carousel.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../carousel/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../carousel-anatomy/">Guidelines  </a>
  </li>
</ul>


## 1. Carousel (Slides only)
<div class="grey-box p-0">
{{< example >}}
<!--only carousel-->
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
    </div>
    <div class="carousel-item">
    <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
    </div>
    <div class="carousel-item">
    <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
    </div>
  </div>
</div>
<!--only carousel-->
{{< /example >}}

</div>

## 2. Carousel (With controls)
<div class="grey-box p-0">
{{< example >}}
<!--With controls-->
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
    </div>
    <div class="carousel-item">
      <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
    </div>
    <div class="carousel-item">
      <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!--With controls-->
{{< /example >}}

</div>

## 3. Carousel (With indicators)
<div class="grey-box p-0">
{{< example >}}
<!--With indicators-->
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
    </div>
    <div class="carousel-item">
      <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
    </div>
    <div class="carousel-item">
      <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!--With indicators-->
{{< /example >}}

</div>

## 4. Carousel (With captions)
<div class="grey-box p-0">
{{< example >}}
<!--With captions-->
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!--With captions-->
{{< /example >}}

</div>

## 4. Carousel (With Content)
<div class="grey-box p-0">
{{< example >}}
<!--With content-->
<div id="carouselExampleContent" class="carousel slide with-content" data-bs-ride="false">
  <!-- <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <!-- <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" /> -->
      <div class="carousel-caption d-none d-md-block">
        <h5>Slide Label</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button class="btn btn-primary ds-btn-primary btn-ripple ds-btn-small">Primary Default</button>
      </div>
    </div>
    <div class="carousel-item">
      <!-- <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" /> -->
      <div class="carousel-caption d-none d-md-block">
         <h5>Slide Label</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button class="btn btn-primary ds-btn-primary btn-ripple ds-btn-small">Primary Default</button>
      </div>
    </div>
    <div class="carousel-item">
      <!-- <img src="/docs/5.2/assets/brand/custom/anatomy-images/carousel/carousels-1.svg" class="w-100" alt="" /> -->
      <div class="carousel-caption d-none d-md-block">
         <h5>Slide Label</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button class="btn btn-primary ds-btn-primary btn-ripple ds-btn-small">Primary Default</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleContent" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleContent" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!--With content-->
{{< /example >}}

</div>

## 4. Card With Carousel
<div class="grey-box p-0">
{{< example >}}

<section class="pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <!-- <h3 class="mb-3">Carousel cards title </h3> -->
            </div>
            <div class="col-6 text-right">
                <a class="btn btn-primary mb-3 carousel-btn left" data-bs-target="#carouselExampleIndicators2" role="button" data-bs-slide="prev">
                    <i class="icon-outline-arrow-nav-left"></i>
                </a>
                <a class="btn btn-primary mb-3 carousel-btn right" data-bs-target="#carouselExampleIndicators2" role="button" data-bs-slide="next">
                    <i class="icon-outline-arrow-nav-right"></i>
                </a>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card ds-card">
                                      {{< placeholder width="100%" height="130" class="card-img-top" text="Image cap" >}}
                                      <div class="card-body">
                                        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
                                        <h5 class="card-title">What is Lorem Ipsum?</h5>
                                        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
                                      </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card ds-card">
                                      {{< placeholder width="100%" height="130" class="card-img-top" text="Image cap" >}}
                                      <div class="card-body">
                                        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
                                        <h5 class="card-title">What is Lorem Ipsum?</h5>
                                        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
                                      </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card ds-card">
                                      {{< placeholder width="100%" height="130" class="card-img-top" text="Image cap" >}}
                                      <div class="card-body">
                                        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
                                        <h5 class="card-title">What is Lorem Ipsum?</h5>
                                        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card ds-card">
                                      {{< placeholder width="100%" height="130" class="card-img-top" text="Image cap" >}}
                                      <div class="card-body">
                                        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
                                        <h5 class="card-title">What is Lorem Ipsum?</h5>
                                        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
                                      </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card ds-card">
                                      {{< placeholder width="100%" height="130" class="card-img-top" text="Image cap" >}}
                                      <div class="card-body">
                                        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
                                        <h5 class="card-title">What is Lorem Ipsum?</h5>
                                        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
                                      </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card ds-card">
                                      {{< placeholder width="100%" height="130" class="card-img-top" text="Image cap" >}}
                                      <div class="card-body">
                                        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
                                        <h5 class="card-title">What is Lorem Ipsum?</h5>
                                        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card ds-card">
                                      {{< placeholder width="100%" height="130" class="card-img-top" text="Image cap" >}}
                                      <div class="card-body">
                                        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
                                        <h5 class="card-title">What is Lorem Ipsum?</h5>
                                        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
                                      </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card ds-card">
                                      {{< placeholder width="100%" height="130" class="card-img-top" text="Image cap" >}}
                                      <div class="card-body">
                                        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
                                        <h5 class="card-title">What is Lorem Ipsum?</h5>
                                        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
                                      </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card ds-card">
                                      {{< placeholder width="100%" height="130" class="card-img-top" text="Image cap" >}}
                                      <div class="card-body">
                                        <div class="date-time"><span>09:30am</span>&nbsp;&nbsp; | &nbsp;&nbsp;July 7, 2022</div>
                                        <h5 class="card-title">What is Lorem Ipsum?</h5>
                                        <a class="action-icon" href="#"><span>View More</span><i class="icon bb-icon-arrow  font-10 theme-color"></i></a>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{{< /example >}}

</div>


