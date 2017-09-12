$(function(){
	//////////////////////////////////////////搜索框点击滑入滑出
	var flag = false;
	$(".nav-right i").click(function(){
		if(flag){
			$(".search-input").animate({
				"left":"14px"
			},100);
			flag=false
		}else{
			$(".search-input").animate({
				"left":"280px"
			},500);
			flag=true;
		}
	});
	
	//////////////////////////////////////////导航栏吸顶和回顶部按钮的显示
	$(window).scroll(function(){
		if($(window).scrollTop() >= 55){
			$(".backToTop").css({
				"opacity":"1"
			});
			$(".nav").css({
				"position":"fixed",
				"top":"0",
			});
			
		}else{
			$(".backToTop").css({
				"opacity":"0"
			});
			$(".nav").css("position","");
		}
	});
	
	///////////////////////////////////////////点击返回顶部按钮
	$(".backToTop").click(function(){
		var top = $(window).scrollTop();
		var timer = setInterval(function(){
			top -= 100;
			$(window).scrollTop(top);
			if(top <= 0) clearInterval(timer);
		},10);
	});
	
	/////////////////////////////////ajax请求热门商品
  $.ajax({
  	type:"get",
  	url:"http://h6.duchengjiu.top/shop/api_cat.php",
  	success:function(data){
  		for(var i=0; i< data.data.length; i++){
  			var oLi = $("<li><a href='goods.html?cat_id="+data.data[i].cat_id+"'><img src='img/head/goods1.png' /><span>"+data.data[i].cat_name+"</span></a></li>")
  			$(".store-content ul").append(oLi);
  		}
  	}
  });
  
  ///////////////////////////////////在搜索框中搜索
  $("#search-input").keyup(function(){
  	if(event.keyCode === 13){
  		location.href = "search.html?search_text="+$(this).val();
  	}
  })
  
  
  
  
})
function getQueryString(name) {
	  var search = location.search.substr(1);
	  //abc=123&a=&ccc=abc
	  //(^|&)   (&|$)
	  //abc=([^&]*)
	  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	  var result = search.match(reg);
	  // if (result === null) return null;
	  // return decodeURIComponent(result[2]);
	  return result === null ? null : decodeURIComponent(result[2]);
	}