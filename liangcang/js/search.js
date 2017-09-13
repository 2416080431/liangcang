$(function(){
	var search_text = getQueryString('search_text');
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_goods.php",
		data:{search_text:search_text},
		success:function(data){
			var obj = data.data;
			for(var i=0; i<obj.length; i++){
				
				var oDiv = $("<div class='goodsItem244'>"+
				"<div class='goodInfo'>"+
					"<a href='#'  class='headImgLogo' target='_blank'>"+
						"<img src='img/goodsItemSceend/Jason_FreenyLogo.jpg' />"+
					"</a>"+
					"<div class='goodsDetail224'>"+
						"<a class='userName' href='#' target='_blank'>Jason Freeny</a>"+
						"<a class='favcount' href='#' target='_blank'>87</a>"+
					"</div>"+
				"</div>"+
				"<div class='bindEvent244'>"+
						"<div class='goodsmg'>"+
							"<a href='#'><img src='"+obj[i].goods_thumb+"' /></a>"+
						"</div>"+
						"<div class='goodsFuncCon244'>"+
							"<div class='goodsFunc'>"+
								"<span>"+obj[i].price+"</span>"+
								"<a href='goods_detail.html?goods_id="+obj[i].goods_id+"' title='转发'></a>"+
							"</div>"+
							"<a class='theShadow'>"+obj[i].goods_name+"</a>"+
						"</div>"+
				"</div>"+
			"</div>");
			
			$("#search_list").append(oDiv);
			}
		}
	});
})

