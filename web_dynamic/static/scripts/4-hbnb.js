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
  

  $('.filters button').click(function () {
   $.ajax({
     type: 'POST',
     url: 'http://0.0.0.0:5001/api/v1/places_search/',
     contentType: 'application/json',
     data: JSON.stringify({ amenities: Object.keys(amenityIds) })
   }).done(function (data) {
     $('section.places').empty();
     $('section.places').append('<h1>Places</h1>');
     for (const place of data) {
       const temp = `<article>
       <div class="title">
       <h2>${place.name}</h2>
       <div class="price_by_night">
     $${place.price_by_night}
     </div>
       </div>
       <div class="information">
       <div class="max_guest">
       <br />
     ${place.max_guest} Guests
     </div>
       <div class="number_rooms">
       <br />
     ${place.number_rooms} Bedrooms
     </div>
       <div class="number_bathrooms">
       <br />
     ${place.number_bathrooms} Bathroom
     </div>
       </div>
       <div class="description">
     ${place.description}
     </div>
     </article> <!-- End 1 PLACE Article -->`;
       $('section.places').append(temp);
     }
   });
 });
