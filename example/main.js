$(document).ready(function(){
	jeeMessages.msgOption({
		top:94,
		messageDuration:2250,
		fadeOut:true,
	});

	$('.btn-login').click(function (){
		if( $('.username').val()=='' && $('.password').val()=='' ){
			jeeMessages.jeeAdd('error','login failed!','username or password is incorrect');
		}
		else{
			jeeMessages.jeeAdd('success','login success!','welcome to jeeMessages ;D');
		}
	});

	$('.forgot').click(function (){
		jeeMessages.jeeAdd('warning','Forgot password?','can send you a text message with apassword rest code');

	});

	$('.jee-btn').click(function (){
		jeeMessages.jeeAdd('info','jeeMessages','jeeMessage provides alerts or messages for users');

	});
});