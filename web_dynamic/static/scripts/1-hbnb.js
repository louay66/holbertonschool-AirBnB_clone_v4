$(document).ready(function () {
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
