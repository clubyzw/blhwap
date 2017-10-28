//网站公共js代码
$(document).ready(function(){
	
	//主页轮播图
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		autoplay: 5000,
	});
	
	//厂家展示
	var swiper3 = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination2',
        slidesPerView: 3,
		slidesPerGroup : 3,
		spaceBetween : 3,
		autoplay: 1000,
        paginationClickable: true,
    });
	
	//商品分类展示
	$('.right_kong_box').click(function(){
		$('.left_category_box').css('display','none');
		$(this).css('display','none');
	});
	$('.icon-app-cate').click(function(){
		$('.left_category_box').css('display','block');
		$('.right_kong_box').css('display','block');
	});
	
	$('.title_text_content .left_title li').click(function(){
		$('.title_text_content .left_title li').removeClass('active');
		$(this).addClass('active');
		$('.right_texts ul').removeClass('active');
		var nowNum=$(this).index();
		$('.right_texts ul').eq(nowNum).addClass('active');
	});
	
	//发送验证码
	$('.form .input_code').focus(function(){
		$('.form #send_code').css('display','block');
		$('.form #show_msg').css('display','none');
	});
	$('.form #send_code').click(function(){
		$('.form #send_code').css('display','none');
		$('.form #show_msg').css('display','block');
		var startNum=30;
		var runTime=setInterval(function(){
			
			if(startNum>0){
				startNum--;
				var lastTxt='还剩'+startNum+'秒';
				$('.form #show_msg').text(lastTxt);
			}else{
				clearInterval(runTime);
				startNum=30;
				$('.form #send_code').css('display','block');
				$('.form #show_msg').css('display','none');
				$('.form #show_msg').text('还剩30秒');
			}
			
		},1000);
	});
	
	//返回上一步
	$('.bar-nav .icon-left').click(function(){
		window.history.back(-1);
	});
	
	//选择产品规格
	$('.change_model').click(function(){
		$('.sel_cont').css('display','block');
	});
	$('.buy_now').click(function(){
		$('.sel_cont').css('display','block');
	});
	
	$('.sel_cont .close').click(function(){
		$('.sel_cont').css('display','none');
	});
	$('.sel_cont .cf_btn').click(function(){
		$('.sel_cont').css('display','none');
	});
	
	$('.option_list ul li').click(function(){
		$(this).siblings('li').removeClass('on');
		$(this).addClass('on');
	});
	
	$('.num_con .add').click(function(){
		var nowNum=$(this).siblings('.nums').text();
		nowNum++;
		$(this).siblings('.nums').text(nowNum);
	});
	$('.num_con .jian').click(function(){
		var nowNum=$(this).siblings('.nums').text();
		nowNum--;
		if(nowNum>0){
			$(this).siblings('.nums').text(nowNum);
		}
	});
	
	//购物车
	$('.car_list ul li .sel').click(function(){
		var nowValue=$(this).siblings('.curnums').val();
		if(nowValue==1){
			$(this).attr('src','image/sel_out.png');
			$(this).siblings('.curnums').val(0);
		}else{
			$(this).attr('src','image/sel_on.png');
			$(this).siblings('.curnums').val(1);
		}
	});
	
	$('.footer_car .fc img').click(function(){
		$('.car_list ul li .sel').attr('src','image/sel_on.png');
	});
	
	$('.nums .add').click(function(){
		var nowNum=$(this).siblings('.num').text();
		nowNum++;
		$(this).siblings('.num').text(nowNum);
	});
	$('.nums .jian').click(function(){
		var nowNum=$(this).siblings('.num').text();
		nowNum--;
		if(nowNum>0){
			$(this).siblings('.num').text(nowNum);
		}
	});
	
});
