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
})