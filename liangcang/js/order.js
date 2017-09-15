$(function(){
	var order_detail = $("#order-detail");
	
	//////////////////////////获取用户订单详情
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_order.php?token="+sessionStorage.token,
		success:function(data){
			console.log(data.data);
			for(var i=0; i<data.data.length; i++){
				var obj1 = data.data[i];
				var oTr1 = $("<tr>"+
                    		"<td colspan='3'>"+
                    			"<table id='order-goods' border='0'>"+
                    			"</table>"+
                    		"</td>"+
                    		"<td class='item' rowspan='1'>"+obj1.order_id+"</td>"+
                    		"<td class='item' rowspan='1'>"+obj1.total_prices+"</td>"+
                    		"<td class='item' rowspan='1'>"+
                    			"<p>未支付</p>"+
                    		"</td>"+
                    		"<td class='item' rowspan='1' width='80'>"+
                    			"<p>"+
                    				"<a href='#' target='_blank' class='thebtn'>查看并支付</a>"+
                    			"</p>"+
                    		"</td>"+
                    	"</tr>");
        $("#order-detail").append(oTr1);
        
        for(var j=0; j<data.data[i].goods_list.length; j++){
				var obj = data.data[i].goods_list[j];
				var oTr = $("<tr>"+
                    					"<td width='240px'>"+
                    						"<div class='orderItem'>"+
			                    				"<a href='#' target='_blank' class='imgCon'>"+
			                    					"<img src="+obj.goods_thumb+">"+
			                    				"</a>"+
			                    				"<div class='info'>"+
			                    					"<p>"+
			                    						"<a href='#' target='_blank'>"+obj.goods_name+"</a>"+
			                    					"</p>"+
			                    				"</div>"+
			                    			"</div>"+
                    					"</td>"+
                    					"<td class='tem'>"+obj.goods_price+"</td>"+
                    					"<td class='item'>"+obj.goods_number+"</td>"+
                    				"</tr>");
        $("#order-goods").append(oTr);
			}
			}
			
		}
	});
});