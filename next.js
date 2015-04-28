$(document).on('ready',function() {

	$('textarea').change(function() {
		var numChar = $(this).val().length;
		$('.countChar').text(numChar);
	})
})