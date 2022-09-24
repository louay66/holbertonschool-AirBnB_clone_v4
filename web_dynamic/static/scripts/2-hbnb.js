// display amenities
$(document).ready(function () {
	$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
	  if (data['status'] === 'OK') {
		$('DIV#api_status').addClass('available');
	  } else {
		$('DIV#api_status').removeClass('available');
	  }
	});
  
	  let my_dict = {};
  
	  $('input[type=checkbox]').click(function () {
  
		  if ($(this).is(':checked')) {
			  my_dict[$(this).data('id')] = $(this).data('name');
			  $('.amenities h4').text(Object.values(my_dict).join(', '));
		  } else if ($(this).not(':checked')) {
			  delete my_dict[$(this).data('id')];
			  $('.amenities h4').text(Object.values(my_dict).join(', '));
			  if (Object.getOwnPropertyNames(my_dict).length === 0)
				  $('.amenities h4').html("&nbsp;");
		  }
	  });
  });
  