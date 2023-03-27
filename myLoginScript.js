$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault(); // prevent default form submit action

		// get the form data
		var formData = $('form').serialize();

		// send AJAX request to server-side servlet
		$.ajax({
			url: 'LoginServlet',
			type: 'POST',
			data: formData,
			success: function(response) {
				if (response == 1) {
					$('#result').html('Login successful!');
				} else {
					$('#result').html('Invalid login or password.');
				}
			},
			error: function() {
				$('#result').html('Error communicating with server.');
			}
		});
	});
});