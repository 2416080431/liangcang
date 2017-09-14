$(function(){
	
	//////////////////////////////////点击添加新收获地址
	$("#add-address").click(function(){
		var address_name = $("#address_name").val();
		var consignee = $("#consignee").val();
		var country = $("#country").val();
		var province = $("#province").val();
		var city = $("#city").val();
		var district = $("#district").val();
		var address = $("#address").val();
		var zip_code = $("#zip_code").val();
		var mobile = $("#mobile").val();
		var email = $("#email").val();
		var tel = $("#tel").val();
		var besttime = $("#besttime").val();
		var sign_building = $("#sign_building").val();
		
		$.ajax({
			type:"post",
			url:"http://h6.duchengjiu.top/shop/api_useraddress.php?status=add&token="+sessionStorage.token,
			data:{
				"address_name":address_name,
				"consignee":consignee,
				"country":country,
				"province":province,
				"city":city,
				"district":district,
				"address":address,
				"zip_code":zip_code,
				"mobile":mobile,
				"email":email,
				"tel":tel,
				"besttime":besttime,
				"sign_building":sign_building,
			},
			contentType:"application/x-www-form-urlencoded",
			success:function(){
				oTr = $("<tr>"+
					"<td >"+consignee+"</td>"+
					"<td >"+province+"</td>"+
					"<td >"+city+"</td>"+
					"<td >"+district+"</td>"+
					"<td >"+address+"</td>"+
					"<td >"+mobile+"</td>"+
					"<td class='address-delete'>删除</td>"+
				"</tr>");
				$("#myaddress").append(oTr);
			}
		});
	});
	
	////////////////////////////////////////////////获取收获地址
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_useraddress.php?token="+sessionStorage.token,
		success:function(data){
			for(var i=0; i<data.data.length; i++){
				var obj = data.data[i];
				var oTr = $("<tr data-id="+obj.address_id+">"+
					"<td >"+obj.consignee+"</td>"+
					"<td >"+obj.province+"</td>"+
					"<td >"+obj.city+"</td>"+
					"<td >"+obj.district+"</td>"+
					"<td >"+obj.address+"</td>"+
					"<td >"+obj.mobile+"</td>"+
					"<td class='address-delete'>删除</td>"+
				"</tr>");
				$("#myaddress").append(oTr);
			}
			$(".address-delete").click(function(){
				var address_id = $(this).parent().data("id");
				var self = this;
				
				$.ajax({
					type:"get",
					url:"http://h6.duchengjiu.top/shop/api_useraddress.php?status=delete&address_id="+
					address_id+"&token="+sessionStorage.token,
					success:function(){
						$(self).parent().remove();
					}
				});
			});
		}
	});
	
	////////////////////////////////////////////////删除收获地址
	
})