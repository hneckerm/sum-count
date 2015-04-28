$(document).on('ready', function() {

	$('#btn-result').on('click', function() {
		var firstNum = $('.box-one').val();
		var secondNum = $('.box-two').val();
		var thirdNum = $('.box-three').val();
		var endResult = parseInt(firstNum) + parseInt(secondNum) + parseInt(thirdNum);
		// alert(endResult);
			$('#new-result').text(function() {
				return "The sum of those numbers is: " + endResult + "!";
			})
		})


	});