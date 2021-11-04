//日期显示
$('#datetimepicker').datetimepicker({
	timepicker: false,
	format: 'Y-m-d'
});
$.datetimepicker.setLocale('zh');
//验证手机号、邮箱、QQ，获取修改信息
$('#submit').on('click', function() {
	//获取生日日期
	var d = $('#datetimepicker').datetimepicker('getValue');
	var M = d.getMonth() + 1;
	//alert(d.getFullYear() + "-" + M + "-" +d.getDate());
	//验证机号、邮箱、QQ
	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var phone = jQuery("#phone").val();
	var flag = false;
	if (phone.length != 11) {
		jQuery("#danger-tip").html("请输入有效的手机号码！");
	} 
	else if (!myreg.test(phone)) {
		jQuery("#danger-tip").html("请输入有效的手机号码！");
	} 
	else {
		 var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		 var email = jQuery("#email").val();
		    if(!reg.test(email)){
		       jQuery("#danger-tip").html("请输入有效的邮箱号！");
		    }
			else{
				var QQ = jQuery("#QQ").val();
				 if (QQ.charAt(QQ.length - 1) == " ") {
				        jQuery("#danger-tip").html("QQ号末位不能有空格");
				    } else if (QQ.length > (String(parseInt(QQ))).length) {
				       jQuery("#danger-tip").html("QQ不能含有小数");
				    } else if (Number(QQ) !== Number(QQ) || Number(QQ.charAt(QQ.length - 1)) !== Number(QQ.charAt(QQ.length - 1))) {
				       jQuery("#danger-tip").html("QQ号请输入数字");
				    } else if (QQ.charAt(0) == " ") {
				        jQuery("#danger-tip").html("QQ号首位不能是空格");
				    } else if (QQ[0] == 0) {
				        jQuery("#danger-tip").html("QQ号第一位不能是0");
				    } else if (Number(QQ.charAt(0)) !== Number(QQ.charAt(0))) {
				        jQuery("#danger-tip").html("QQ号首位不能是符号");
				    } else if (QQ.length > 10 || QQ.length < 5) {
				        jQuery("#danger-tip").html("QQ号输入的数字必须在5位以上、10位以内");
				    } else {
				        flag = true;
				    }
				
			}
	}
	if (!flag) {
		$('#sub-danger').addClass('show');
		window.setTimeout(function() {
			$("#sub-danger").removeClass("show");
		}, 5000); //显示的时间}	
	} 
	else {
		$('#sub-success').addClass('show');
		window.setTimeout(function() {
			$("#sub-success").removeClass("show");
		}, 5000); //显示的时间	
	}
	return flag;
});
