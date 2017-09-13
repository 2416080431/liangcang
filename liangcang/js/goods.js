$(function(){
	
	////////////////////////获取该类型的商品
	var cat_id = getQueryString('cat_id');
	
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_goods.php",
		data:{"cat_id":cat_id},
		success:function(data){
			for(var i=0; i<data.data.length; i++){
				var obj = data.data[i];
				
				var oDiv = $("<div class='item'>"+
				"<div class='imgCon'>"+
					"<div class='optCon'></div>"+
					"<a href='goods_detail.html?goods_id="+obj.goods_id+"'><img src="+obj.goods_thumb+" /></a>"+
					"<a href='goods_detail.html?goods_id="+obj.goods_id+"' class='goodsInfo' target='_blank'>"+
						"<p class='money'>"+obj.price+"</p>"+
						"<p class='tle'>《知日・这就是三岛由纪夫》特集 ｜一个无法被定义的日本大文豪</p>"+
						"<p class='desc'>专门关注日系内容的超人气品牌「知日 ZHIJAPAN」推出《知日》特集第4...</p>"+
					"</a>"+
				"</div>"+
				"<div class='bar'>"+
					"<a class='who' href='/i/brand/intro/?id=932' target='_blank'><img src='img/index/智.jpg'/>'知日'</a>"+
					"<a class='goodsFavCount' href='javascript' onclick='goodsAddFavour'>237</a>"+
				"</div>"+
			"</div>");
			
			$("#goodsForType").append(oDiv);
			}
		}
	});
})