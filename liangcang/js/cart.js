window.onload = function(){
    var oTable = document.querySelector('.carTab');
    var oSum = document.querySelector('#sum');
    
    
    ////////////////////////////获取购物车数据并添加元素
    myajax.get('http://h6.duchengjiu.top/shop/api_cart.php', {token: sessionStorage.token}, function(err, responseText){
      var json = JSON.parse(responseText);
      var data = json.data;
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        sum += obj.goods_price * obj.goods_number;
        oTable.innerHTML += `
							<tr class="itemlist2">
					            <td valign="top">
					                <a href="/i/goods/?id=259173" target="_blank" class="gimgCon">
					                	<img src="${obj.goods_thumb}">
					                </a>
					            </td>
				                		
					            <td class="txtl">
					                <p class="t">
					                	<a href="/i/goods/?id=259173">${obj.goods_name} </a>
					                </p>
					            </td>
					                		
					                		
					            <td>
					                <span class="opt optadd" >
					                	<img name="add" src="http://www.iliangcang.com/images/default/add.png">
					             	</span>
					                <input type="text" id="goodsAmount" readonly="readonly" data-id="${obj.goods_id}" name="number" value="${obj.goods_number}" class="num2">
					                <span class="opt optsub" >
					                	<img name="sub" src="http://www.iliangcang.com/images/default/minus.png">
					                </span>
					            </td>
					            
					            <td>${obj.goods_price}</td>
					            <td name="sum">${obj.goods_price*obj.goods_number}</td>
					            <td >
					            <a class="blue" >删除</a>
					            </td>
					        </tr>
                      `;
      }
      getSum();
      
      //////////////////////////////////触发更改数量点击事件,并提交数据
      $(".optadd").click(function(){
      	var number = $(this).next().val();
      	number++;
      	$(this).next().val(number);
      });
      
      $(".optsub").click(function(){
      	var number = $(this).prev().val();
      	number--;
      	if(number <= 1) number=1;
      	$(this).prev().val(number);
      });
      
      ///////////////////////////////////点击删除触发事件
      $(".blue").click(function(){
      	var self = this;
      	var goods_id = $(this).parent().prev().prev().prev().children("input").data("id")
      	
      	$.ajax({
      		type:"post",
      		url:"http://h6.duchengjiu.top/shop/api_cart.php?token="+sessionStorage.token,
      		data:{"goods_id":goods_id,"number":0},
      		contentType:"application/x-www-form-urlencoded",
      		success:function(){
      			$(self).parents("tr").remove();
      			getSum();
      		}
      	});
    });
    
    });
    
    oTable.onclick = function(event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      if (target.name == 'add') {
//      console.log(target.value, target.dataset.id);
        var goods_id = target.parentNode.nextElementSibling.dataset.id;
        var number = target.parentNode.nextElementSibling.value;
        
      }else if(target.name == "sub"){
      	var goods_id = target.parentNode.previousElementSibling.dataset.id;
      	var number = target.parentNode.previousElementSibling.value;
      }
//    console.log(number,goods_id);
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+sessionStorage.token,
        {goods_id, number},
        function(err, responseText) {
          var json = JSON.parse(responseText);
          console.log(json);
          if (json.code === 0) {
            // alert('更新购物车成功');
            //修改总价和小计
            	if (target.name == 'add') {
				    	var goods_price = parseInt(target.parentNode.parentNode.nextElementSibling.innerText);
					target.parentNode.parentNode.nextElementSibling.nextElementSibling.innerText = parseInt(target.parentNode.nextElementSibling.value) * goods_price;
				     }else if(target.name == "sub"){
								var goods_price = parseInt(target.parentNode.parentNode.nextElementSibling.innerText);
					target.parentNode.parentNode.nextElementSibling.nextElementSibling.innerText = parseInt(target.parentNode.previousElementSibling.value) * goods_price;
				     }
            getSum();
          }
        });
      
    };
    
		//////////////////////计算购物车总价
    function getSum() {
      var oSums = document.querySelectorAll('td[name=sum]');
      var sum = 0;
      for (var i = 0; i < oSums.length; i++) {
        sum += parseInt(oSums[i].innerText);
      }
      oSum.innerText = sum;
    };
    
    
    
}