---
layout: docs
title: Table
description: Data tables are used to organize and display data efficiently. The data table component allows for customization with additional functionality, as needed by your product’s users.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../tables/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../tables-anatomy/">Guidelines  </a>
  </li>
</ul>

<div class="download-assets mt-20">
    <h6>To use the DataTables library in your HTML code, please make sure to include the following library files:</h6>
    <div class="mt-10 mb-20">
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/js/jquery.dataTables.min.js" download>jquery.dataTables.min.js</a>
        </p>
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/js/dataTables.fixedColumns.min.js" download>dataTables.fixedColumns.min.js</a>
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/js/custom-datatable.js" download>custom-datatable.js</a>
        </p>
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/css/jquery.dataTables.min.css" download>jquery.dataTables.min.css</a>
        </p>
    </div>
</div>

## 1. Heading with Icons

<div class="grey-box p-0">
{{< example >}}
<!--Table with action link-->
<div class="gridHeader row">
    <div class="col ds-font-16 font-600">Grid Heading</div>
    <div class="col text-right">
    <ul>
        <li data-bs-toggle="tooltip" data-bs-title="Search" data-bs-placement="top"><i class="icon-Search"></i></li>
        <li data-bs-toggle="tooltip" data-bs-title="Filter" data-bs-placement="top"><i class="icon-Filter"></i></li>
        <li data-bs-toggle="tooltip" data-bs-title="Download" data-bs-placement="top"><i class="icon-Download"></i></li>
    </ul>
    </div>
</div>
<div class="common_table">
    <table id="withIcon" class="glb_datable">
        <thead>
            <tr>
                <th>SAP ID</th>
                <th>Employee Name</th>
                <th>Band</th>
                <th>Country</th>
                <th class="amountCell">Amount (in INR)</th>
                <th>Project Code/Project</th>
                <th>Quarter</th>
                <th>Stage</th>
                <th>Extra Coloumn</th>
                <th>Extra Coloumn</th>
                <th>Extra Coloumn</th>
                <th>Extra Coloumn</th>
                <th>Extra Coloumn</th>
                <th>Extra Coloumn</th>
                <th>Extra Coloumn</th>
                <th>Extra Coloumn</th>
                <th>Extra Coloumn</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td>JAS-20</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td><button type="button" class="thr_Dot" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" data-bs-html="true" data-bs-content="<ul class='gridAction'><li><a href='javascript:void(0)'><i class='icon-View'></i>VIEW</a></li><li><a href='javascript:void(0)'><i class='icon-Edit'></i>EDIT</a></li><li><a href='javascript:void(0)'><i class='icon-outline-delete'></i>DELETE</a></li></ul>"><i class="icon-Moreverticalfill"></i></button>
                </td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td>JAS-20</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td><button type="button" class="thr_Dot" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" data-bs-html="true" data-bs-content="<ul class='gridAction'><li><a href='javascript:void(0)'><i class='icon-View'></i> VIEW</a></li><li><a href='javascript:void(0)'><i class='icon-Edit'></i> EDIT</a></li><li><a href='javascript:void(0)'><i class='icon-outline-delete'></i> DELETE</a></li></ul>"><i class="icon-Moreverticalfill"></i></button>
                </td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td>JAS-20</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td><button type="button" class="thr_Dot" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" data-bs-html="true" data-bs-content="<ul class='gridAction'><li><a href='javascript:void(0)'><i class='icon-View'></i> VIEW</a></li><li><a href='javascript:void(0)'><i class='icon-Edit'></i> EDIT</a></li><li><a href='javascript:void(0)'><i class='icon-outline-delete'></i> DELETE</a></li></ul>"><i class="icon-Moreverticalfill"></i></button>
                </td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td>JAS-20</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Goals</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td>Extra DATA</td>
                <td><button type="button" class="thr_Dot" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" data-bs-html="true" data-bs-content="<ul class='gridAction'><li><a href='javascript:void(0)'><i class='icon-View'></i> VIEW</a></li><li><a href='javascript:void(0)'><i class='icon-Edit'></i> EDIT</a></li><li><a href='javascript:void(0)'><i class='icon-outline-delete'></i> DELETE</a></li></ul>"><i class="icon-Moreverticalfill"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!--Table with action link-->

{{< /example >}}

</div>

## 2. Without Icon

<div class="grey-box p-0">

{{< example >}}

<div class="gridHeader row">
    <div class="col ds-font-16 font-600">Grid Heading</div>
</div>
<!--Table without action link-->
  <div class="common_table">
    <table id="withoutIcon" class="glb_datable" style="width:100%">
        <thead>
            <tr>
                <th>SAP ID</th>
                <th>Employee Name</th>
                <th>Band</th>
                <th>Country</th>
                <th class="amountCell">Amount (in INR)</th>
                <th>Project Code/Project</th>
                <th>View/Edit</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166666</td>
                <td> <span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
        </tbody>
    </table>
</div>

<!--Table without action link-->

{{< /example >}}

</div>

## 3. Line Table

<div class="grey-box p-0">

{{< example >}}

<!--Table with action link-->
<div class="common_table line-tbl">
    <table id="withLine" class="table glb_datable">
        <thead>
            <tr>
                <th>SAP ID</th>
                <th>Employee Name</th>
                <th>Band</th>
                <th>Country</th>
                <th class="amountCell">Amount (in INR)</th>
                <th>Project Code/Project</th>
                <th>View/Edit</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>54166666</td>
                <td><span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166667</td>
                <td><span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166668</td>
                <td><span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166669</td>
                <td><span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
            <tr>
                <td>54166670</td>
                <td><span class="nameCellElli"> Deepak Gupta</span></td>
                <td>E2</td>
                <td>GEO</td>
                <td class="amountCell">25,000</td>
                <td>Z/000777/GEO Onboarding</td>
                <td><a><i class="icon-edit2"></i></a></td>
            </tr>
    </table>
</div>
<!--Table with action link-->
{{< /example >}}

</div>
