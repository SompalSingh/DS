$(document).ready(function () {
    oTable = $('#withIcon').DataTable({
      //bFilter: true,  
      "ordering": false,
      "dom": 'tipl',
      "oLanguage": {
        "oPaginate": {
          "sNext": "<i class='pg-icon icon-Arrowright2fill'></i>",
          "sPrevious": "<i class='pg-icon icon-Arrowleft2'></i>"
        }
      },
      scrollX: true,
      fixedColumns: {
        leftColumns: 1,
        rightColumns: 1
      },
      language: {
        sLengthMenu: "_MENU_"
      }
    });
  
  
  
    oTable2 = $('#withoutIcon').DataTable({
      //bFilter: true,  
      "ordering": false,
      "dom": 'tipl',
      "oLanguage": {
        "oPaginate": {
          "sNext": "<i class='pg-icon icon-Arrowright2fill'></i>",
          "sPrevious": "<i class='pg-icon icon-Arrowleft2'></i>"
        },
      },
      scrollX: true,
      fixedColumns: {
        leftColumns: 1,
        rightColumns: 1
      },
      language: {
        sLengthMenu: "_MENU_"
      }
    });
  
  
    oTable3 = $('#withLine').DataTable({
      ordering: true,
      // container: 'body',
      responsive: true,
      dom: 'tipl',
      oLanguage: {
        oPaginate: {
          sNext: "<i class='pg-icon icon-Arrowright2fill'></i>",
          sPrevious: "<i class='pg-icon icon-Arrowleft2'></i>"
        },
      },
      language: {
        sLengthMenu: "_MENU_"
      }
    });
  
  });

  
  $(document).ready(function () {
    $('[data-bs-toggle="popover"]').popover({
        placement: 'bottom',
        container: 'body',
        customClass:'cus-popover'
    });
});

    $(document).on({mouseenter: function () {
      trIndex = $(this).index()+1;
          $("#withLine_wrapper table.dataTable").each(function(index) {
              $(this).find("tr:eq("+trIndex+")").each(function(index) {
              $(this).find("td").addClass("hover-blue");
          });
      });
      },
      mouseleave: function () {
      trIndex = $(this).index()+1;
          $("#withLine_wrapper table.dataTable").each(function(index) {
              $(this).find("tr:eq("+trIndex+")").each(function(index) {
              $(this).find("td").removeClass("hover-blue");
          });
      });
      }
  }, "#withLine_wrapper tr");

  $(document).on({
      mouseenter: function () {
      trIndex = $(this).index()+1;
          $("#withoutIcon_wrapper table.dataTable").each(function(index) {
              $(this).find("tr:eq("+trIndex+")").each(function(index) {
              $(this).find("td").addClass("hover-grey");
          });
      });
      },
      mouseleave: function () {
      trIndex = $(this).index()+1;
          $("#withoutIcon_wrapper table.dataTable").each(function(index) {
              $(this).find("tr:eq("+trIndex+")").each(function(index) {
              $(this).find("td").removeClass("hover-grey");
          });
      });
      }
  }, "#withoutIcon_wrapper tr");

  $(document).on({
    mouseenter: function () {
    trIndex = $(this).index()+1;
        $("#withIcon_wrapper table.dataTable").each(function(index) {
            $(this).find("tr:eq("+trIndex+")").each(function(index) {
            $(this).find("td").addClass("hover-grey");
        });
    });
    },
    mouseleave: function () {
    trIndex = $(this).index()+1;
        $("#withIcon_wrapper table.dataTable").each(function(index) {
            $(this).find("tr:eq("+trIndex+")").each(function(index) {
            $(this).find("td").removeClass("hover-grey");
        });
    });
    }
}, "#withIcon_wrapper tr");
      
  
  