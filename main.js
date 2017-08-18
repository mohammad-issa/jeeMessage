$(document).ready(function(){

	jeeMessages.msgOption({
        top: 0,
        messageDuration:1000,
        fadeOut:true,
	});

	$('#success').click(function (argument) {
		jeeMessages.jeeAdd('warning','Lorem Ipsum is simply dummy text of the printing','typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
	});
	$('#success2').click(function (argument) {
		jeeMessages.jeeAdd();
	});



});