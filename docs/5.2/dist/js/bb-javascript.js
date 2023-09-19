var emp = [{
    "e_name": 'Saket Kumar',
    "e_id": '51448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img": '../../../../docs/5.2/assets/brand/custom/boy.png"',
    },
    {
    "e_name": 'Bobin Kumar',
    "e_id": '52448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img": '../../../../docs/5.2/assets/brand/custom/boy.png"',
    },
    {
    "e_name": 'Amarnath Kumar',
    "e_id": '53448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img": '../../../../docs/5.2/assets/brand/custom/boy.png"',
    },
    {
    "e_name": 'Sanjeev Goel',
    "e_id": '54448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img": '../../../../docs/5.2/assets/brand/custom/boy.png"',
    }, {
    "e_name": 'Supriya Kumari',
    "e_id": '55448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img": '../../../../docs/5.2/assets/brand/custom/boy.png"',
    }, {
    "e_name": 'DEEPAK GUPTA',
    "e_id": '56448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img": '../../../../docs/5.2/assets/brand/custom/boy.png"',
    }, {
    "e_name": 'Anupama Gupta',
    "e_id": '57448564',
    "e_position": 'Project Manager',
    "e_band": 'E3',
    "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
    "e_loc": 'Noida',
    "e_img": '../../../../docs/5.2/assets/brand/custom/boy.png"',
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
            ${data.e_band}
            </div> 
            <div class="col-8">  
                
                ${data.e_du}
            </div> 
            <div class="col-4 text-right"> 
                ${data.e_loc}
            </div> 
        </div>
    </div>
    `;
    }
    }
  })
// var emp = [{
//     "e_name": 'Saket Kumar',
//     "e_id": '51448564',
//     "e_position": 'Project Manager',
//     "e_band": 'E3',
//     "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//     "e_loc": 'Noida',
//     },
//     {
//     "e_name": 'Bobin Kumar',
//     "e_id": '52448564',
//     "e_position": 'Project Manager',
//     "e_band": 'E3',
//     "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//     "e_loc": 'Noida',
//     },
//     {
//     "e_name": 'Amarnath Kumar',
//     "e_id": '53448564',
//     "e_position": 'Project Manager',
//     "e_band": 'E3',
//     "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//     "e_loc": 'Noida',
//     },
//     {
//     "e_name": 'Sanjeev Goel',
//     "e_id": '54448564',
//     "e_position": 'Project Manager',
//     "e_band": 'E3',
//     "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//     "e_loc": 'Noida',
//     }, {
//     "e_name": 'Supriya Kumari',
//     "e_id": '55448564',
//     "e_position": 'Project Manager',
//     "e_band": 'E3',
//     "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//     "e_loc": 'Noida',
//     }, {
//     "e_name": 'DEEPAK GUPTA',
//     "e_id": '56448564',
//     "e_position": 'Project Manager',
//     "e_band": 'E3',
//     "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//     "e_loc": 'Noida',
//     }, {
//     "e_name": 'Anupama Gupta',
//     "e_id": '57448564',
//     "e_position": 'Project Manager',
//     "e_band": 'E3',
//     "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//     "e_loc": 'Noida',
//     }
//     ]
    
//     var source = [{
//     "e_name": "Anupama Gupta",
//     "e_id": "51448564"
//     }, {
//     "e_name": "DEEPAK GUPTA",
//     "e_id": "51448564"
//     }]
    
    
//     var suggestions = new Bloodhound({
//     local: emp,
//     queryTokenizer: Bloodhound.tokenizers.whitespace,
//     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('e_name'),
//     identify: function (obj) {
//     return obj.e_id
//     }
//     })
    
//     var field = $('.typeahead')
//     field.typeahead({
//     hint: true,
//     highlight: true,
//     minLength: 1
//     }, {
//     name: 'e_id',
//     highlight: true,
//     displayKey: function (item) {
//     return item.e_name + ' (' + item.e_id + ')'
//     },
//     source: suggestions.ttAdapter(),
//     templates: {
//     suggestion: function (data) {
//     return '<div class="row autoEmprow">  <div class="col-6"><span class="auto_Ellipses auto_dark"> ' +
//     data.e_name + '  </span></div>  <div class="col-6 text-right auto_dark"> ' + data.e_id +
//     '</div>  <div class="col-6">  ' + data.e_position +
//     '  </div>   <div class="col-6 text-right">  ' + data.e_band +
//     '  </div>  <div class="col-6"><span class="auto_Ellipses">  ' + data.e_du +
//     '   </span></div>  <div class="col-6 text-right">   ' + data.e_loc + '  </div>  </div>';
//     }
//     }
//  })

// select dropdonw
$('.selectpicker').selectpicker({dropupAuto: false});

 //upload File Js
 Dropzone.autoDiscover = false;
 $("#dropzone").dropzone({
  url: "/ajax_file_upload_handler/",
  maxFilesize: 256, // MB
  filesizeBase: 1000,
  paramName: "file",
  maxFiles: 5,
  previewsContainer: '.dz-preview-template',
  dictDefaultMessage:`<span>Drag & Drop files here or <span class='text-purpel'>Choose to upload</span><small>TIFF/JPG/ GIF/ PNG/ BMP/ TXT/ PDF/ XP | 0MB / 100MB</small></span>`,
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


function setup(id) {
  let options = {
    url: "/ajax_file_upload_handler/",
    paramName: "file",
    thumbnailHeight: 210,
    thumbnailWidth: 140,
    maxFilesize: 1024,
    
    maxFiles: 5,
    dictResponseError: "Server not Configured",
    dictFileTooBig: "File too big ({{filesize}}MB). Must be less than {{maxFilesize}}MB.",
    dictCancelUpload: "",
    acceptedFiles: ".png,.jpg,.jpeg",
    init: function() {
      var self = this;
      //New file added
      self.on("addedfile", function(file) {
        console.log("new file added ", file);
      });
      // Send file starts
      self.on("sending", function(file) {
        console.log("upload started", file);
      });

      self.on("complete", function(file, response) {
        if (file.name !== "442343.jpg") {
          // this.removeFile(file);
        }
      });

      self.on("maxfilesreached", function(file, response) {
        alert("too big");
      });

      self.on("maxfilesexceeded", function(file, response) {
        this.removeFile(file);
      });

      self.on("addedfile", function(file) {
        const pattern = /\d{6}(\.)(jpg|jpeg|png)/;

        if (!pattern.test(file.name)) {
          //   this.removeFile(file);
        }
      });
    },
    accept: function(file, done) {
      const pattern = /\d{6}(\.)/;

      if (pattern.test(file.name)) {
        done();
      } else {
        done("File name not a valid admission number");
        return false;
      }
    },

    
    previewTemplate: `
<div class="dz-preview dz-file-preview">
  <div class="dz-image"><img data-dz-thumbnail /></div>
  <div class="dz-error-message"><i class="fa fa-warning">&nbsp;</i><span data-dz-errormessage></span></div>
  <div class="dz-filename"><span data-dz-name></span></div>
  <div class="dz-progress">
    <span class="dz-upload" data-dz-uploadprogress></span>
  </div>
  <div class="dz-remove">
    <a href="javascript:undefined;" data-dz-remove=""><i class="fa fa-trash-o"></i>&nbsp;<span>Remove</span></div>
</div>
`
  };

  var myDropzone = new Dropzone(`#${id}`, options);
}

setup("my-awesome-dropzone");

 //upload File Js end
 



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





  
// list group active li 
$("#activeList").on('click','li',function(){
    // remove classname 'active' from all li who already has classname 'active'
    $("#activeList li.active").removeClass("active"); 
    // adding classname 'active' to current click li 
    $(this).addClass("active"); 
  });


// password show onclick eye icon
$(document).ready(function () {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");

    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        
        // toggle the icon
        this.classList.toggle("bi-eye");
    });

    // prevent form submit
    // const form = document.querySelector("form");
    // form.addEventListener('submit', function (e) {
    //     e.preventDefault();
    // });

});



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






