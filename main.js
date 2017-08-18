$(document).ready(function(){

	jeeMessages.msgOption({
        top: 0,
        messageDuration:2000,
        fadeOut:true,
	});

	$('#success').click(function (argument) {
		jeeMessages.addMsg('is simply dummy text of the printing');
	});
	$('#success2').click(function (argument) {
		jeeMessages.addMsg('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknow');
	});



});