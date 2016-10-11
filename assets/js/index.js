// Get random philosphy from GitHub

var philosophy = 'https://api.github.com/zen';

var getPhilosophy = function(response) {
	$('.tagline').html(response);
}

$.get(philosophy, getPhilosophy);

// Search for a user

var $button = $('.search-button');
var $input = $('.search-input');
var user = [];

var printUser = function() {
	$.getJSON({
		url: user,
	}).done(function(data) {
		$('.name').html(data.name);
		$('.company').html(data.company);
		$('.image').html('<img src="' + data.avatar_url + '">');

		printMessage('Found user ' + data.name, 'succes')
	}).fail(function(date) {
		printMessage('No user found', 'fail')
	});
}

// Print message

var message;
var messageType;
var $messageContainer = $('.message');

var printMessage = function(message, messageType) {
	$messageContainer.addClass(messageType);
	$messageContainer.html(message);
	$messageContainer.fadeIn();
}

// Click the button

$button.click(function() {
	if($input.val()) {
		user = 'https://api.github.com/users/' + $input.val();
		printUser();
	} else {
		printMessage('Type something please', 'fail')
	}
});
