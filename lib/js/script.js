$( window ).ready(function(){
	$( "[data-uyari]" ).on( "click", function (e) {
			e.preventDefault();
        var msg = $(e.currentTarget).data("uyari");
				swal("Üzgünüm!",msg,"error");

    } );


	$('.ripple').on('click', function (event) {

      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;



      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });

});
	function modalGoster(ids) {
  $.ajax({
    type: "POST",
    url: "/urunbilgi.php",
  data: {id: ids},
    success: function(data) {
      $('#pModal').html(data);
      $('#pModal').modal("show");
    }
  });
  return false;
}
		String.prototype.format = function (args) {
			var str = this;
			return str.replace(String.prototype.format.regex, function(item) {
				var intVal = parseInt(item.substring(1, item.length - 1));
				var replace;
				if (intVal >= 0) {
					replace = args[intVal];
				} else if (intVal === -1) {
					replace = "{";
				} else if (intVal === -2) {
					replace = "}";
				} else {
					replace = "";
				}
				return replace;
			});
		};
		String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");
