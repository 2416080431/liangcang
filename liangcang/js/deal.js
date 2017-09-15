$(function(){
	
	//////////////////////////获取收获信息
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_useraddress.php?token="+sessionStorage.token,
		success:function(data){
			for(var i=0; i<data.data.length; i++){
				var obj = data.data[i];
				var oDiv = $("<div class='deal-address' data-id='"+obj.address_id+"'>"+
					"<div class='deal-tel'>"+
						"<span class='deal-name'>"+obj.consignee+"</span>"+
						"<span class='deal-tel1'>"+obj.mobile+"</span>"+
					"</div>"+
					"<p>"+obj.province+" "+obj.city+"</p>"+
					"<p>"+obj.address+"</p>"+
				"</div>");
				$(".address-container").append(oDiv);
			}
		}
	});
	
	////////////////////////////////获取商品信息
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_cart.php?token="+sessionStorage.token,
		success:function(data){
			var sum =0;
			for(var i=0; i<data.data.length; i++){
				var obj = data.data[i];
				var count = 0;
				
				var oTr = $("<tr>"+
	                    "<th class='txtl' width='110'>"+
	                    "</th>"+
	                    "<th width='300'><img height='80px' width='90px' src='"+obj.goods_thumb+"' />"+obj.goods_name+"</th>"+
	                    "<th width='120'>"+obj.goods_number+"</th>"+
	                    "<th width='160'>"+obj.goods_price+"</th>"+
	                    "<th name='deal-sum' width='160'>"+obj.goods_number*obj.goods_price+"</th>"+
                	"</tr>");
        $(".carTab").append(oTr);
        count = obj.goods_number*obj.goods_price;
        sum += count;
			}
			$("#deal-sum").text(sum);
		}
	});
	
	/////////////////////////////////////////////////////点击结算，下订单
	$("#deal").click(function(){
		var address_id = $(".deal-address").data("id");
		var total = parseInt($("#deal-sum").text());
		
		$.ajax({
			type:"post",
			url:"http://h6.duchengjiu.top/shop/api_order.php?token="+sessionStorage.token+"&status=add&debug=1",
			data:{
				"address_id":address_id,
				"total_prices":total
			},
			contentType:"application/x-www-form-urlencoded",
			success:function(data){
				alert("下单成功!");
//				console.log(data)
			location.href="order.html";
			}
		});
	})
})