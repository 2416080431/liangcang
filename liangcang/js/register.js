$(function(){
	var oUsername = $("#reg_username");
	var oPass = $("#reg_password");
	var oConfirm = $("#reg_confirm");
	
	
	$(".regBtn").click(function(){
		
		$.ajax({
		type:"post",
		url:"http://h6.duchengjiu.top/shop/api_user.php",
		data:{
			status:"register",
			username: oUsername.val(),
			password: oPass.val()
		},
		contentType:"application/x-www-form-urlencoded",
		success:function(data){
				if(data.code == 0){
					if(oPass.val() != oConfirm.val()){
						$(".reg_message").text("两次密码不相同");
					}else{
						$(".reg_message").text(data.message);
						location.href="login.html";
					}
				}else{
					$(".reg_message").text(data.message);
				}
				
				
		}
	});
	})
	
})