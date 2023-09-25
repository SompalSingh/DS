$(function () {
    moment.updateLocale('en', {
      weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"]
    });
    $('#startDate').daterangepicker({
        showDropdowns:true,
        singleDatePicker: true,
        autoUpdateInput: false,
        autoclose: true,
        autoApply:true,
        drops:'up',
        locale: {
            format: 'DD-MMM-YY',
            direction: 'single-picker'
        }
      }, function(start) {
          $(this.element).val(start.format('DD-MMM-YY'));
    });
  
    $('#endDate').daterangepicker({
      showDropdowns: true,
      singleDatePicker: true,
      autoApply: true,
      autoclose: true,
      autoUpdateInput: false,
      drops:'up',
      locale: {
        format: 'DD-MMM-YY',
        direction: 'single-picker'
      }
    }, function(start) {
        $(this.element).val(start.format('DD-MMM-YY'));
    });

    $('#single').daterangepicker({
      "showDropdowns": true,
      singleDatePicker: true,
      "autoApply": true,
      locale: {
        format: 'ddd, DD-MMM-YY',
        direction: 'single-picker'
      },
      autoclose: true,
    });
  
  
    $('#singleTime').daterangepicker({
      singleDatePicker: true,
      "showDropdowns": true,
      "timePicker": true,
      "autoApply": true,
      locale: {
        format: 'ddd, DD-MMM-YY hh:mm A',
        direction: 'single-picker'
      },
      autoclose: true,
      "applyClass": "btn-primary",
      "cancelClass": "btn-secondary"
    });
  
    $('#range').daterangepicker({
      locale: {
        separator: " To ",
        format: 'DD-MMM-YY',
        direction: 'range-picker'
      },
      drops: 'auto',
      opens:'left',
      "applyClass": "btn-primary",
      "cancelClass": "btn-secondary",
      autoApply: true,
    });
  
  
  
    $('.timePicker a').click(function () {
      var updateTime = $(this).text();
      $(this).parents('.timePicker').find('input').val(updateTime);
              $(".timePicker a.active").removeClass("active"); 
              $(this).addClass('active');
    })
  
  
  });
      $(function() {
  $('input[name="datetimes"]').daterangepicker({
  timePicker: true,
          // timePicker24Hour: true,
          timePickerIncrement: 1,
          // timePickerSeconds: true,
          locale: {
              // format: 'ddd, DD-MMM-YY hh:mm A',
              format: 'hh:mm A',
              separator: ' To ',
          }
      }).on('show.daterangepicker', function (ev, picker) {
          picker.container.find(".calendar-table").hide();
      });
  });

