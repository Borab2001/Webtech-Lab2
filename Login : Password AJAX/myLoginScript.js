$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault(); // prevent default form submit action

		// get the form data
		let login = $("#login").val();
    	let password = $("#password").val();

		// send AJAX request to server-side servlet
		$.ajax({
			url: 'http://localhost:8080/server_war_exploded/loginServlet',
			type: 'POST',
			data: {
				login: login,
				password: password
			},
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