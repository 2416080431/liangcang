$(function(){
	var order_detail = $("#order-detail");
	
	//////////////////////////获取用户订单详情
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_order.php?token="+sessionStorage.token,
		success:function(data){
			console.log(data);
		}
	});
});