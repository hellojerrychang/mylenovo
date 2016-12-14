/*****************登录************/
$('#login').click(function(e){
	e.preventDefault();
	$('#modal').css('display','block')
})
$('#myLogin>.logintop>b').click(function(){
	$('#modal').css('display','none')
})
$('#modal #myLogin>.logintop>.RT').click(function(){
	$('#myLogin>.logintop>.RT').css({'border-bottom':'4px solid #e2231b',
	'color':'#e2231b'}).siblings().css({'border-bottom':'4px solid #000',
	'color':'#fff'});
	$('#modal #myLoginform>form .pwd').css('display','none');
	$('#modal #myLoginform>form>.trends-pwd,.gain-pwd').css('display','block')
})
$('#modal #myLogin>.logintop>.LF').click(function(){
	$('#modal #myLogin>.logintop>.LF').css({'border-bottom':'4px solid #e2231b',
	'color':'#e2231b'}).siblings().css({'border-bottom':'4px solid #000',
	'color':'#fff'});
	$('#modal #myLoginform>form .pwd').css('display','block');
	$('#modal #myLoginform>form>.trends-pwd,.gain-pwd').css('display','none')
})
/****************判断输入**********/
$('#login-button').click(function(){
		//if($('#loginUser').val()=='changjian'){
			//$('.user-err').css('display','none')
		//}else 
		if($('#loginUser').val()==''){
			$('.user-err').css('display','inline-block')
		}
		//if($('.pwd').val()=='123456'){
			//$('.pwd-err').css('display','none')
		//}else 
		if($('.pwd').val()==''){
				$('.pwd-err').css('display','inline-block')
		}
		if($('#loginUser').val()!=''||$('.pwd').val()!=''){
			var requestData = $('#login-form').serialize();
			$.post('data/login.php',requestData,function(data,msg,xhr){
			console.log('开始处理登录结果..');
			loginUserName = $('#loginUser').val();
			loginUserpwd = $('.pwd').val();
			console.log(loginUserName);
			console.log(loginUserpwd);
			console.log(data.name)
			if(data.msg!=='succ'){  //登录失败
				if(loginUserName!=='changjian'){
					$('.user-err').css('display','inline-block');
					$('.user-err').html('用户名不存在')
				}else{
					$('.user-err').css('display','none');
					if(data.pwd!==loginUserpwd){
					$('.pwd-err').css('display','inline-block');
					$('.pwd-err').html('密码错误');
				}else{
						$('.pwd-err').css('display','none');
					}
				}
				
		}else{  //登录成功
			//console.log(data.pwd);
			//console.log(data.name);
			$('#exit').css('display','inline-block');
			$('#login').html(loginUserName);
			$('#modal').fadeOut();
			$('#exit').click(function(){
				$('#login').html('登录');
				$('#exit').css('display','none');
			})
		}
		})
		}
})
/**************注册**************/
$('#register').click(function(e){
	e.preventDefault();
	$('#modal-login').css('display','block')
})
$('#myLogin>.logintop>b').click(function(){
	$('#modal-login').css('display','none')
})
