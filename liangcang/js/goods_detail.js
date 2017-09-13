$(function(){
	var number;
	$(".button_add").click(function(){
		number = $("#goods_number").val();
		number++;
		$("#goods_number").val(number);
	});
	$(".button_sub").click(function(){
		number = $("#goods_number").val();
		number--;
		if(number <=1) number=1;
		$("#goods_number").val(number);
	});
	
	//////////////////////获取商品详情信息
	var goods_id = getQueryString('goods_id');
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_goods.php",
		data:{"goods_id":goods_id},
		success:function(data){
			var obj = data.data[0];
			$(".detail-img").css({
				"background":"url("+obj.goods_thumb+")",
				"background-size": "contain",
				"background-repeat": "no-repeat",
				"background-position": "center"
			});
			$(".detail-name").text(obj.goods_name);
			$(".detail-desc").text(obj.goods_desc);
			$(".detail_price").text("￥"+obj.price+"元");
		}
	});
	
	
	//////////////////////////////点击添加到购物车
	$(".addToCart input").click(function(){
		if(sessionStorage.token == undefined || sessionStorage.token == "null"){
			alert("请先登录");
			location.href="login.html";
		}
		$.ajax({
			type:"post",
			url:"http://h6.duchengjiu.top/shop/api_cart.php?token="+sessionStorage.token,
			data:{"goods_id":goods_id,"number":$("#goods_number").val()},
			success:function(data){
				alert(data.message);
			}
		});
	})
})