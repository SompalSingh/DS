---
layout: docs
title: Pagination
description: Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../pagination/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../pagination-anatomy/">Guidelines  </a>
  </li>
</ul>


## 1 Pagination Small
<div class="grey-box p-0">

### 1.1. Without Loader
{{< example >}}
<!--Small pagination-->
<nav class="ds-pagination without-loader small-pagination" aria-label="Page navigation ">
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
<!--Small pagination-->
{{< /example >}}

### 1.2. With Loader
{{< example >}}
<!--Small Buttons Disable-->
<nav class="ds-pagination with-loader small-pagination" aria-label="Page navigation pagination">
<select class="form-select" aria-label="Default select example">
  <option selected>10</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  
</select>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&lsaquo;</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&rsaquo;</span>
      </a>
    </li>
  </ul>
</nav>
<!--Small Buttons Disable-->
{{< /example >}}

</div>
<div class="d-none">
## 2. Pagination Medium
<div class="grey-box p-0">

### 2.1 Pagination Medium
{{< example >}}

<nav class="ds-pagination without-loader medium-pagination" aria-label="Page navigation ">
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

{{< /example >}}

### 2.2 Pagination Medium with Page No.
{{< example >}}

<nav class="ds-pagination with-loader medium-pagination" aria-label="Page navigation pagination">
<select class="form-select" aria-label="Default select example">
  <option selected>10</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  
</select>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&lsaquo;</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&rsaquo;</span>
      </a>
    </li>
  </ul>
</nav>

</div>



</div>