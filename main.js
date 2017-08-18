$(document).ready(function(){

	jeeAlert.msgOption({
        top: 0,
        color: '#888',
        alert_duration:2500,
	});

	$('#success').click(function (argument) {
		jeeAlert.addMsg('is simply dummy text of the printing');
	});
	$('#success2').click(function (argument) {
		jeeAlert.addMsg('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknow');
	});



});