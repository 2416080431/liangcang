window.onload = function(){
	var index = 0;
	var left = 0;
	var timer;
var oRightBtn = document.getElementById('carousel_rightBtn');
var oLeftBtn = document.getElementById('carousel_leftBtn');
var oImagesLists = document.getElementById('imagesList').getElementsByTagName('li');
var oCirclesLists = document.getElementById('circles').getElementsByTagName('li');

carousel();	
		$("#carousel_leftBtn").mouseover(function(){
			clearInterval(timer)
		});
		$("#carousel_leftBtn").mouseout(function(){
			carousel();
		})
		$("#carousel_rightBtn").mouseover(function(){
			clearInterval(timer)
		});
		$("#carousel_rightBtn").mouseout(function(){
			carousel();
		})
		$("#imagesList").mouseover(function(){
			clearInterval(timer)
		});
		$("#imagesList").mouseout(function(){
			carousel();
		})
		$("#circles").mouseover(function(){
			clearInterval(timer)
		});
		$("#circles").mouseout(function(){
			carousel();
		})
    oRightBtn.onclick = function(){
      index++;
      if (index >= oImagesLists.length) {
        index = 0;
      }
      move();
      carousel()
    }
    oLeftBtn.onclick = function(){
      index--;
      if (index < 0) {
        index = oImagesLists.length-1;
      }
      move();
    }
    for (var i = 0; i < oCirclesLists.length; i++) {
      (function(i){
        oCirclesLists[i].onclick = function() {
          index = i;
          move();
        }
      })(i);
    }
    function move() {
    	if (index < 0) {
        index = oImagesLists.length-1;
      }
    	if (index > oImagesLists.length-1) {
        index = 0;
      }
    	
      for (var i = 0; i < oImagesLists.length; i++) {
        oImagesLists[i].className = '';
      }
      oImagesLists[index].className = 'current';

      for (var i = 0; i < oCirclesLists.length; i++) {
        oCirclesLists[i].className = '';
      }
      oCirclesLists[index].className = 'current';
      left = index * 1000;
      	$("#imagesList ul").animate({
      		"left":-left+"px"
      	},600);
    };
    
    function carousel(){
    	clearInterval(timer);
    timer =	setInterval(function(){
      	index++;
      	move();
      	left = index * 1000;
      	$("#imagesList ul").animate({
      		"left":-left+"px"
      	},600);
      },3000);
    }
    
}
