$(document).ready(function () {
  $(".nameCellElli").on( "mouseenter", function() {
  var $this = $(this);
  if (this.offsetWidth < this.scrollWidth && !$this.attr('title')) {
    $this.tooltip({
      title: $this.text(),
      placement: "top",
      container:'body',
    });
    $this.tooltip('show');
  }
  });
});


var tabs = document.getElementsByClassName('nav-item');
  Array.prototype.forEach.call(tabs, function(tab) {
    tab.addEventListener('click', setActiveClass);
  });

function setActiveClass(evt) {
	Array.prototype.forEach.call(tabs, function(tab) {
		tab.classList.remove('active');
	});
	
	evt.currentTarget.classList.add('active');
}



// ripple btn js here

$(document).ready(function(){
	$(document).on("mousedown", ".btn-ripple" , function(e){     
        var target = e.target;
        var rect = target.getBoundingClientRect();
        var ripple = target.querySelector('.ripple');
        $(ripple).remove();
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
        var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
        var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
        ripple.style.top = top + 'px';
        ripple.style.left = left + 'px';
        return false;
    });
});











//tab active slide
$(document).ready(function () {
  $("#tab-slider .nav-tabs a").click(function() {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
      $("#tab-slider .slider").css({"left":+ position.left,"width":width});
    });
    var actWidth = $("#tab-slider .nav-tabs").find(".active").parent("li").width();
    var actPosition = $("#tab-slider .nav-tabs .active").position();
    $("#tab-slider .slider").css({"left":+ actPosition.left,"width": actWidth});
});