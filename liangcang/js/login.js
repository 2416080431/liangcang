$(function(){
	var oUsername = $("#username");
	var oPass = $("#password");
	var oSubmit = $(".loginBtn");
	
	oSubmit.click(function(){
		$.ajax({
			type:"post",
			url:"http://h6.duchengjiu.top/shop/api_user.php",
			data:{
				status:'login',
				"username" : oUsername.val(),
				"password": oPass.val()
			},
			contentType:"application/x-www-form-urlencoded",
			success:function(data){
				if(data.code == 0){
					sessionStorage.token = data.data.token;
					sessionStorage.username = data.data.username;
					window.location='index.html';
				}else{
					$(".login-message").text(data.message);
				}
			}
		});
	})
	
	
})