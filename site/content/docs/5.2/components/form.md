---
layout: docs
title: Form
description: A form consists of a group of related fields and allows users to input information.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../form/">Code and Examples </a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link" href="../form-anatomy/">Guidelines  </a>
  </li>
</ul>


## 1. Input field (Without Icon)
<div class="grey-box p-0">

### 1.1. Input Label
{{< example >}}
<!--Input Label-->
<div class="form-group ds-input-without-icon">
    <label>Input Label</label>
    <input type="text" class="form-control" placeholder="Default input" />
</div> 
<!--Input Label-->
{{< /example >}}

### 1.2. Input Focus
{{< example >}}
<!--Input Focus-->
<div class="form-group ds-input-without-icon">
    <label>Input Focus</label>
    <input type="text" class="form-control" placeholder="Default input" />
</div> 
<!--Input Focus-->
{{< /example >}}

### 1.3. Input Read only
{{< example >}}
<!--Input Read only-->
<div class="form-group ds-input-without-icon">
    <label>Input Read only</label>
    <input type="text" class="form-control" placeholder="Default input" readonly />
</div> 
<!--Input Read only-->
{{< /example >}}

### 1.4. Input Disable
{{< example >}}
<!--Input Disable-->
<div class="form-group ds-input-without-icon">
    <label>Input Disable</label>
    <input type="text" class="form-control" value="Default input" placeholder="Default input" disabled />
</div> 
<!--Input Disable-->
{{< /example >}}

### 1.5. Input Success
{{< example >}}
<!--Input Success-->
<div class="form-group ds-input-without-icon">
    <label>Input Success</label>
    <input type="text" class="form-control success" value="Default input" placeholder="Default input" />
</div> 
<!--Input Success-->
{{< /example >}}

### 1.6. Input Error
{{< example >}}
<!--Input Error-->
<div class="form-group ds-input-without-icon">
    <label>Input Error</label>
    <input type="text" class="form-control error" value="Default input" placeholder="Default input" />
    <span class="error-msg">Enter numeric value only</span>
</div> 
<!--Input Error-->
{{< /example >}}
</div>

## 2. Input field (With Icon)
<div class="grey-box p-0">

### 2.1. Input Label
{{< example >}}
<!--Input Label-->
<div class="form-group ds-input-with-icon">
    <label>Input Label</label>
    <div class="input-icon">
        <input type="text" class="form-control" placeholder="Select Date" />
       <i class="i-icon"> <img  alt="" src="../../assets/brand/custom/icon-black.png" /></i>
    </div>
</div> 
<!--Input Label-->
{{< /example >}}

### 2.2. Input Focus
{{< example >}}
<!--Input Focus-->
<div class="form-group ds-input-with-icon">
    <label>Input Focus</label>
    <div class="input-icon">
    <input type="text" class="form-control" placeholder="Select Date" />
    <i class="i-icon"> <img  alt="" src="../../assets/brand/custom/icon-black.png" /></i>
    </div>
</div> 
<!--Input Focus-->
{{< /example >}}

### 2.3. Input Read only
{{< example >}}
<!--Input Read only-->
<div class="form-group ds-input-with-icon">
    <label>Input Read only</label>
    <div class="input-icon">
    <input type="text" class="form-control" placeholder="Select Date" readonly />
    <i class="i-icon"> <img  alt="" src="../../assets/brand/custom/icon-black.png" /></i>
    </div>
</div> 
<!--Input Read only-->
{{< /example >}}

### 2.4. Input Disable
{{< example >}}
<!--Input Disable-->
<div class="form-group ds-input-with-icon">
    <label>Input Disable</label>
    <div class="input-icon">
    <input type="text" class="form-control" value="Default input" placeholder="Default input" disabled />
    <i class="i-icon"> <img  alt="" src="../../assets/brand/custom/icon-black.png" /></i>
    </div>
</div> 
<!--Input Disable-->
{{< /example >}}

### 2.5. Input Success
{{< example >}}
<!--Input Success-->
<div class="form-group ds-input-with-icon">
    <label>Input Success</label>
    <div class="input-icon">
    <input type="text" class="form-control success" value="Default input" placeholder="Default input" />
    <i class="i-icon"> <img  alt="" src="../../assets/brand/custom/icon-black.png" /></i>
    </div>
</div> 
<!--Input Success-->
{{< /example >}}

### 2.6. Input Error
{{< example >}}
<!--Input Error-->
<div class="form-group ds-input-with-icon">
    <label>Input Error</label>
    <div class="input-icon">
    <input type="text" class="form-control error" value="Default input" placeholder="Default input" />
    <span class="error-msg">Enter numeric value only</span>
    <i class="i-icon"> <img  alt="" src="../../assets/brand/custom/icon-black.png" /></i>
    </div>
</div> 
<!--Input Error-->
{{< /example >}}

### 2.7 Input (Input field floating style)
{{< example >}}
<!--Input -->
<div class="form-group ds-input-floting">
    <div class="input-icon">
        <div class="form-floating">
            <input type="Input" class="form-control" id="floatingInput" placeholder="Input floating">
            <label for="floatingInput">Input floating</label>
        </div>
        <!-- <i class="i-icon icon-outline-view"></i> -->
    </div>
</div> 
<!--Input-->
{{< /example >}}
</div>

## 3. Password (Input field)
<div class="grey-box p-0">

### 3.1. Password Label
{{< example >}}
<!--Password Label-->
<div class="form-group ds-input-password-icon">
    <label>Password Label</label>
    <div class="input-icon">
        <input type="Password" class="form-control" id="password" placeholder="Password" />
        <i class="i-icon icon-outline-view" id="togglePassword"></i>
    </div>
</div> 
<!--Password Label-->
{{< /example >}}

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
// password show onclick eye icon
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});
```

### 3.2. Password Focus
{{< example >}}
<!--Password Focus-->
<div class="form-group ds-input-password-icon">
    <label>Password Focus</label>
    <div class="input-icon">
    <input type="Password" class="form-control" placeholder="Password" />
    <i class="i-icon icon-outline-view"></i>
    </div>
</div> 
<!--Password Focus-->
{{< /example >}}

### 3.3. Password Read only
{{< example >}}
<!--Password Read only-->
<div class="form-group ds-input-password-icon">
    <label>Password Read only</label>
    <div class="input-icon">
    <input type="Password" class="form-control" placeholder="Password" readonly />
    <i class="i-icon icon-outline-view"></i>
    </div>
</div> 
<!--Password Read only-->
{{< /example >}}

### 3.4. Password Disable
{{< example >}}
<!--Password Disable-->
<div class="form-group ds-input-password-icon">
    <label>Password Disable</label>
    <div class="input-icon">
    <input type="Password" class="form-control" value="Default input" placeholder="Password" disabled />
    <i class="i-icon icon-outline-view"></i>
    </div>
</div> 
<!--Password Disable-->
{{< /example >}}

### 3.5. Password Success
{{< example >}}
<!--Password Success-->
<div class="form-group ds-input-password-icon">
    <label>Password Success</label>
    <div class="input-icon">
    <input type="Password" class="form-control success" value="Default input" placeholder="Password" />
    <i class="i-icon icon-outline-view"></i>
    </div>
</div> 
<!--Password Success-->
{{< /example >}}

### 3.6. Password Error
{{< example >}}
<!--Password Error-->
<div class="form-group ds-input-password-icon">
    <label>Password Error</label>
    <div class="input-icon">
    <input type="Password" class="form-control error" value="Default input" placeholder="Password" />
    <span class="error-msg">Enter numeric value only</span>
    <i class="i-icon icon-outline-view"></i>
    </div>
</div> 
<!--Password Error-->
{{< /example >}}

### 3.7 Password (Input field floating style)
{{< example >}}
<!--Password -->
<div class="form-group ds-input-floting">
    <div class="input-icon">
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <i class="i-icon icon-outline-view"></i>
    </div>
</div> 
<!--Password-->
{{< /example >}}



</div>


## 4. Dropdown

<div class="download-assets mt-20">
    <h6>Please Include assets for select dropdown</h6>
    <div class="mt-10 mb-20">
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/js//bootstrap-select.min.js" download>bootstrap-select.min.js</a>
        </p>
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/css/bootstrap-select.min.css" download>bootstrap-select.min.css</a>
        </p>
    </div>
</div>

<div class="grey-box p-0">

### 4.1. Dropdown Label
{{< example >}}
<!--Dropdown Label-->
<div class="form-group ds-select-dropdown">
    <label>Input Label</label>
    <section class="withLable">
        <select class="selectpicker" title="Select">
            <option>Option 1 </option>
            <option>Option 2 </option>
            <option>Option 3 </option>
            <option>Option 4 </option>
        </select>
    </section>
</div> 
<!--Dropdown Label-->
{{< /example >}}

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js

// select dropdonw
$('.selectpicker').selectpicker({dropupAuto: false});

```

### 4.2. Dropdown Focus
{{< example >}}
<!--Dropdown Focus-->
<div class="form-group ds-select-dropdown">
    <label>Input Label</label>
    <section class="withLable">
        <select class="selectpicker" title="Select">
            <option>Option 1 </option>
            <option>Option 2 </option>
            <option>Option 3 </option>
            <option>Option 4 </option>
        </select>
    </section>
</div> 
<!--Dropdown Focus-->
{{< /example >}}


### 4.3. Dropdown Disable
{{< example >}}
<!--Dropdown Disable-->
<div class="form-group ds-select-dropdown">
    <label>Input Label</label>
    <section class="withLable">
        <select class="selectpicker" title="Select" disabled>
            <option>Option 1 </option>
            <option>Option 2 </option>
        </select>
    </section>
</div> 
<!--Dropdown Disable-->
{{< /example >}}

### 4.4. Dropdown multiple select
{{< example >}}
<!--Dropdown multiple-->
<div class="form-group ds-select-dropdown-multiple">
    <label>Input Label</label>
    <section class="withLable">
        <select class="selectpicker" title="Select" multiple>
            <option>E1 </option>
            <option>E2 </option>
            <option>E3 </option>
            <option>E4 </option>
            <option>E5 </option>
        </select>
    </section>
</div> 
<!--Dropdown multiple-->
{{< /example >}}

</div>

## 5. Radio and Checkbox
<div class="grey-box p-0">

### 5.1. Radio
{{< example >}}
<!--Radio Label-->
<div class="form-group ds-radio withLable">
    <label class="label"> Radio </label>
    <label class="radio-label"> <input type="radio" name="radio"> <span class="radio-custom"></span> <span class="radio-custom"></span> <span class="inner-label">Radio btn</span> </label>
    <label class="radio-label"> <input type="radio" name="radio"> <span class="radio-custom"></span> <span class="radio-custom"></span> <span class="inner-label">Radio btn</span></label>
</div> 
<!--Radio Label-->
{{< /example >}}

### 5.2. Checkbox 
{{< example >}}
<!--Checkbox Label-->
<div class="form-group ds-checkbox withLable">
    <label class="label"> Checkbox </label>
    <label class="checkbox-label"> <input type="checkbox"> <span class="checkbox-custom"></span> <span class="inner-label"> checkbox </span></label>
    <label class="checkbox-label"> <input type="checkbox"> <span class="checkbox-custom"></span> <span class="inner-label"> checkbox </span></label>
</div> 
<!--Checkbox Label-->
{{< /example >}}

### 5.3 Radio
{{< example >}}
<!--Radio Label-->
<div class="form-group ds-radio withLable">
    <label class="label"> Radio </label>
    <label class="radio-label ds-blue-radio"> <input type="radio" name="radio"> <span class="radio-custom"></span> <span class="inner-label">Radio btn</span></label>
    <label class="radio-label ds-blue-radio"> <input type="radio" name="radio"> <span class="radio-custom"></span> <span class="inner-label">Radio btn</label>
</div> 
<!--Radio Label-->
{{< /example >}}

### 5.4 Checkbox 
{{< example >}}
<!--Checkbox Label-->
<div class="form-group ds-checkbox withLable">
    <label class="label"> Checkbox </label>
    <label class="checkbox-label ds-blue-chekbox"> <input type="checkbox"> <span class="checkbox-custom"></span> <span class="inner-label"> checkbox </span></label>
    <label class="checkbox-label ds-blue-chekbox"> <input type="checkbox"> <span class="checkbox-custom"></span> <span class="inner-label"> checkbox </span></label>
</div> 
<!--Checkbox Label-->
{{< /example >}}
</div>

## 6. File Input
<div class="grey-box p-0">

### 6.1 File Input
{{< example >}}
<!--File Input Label-->
<div class="form-group ds-file-input">
    <label class="label"> File Input </label>
    <div class="file-drop-area">
    <span class="file-box">
    <img src="/docs/5.2/assets/brand/custom/upload.png" width="16px" alt="" /></span>
        <span class="file-msg">Drag & Drop files here or&nbsp; </span>
        <span class="fake-link"> Choose to upload</span>
        <input class="file-input" type="file" multiple>
    </div>
</div> 
<!--File Input Label-->
{{< /example >}}

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
//\\\\\\\ custom input type file uploader
var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');

// highlight drag area
$fileInput.on('dragenter focus click', function() {
  $droparea.addClass('is-active');
});

// back to normal state
$fileInput.on('dragleave blur drop', function() {
  $droparea.removeClass('is-active');
});

// change inner text
$fileInput.on('change', function() {
  var filesCount = $(this)[0].files.length;
  var $textContainer = $(this).prev();

  if (filesCount === 1) {
    // if single file is selected, show file name
    var fileName = $(this).val().split('\\').pop();
    $textContainer.text(fileName);
  } else {
    // otherwise show number of files
    $textContainer.text(filesCount + ' files selected');
  }
});
//\\\\\\\ custom input type file uploader
```

### 6.2 File Input Disable
{{< example >}}
<!--File Input Label-->
<div class="form-group ds-file-input">
    <label class="label"> File Input </label>
    <div class="file-drop-area disabled">
    <span class="file-box">
    <img src="/docs/5.2/assets/brand/custom/upload.png" width="16px" alt="" /></span>
        <span class="file-msg">Drag & Drop files here or&nbsp; </span>
        <span class="fake-link"> Choose to upload</span>
        <input class="file-input" type="file" multiple disabled>
    </div>
</div> 
<!--File Input Label-->
{{< /example >}}

### 6.3 File Input Success
{{< example >}}
<!--File Input Label-->
<div class="form-group ds-file-input">
    <label class="label"> File Input </label>
    <div class="file-drop-area success">
    <span class="file-box">
    <img src="/docs/5.2/assets/brand/custom/upload.png" width="16px" alt="" /></span>
        <span class="file-msg">Drag & Drop files here or&nbsp; </span>
        <span class="fake-link"> Choose to upload</span>
        <input class="file-input" type="file" multiple>
    </div>
</div> 
<!--File Input Label-->
{{< /example >}}

### 6.4 File Input Error
{{< example >}}
<!--File Input Label-->
<div class="form-group ds-file-input ">
    <label class="label"> File Input </label>
    <div class="file-drop-area error">
    <span class="file-box">
    <img src="/docs/5.2/assets/brand/custom/upload.png" width="16px" alt="" /></span>
        <span class="file-msg">Drag & Drop files here or&nbsp; </span>
        <span class="fake-link"> File-Name.filetype</span>
        <input class="file-input" type="file" multiple>
    </div>
    <span class="error-msg d-none">File size exceed the limit</span>
</div> 
<!--File Input Label-->
{{< /example >}}

### 6.5 image input uploader
{{< example >}}
<!--File Input Label-->
<div class="ds-image-uploader">
    <div class="ds-panel-uploader file-drop-area w-100">
        <div class="uploaded_file_view" id="uploaded_view">
            <span class="file_remove">X</span>
        </div>
        <div class="btn_upload">
            <span class="upload-img">
                <img src="../../../../docs/5.2/assets/brand/custom/upload.png" width="16px" alt="" />
            </span>
            <input type="file" id="upload_file" name="">
            Drag & Drop files here or &nbsp;<span> Choose to upload</span>
        </div>
        <div class="button_outer">
            <div class="processing_bar"></div>
            <div class="success_box"></div>
        </div>
    </div>
    <div class="error_msg"></div>
</div>
<!--File Input Label-->
{{< /example >}}

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
// image file uploader
var btnUpload = $("#upload_file"),
	btnOuter = $(".button_outer");
	btnUpload.on("change", function(e){
		var ext = btnUpload.val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			$(".error_msg").text("Not an Image...");
		} else {
			$(".error_msg").text("");
			btnOuter.addClass("file_uploading");
			setTimeout(function(){
				// btnOuter.addClass("file_uploaded");
			},3000);
			var uploadedFile = URL.createObjectURL(e.target.files[0]);
			var fileName = $(this).val().split('\\').pop();
			setTimeout(function(){
				$("#uploaded_view").append('<strong>'+ fileName +'</strong><div class="upload-profile"><img src="'+uploadedFile+'" /></div>').addClass("show");
			},3500);
		}
	});
	$(".file_remove").on("click", function(e){
		$("#uploaded_view").removeClass("show");
		$("#uploaded_view").find("img").remove();
		$("#uploaded_view").find("strong").remove();
		btnOuter.removeClass("file_uploading");
		btnOuter.removeClass("file_uploaded");
	});
```

</div>

## 7. Date and time picker

<div class="download-assets mt-20">
    <h6>Please Include assets for date and time</h6>
    <div class="mt-10 mb-20">
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/js/daterangepicker.js" download>daterangepicker.js</a>
        </p>
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/js/custom-datepicker.js" download>custom-datepicker.js</a>
        </p>
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/css/daterangepicker.css" download>daterangepicker.css</a>
        </p>
    </div>
</div>
<div class="grey-box p-0">


### 7.1. single Input date
{{< example >}}
<!--File Input Label-->
<div class="form-group ds-file-input">
    <label class="label">Input date single</label>
    <div class="datePicker">
        <input type="text" class="form-control" id="single" autocomplete="off">
        <i class="icon-Calendarfill"></i>
    </div>
</div> 
<!--File Input Label-->
{{< /example >}}

### 7.2. Input Date with range
{{< example >}}
<!--File Input Label-->
<div class="form-group ds-file-input">
    <label class="label">Input Date</label>
   <div class="datePicker">
        <input type="text" id="range" class="form-control" value="23-Sep-20 To 15-Oct-20">
        <i class="icon-Calendarfill"></i>
    </div>
</div> 
<!--File Input Label-->
{{< /example >}}

### 7.3. Input Date with time
{{< example >}}
<!--File Input Label-->
<div class="form-group ds-file-input">
    <label class="label">Input Date with time</label>
 <div class="datePicker">
        <input type="text" id="singleTime" class="form-control">
        <i class="icon-Calendarfill"></i>
    </div>
</div> 
<!--File Input Label-->
{{< /example >}}

### 7.4. Time range picker
{{< example >}}
<!--File Input Label-->
<div class="form-group ds-file-input">
    <label class="label">Time range</label>
    <div class="rangePciker w-100">
        <input type="text" name="datetimes" class="form-control " autocomplete="off">
        <i class="icon-Time"></i>
    </div>
</div> 
<!--File Input Label-->
{{< /example >}}

### 7.5. Time picker (single)

{{< example >}}
<div class="datePicker timePicker dropdown">
  <input placeholder="Start Time" class="form-control" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="icon-Time"></i>
  <div class="dropdown-menu timeDrop" aria-labelledby="dropdownMenuButton1">
                <a class="dropdown-item" href="javascript:void()">10:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">10:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">11:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">11:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">12:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">12:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">01:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">01:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">02:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">02:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">03:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">03:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">04:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">04:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">05:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">05:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">06:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">06:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">07:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">07:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">08:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">08:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">09:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">09:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">10:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">10:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">11:00 PM</a>
                <a class="dropdown-item" href="javascript:void()">11:30 PM</a>
                <a class="dropdown-item" href="javascript:void()">12:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">12:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">01:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">01:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">02:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">02:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">03:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">03:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">04:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">04:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">05:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">05:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">06:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">06:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">07:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">07:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">08:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">08:30 AM</a>
                <a class="dropdown-item" href="javascript:void()">09:00 AM</a>
                <a class="dropdown-item" href="javascript:void()">09:30 AM</a>
            </div>
</div>
{{< /example >}}

### 7.1. Time picker with range
{{< example >}}
<div class="form-group ds-file-input">
    <label class="label">Time picker</label>
    <div class="rangePciker">
            <div class="row m-0 align-items-center">
                <div class="dropdown   datePicker timePicker">
                    <input placeholder="Start Time" class="form-control noFcs" type="text" id="range1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="dropdown-menu timeDrop" aria-labelledby="range1">
                        <a class="dropdown-item" href="javascript:void()">10:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">10:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">11:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">11:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">12:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">12:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">01:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">01:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">02:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">02:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">03:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">03:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">04:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">04:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">05:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">05:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">06:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">06:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">07:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">07:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">08:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">08:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">09:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">09:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">10:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">10:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">11:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">11:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">12:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">12:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">01:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">01:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">02:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">02:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">03:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">03:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">04:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">04:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">05:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">05:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">06:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">06:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">07:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">07:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">08:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">08:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">09:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">09:30 AM</a>
                    </div>
                </div>
                <div class="timeSep">-</div>
                <div class="dropdown datePicker timePicker">
                    <input placeholder="End Time" class="form-control noFcs" type="text" id="range2" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="dropdown-menu timeDrop" aria-labelledby="range2">
                        <a class="dropdown-item" href="javascript:void()">10:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">10:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">11:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">11:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">12:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">12:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">01:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">01:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">02:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">02:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">03:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">03:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">04:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">04:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">05:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">05:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">06:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">06:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">07:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">07:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">08:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">08:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">09:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">09:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">10:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">10:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">11:00 PM</a>
                        <a class="dropdown-item" href="javascript:void()">11:30 PM</a>
                        <a class="dropdown-item" href="javascript:void()">12:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">12:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">01:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">01:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">02:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">02:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">03:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">03:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">04:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">04:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">05:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">05:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">06:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">06:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">07:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">07:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">08:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">08:30 AM</a>
                        <a class="dropdown-item" href="javascript:void()">09:00 AM</a>
                        <a class="dropdown-item" href="javascript:void()">09:30 AM</a>
                    </div>
                </div>
            </div>
            <i class="icon-Time"></i>
        </div>
</div> 
{{< /example >}} -->
</div>

## 8 Employee Lookup (Information)

<div class="download-assets mt-20">
    <h6>Please Include assets for employee lookup</h6>
    <div class="mt-10 mb-20">
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/js/typeahead.bundle.min.js" download>typeahead.bundle.min.js</a>
        </p>
    </div>
</div>

<div class="grey-box p-0">

{{< example >}}
<!--lookup Input Label-->
<div class="form-group ds-autoComplete_Emp ds-input-with-icon">
    <label>Name / SAP ID</label>
    <div id="employee-info" class="autoComplete_Emp input-icon">
        <input class="typeahead form-control" type="text" placeholder="Type here to search by SAP ID/Name" />
        <!-- <button class="autu_Btn icon-Search"></button> -->
        <i class="i-icon icon-outline-search"></i>
    </div>
</div> 
<!--lookup Input Label-->
{{< /example >}}

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
// emp	lookup
var emp = [{
    "e_name": 'Saket Kumar',
    "e_id": '51448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img":'assets/images/boy.png',
    },
    {
    "e_name": 'Bobin Kumar',
    "e_id": '52448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img":'assets/images/boy.png',
    },
    {
    "e_name": 'Amarnath Kumar',
    "e_id": '53448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img":'assets/images/boy.png',
    },
    {
    "e_name": 'Sanjeev Goel',
    "e_id": '54448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img":'assets/images/boy.png',
    }, {
    "e_name": 'Supriya Kumari',
    "e_id": '55448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img":'assets/images/boy.png',
    }, {
    "e_name": 'DEEPAK GUPTA',
    "e_id": '56448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img":'assets/images/boy.png',
    }, {
    "e_name": 'Anupama Gupta',
    "e_id": '57448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img":'assets/images/boy.png',
    }
    ]

    var source = [{
    "e_name": "Anupama Gupta",
    "e_id": "51448564"
    }, {
    "e_name": "DEEPAK GUPTA",
    "e_id": "51448564"
    }]


    var suggestions = new Bloodhound({
    local: emp,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('e_name'),
    identify: function (obj) {
    return obj.e_id
    }
    })

    var field = $('.typeahead')
    field.typeahead({
    hint: true,
    highlight: true,
    minLength: 1
    }, {
    name: 'e_id',
    highlight: true,
    displayKey: function (item) {
    return item.e_name + ' (' + item.e_id + ')'
    },
    source: suggestions.ttAdapter(),
    templates: {
    suggestion: function (data) {
    return `
    <div class="row autoEmprow"> 
        <div class="img">
            <img src="${data.e_img}" alt="" />
        </div>
        <div class="text">
            <div class="col-8">
                <span class="auto_Ellipses auto_dark"> 
                    ${data.e_name}  
                </span>
            </div>  
            <div class="col-4 text-right auto_dark"> 
                ${data.e_id}
            </div>  
            <div class="col-8">  
                ${data.e_position}
            </div> 
            <div class="col-4 text-right"> 
                ${data.e_loc}
            </div> 
        </div>
    </div>`;
    }
    }
})

```
</div>

## 9 File Uploader (dropzone)

<div class="download-assets mt-20">
    <h6>Please Include assets for employee lookup</h6>
    <div class="mt-10 mb-20">
        <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/js/dropzone.min.js" download>dropzone.min.js</a>
        </p>
         <p class="dwnlodFile m-0">
            <a href="../../../../docs/5.2/dist/css/dropzone.css" download>dropzone.css</a>
        </p>
    </div>
</div>

<div class="grey-box p-0">

{{< example >}}
<!--lookup Input Label-->
<div class="form-group ds-dropzone ds-input-withouto-icon">
    <label>Name / SAP ID</label>
    <div class="upload">
        <div class="dropzone" id="dropzone">
            <div class="uploadList">
                <span class="gcs-uploadBill upload-icon"><img src="../../../../docs/5.2/assets/brand/custom/upload.png"></span>
            </div>
        </div>
    </div> 
</div> 
<div class="dz-preview-template">
    <!-- <span class="no-files-uploaded">No documents uploaded</span> -->
</div>
<!--lookup Input Label-->
{{< /example >}}

<div class="d-flex align-items-center highlight-toolbar bg-light ps-3 pe-2 py-1">
    <small class="font-monospace text-muted text-uppercase">JS</small>
    <div class="d-flex ms-auto">
    </div>
</div>

```js
//dropzone uploader File Js
 Dropzone.autoDiscover = false;
 $("#dropzone").dropzone({
  url: "/ajax_file_upload_handler/",
  maxFilesize: 256, // MB
  filesizeBase: 1000,
  paramName: "file",
  maxFiles: 5,
  previewsContainer: '.dz-preview-template',
  dictDefaultMessage:
  `
  <span>
    Drag & Drop files here or <span class='text-purpel'>Choose to upload</span>
    <small>TIFF/JPG/ GIF/ PNG/ BMP/ TXT/ PDF/ XP | 0MB / 100MB</small>
  </span>
  `,
  previewTemplate: 
  `
    <div class="dz-preview dz-file-preview">
      <div class="dz-image"><span class="imgIcon"><img data-dz-thumbnail /><span></div>
      <div class="dz-details">
      <div class="dz-filename"><span data-dz-name></span></div>
      <div class="dz-size"><span data-dz-size></span></div>
      </div>
      <div class="dz-progress">
        <span class="dz-upload" data-dz-uploadprogress></span>
      </div>
      <a class="dz-remove" href="javascript:undefined;" data-dz-remove><i class="closeP icon icon-outline-cancel">&nbsp;</i></a>
      <div class="dz-error-message"><i class="fa fa-warning">&nbsp;</i><span data-dz-errormessage></span></div>
    </div>
    `
});

```
</div>