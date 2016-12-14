/*************顶部下拉菜单*********/
(function(){
	$('.top-main>ul>.search').mouseover(function() {
		$('.search-link').css('display', 'block');
		$('.top-main>ul>.search>i').css('display', 'none');
		$('.top-main>ul>.search>s').css('display', 'inline-block');

	})
	$('.top-main>ul>.search').mouseout(function() {
		$('.search-link').css('display', 'none');
		$('.top-main>ul>.search>i').css('display', 'inline-block');
		$('.top-main>ul>.search>s').css('display', 'none');
	})
	$('.Renault').mouseover(function() {
		$('.Renault-link').css('display', 'block');
		$('.Renault i').css('display', 'none');
		$('.Renault s').css('display', 'inline-block');
	})
	$('.Renault').mouseout(function() {
		$('.Renault-link').css('display', 'none');
		$('.Renault i').css('display', 'inline-block');
		$('.Renault s').css('display', 'none');
	})
	$('.member').mouseover(function() {
		$('.member_phone').css('display', 'block');
		$('.member i').css('display', 'none');
		$('.member s').css('display', 'inline-block');
	})
	$('.member').mouseout(function() {
		$('.member_phone').css('display', 'none');
		$('.member i').css('display', 'inline-block');
		$('.member s').css('display', 'none');
	})
	$('.seek').mouseover(function() {
		$('.list_seek').css('display', 'block')
	})
	$('.seek').mouseout(function() {
		$('.list_seek').css('display', 'none')
	})

	/**********顶部图片定时收缩**************/
	setTimeout(function() {
		$('.top-pic2').slideUp(300, function() {
			$('.top-pic1').css('display', 'block')
		});
	}, 5000)
	$('#top_pic>span').click(function() {
		$('#top_pic').css('display', 'none')
	})

	/***************左侧导航****************/
	$('.nav-show').mouseover(function() {
		$(this).children('div').css('display', 'block');
		$(this).children('span').css('display', 'none');
		$(this).children('s').css('display', 'block');
	})
	$('.nav-show').mouseout(function() {
		$(this).children('div').css('display', 'none');
		$(this).children('span').css('display', 'block');
		$(this).children('s').css('display', 'none');
	})
	$('.list_cont').mouseover(function() {
		$(this).css('display', 'block');
	})
	$('.list_cont').mouseout(function() {
		$(this).css('display', 'none');
	})

	//**********轮播图
	function banner() {
		var box = $('#box');
		var imgs = $('.list').children();
		var btn = $('.count').children();
		var i = index = 0; //中间量，统一声明；   
		var play = null;
	     
		function show(a) {
			   
			for(i = 0; i < btn.length; i++) {
				btn[i].className = '';
			
				btn[a].className = 'current';
			}
			for(i = 0; i < imgs.length; i++) {
				      
				imgs[i].style.opacity = 0;
				imgs[a].style.opacity = 1;
			}
		}  
		for(i = 0; i < btn.length; i++) {
			btn[i].index = i; 
			btn[i].onmouseover = function() {
				show(this.index);
			}
		} //自动轮播方法 
		function autoPlay() {
			play = setInterval(function() { 
				index++;
				index >= imgs.length && (index = 0); 
				show(index);
			}, 3000)
		}
		autoPlay();  
		
		$('#box').mouseover(function() {
			clearInterval(play);
		});
		$('#box').mouseout(function() {
			autoPlay();
		});

		$('#box').mouseover(function() {
			$('#box .lr').css('display', 'block')
		})
		$('#box').mouseout(function() {
			$('#box .lr').css('display', 'none')
		})
		$('#box .lr .pre').click(function() {
			index--;
			index = (index + 6) % 6;
			$('.list li').eq(index).css("opacity", "1").siblings().css("opacity", "0");
			$('.count li').eq(index).addClass('current').siblings().removeClass('current')
		})
		$('#box .lr .next').click(function() {
			index++;
			index = (index + 6) % 6;
			$('.list li').eq(index).css("opacity", "1").siblings().css("opacity", "0");
			$('.count li').eq(index).addClass('current').siblings().removeClass('current')
		})

		$('#imglist').mouseover(function() {
			$('#pic_box>.hide').css('display', 'block')
		})
		$('#imglist').mouseout(function() {
			$('#pic_box>.hide').css('display', 'none')
		})
		$('#pic_box>.hide').mouseover(function() {
			$('#pic_box>.hide').css('display', 'block')
		})
		$('#pic_box>.hide').mouseout(function() {
			$('#pic_box>.hide').css('display', 'none')
		});
	}
	banner();
	/********************nav部分右侧向上滚动的字体************/
	function doText() {
		var box = document.getElementById("focus-scroll"),
			can = true;
		box.innerHTML += box.innerHTML;
		box.onmouseover = function() {
			can = false
		};
		box.onmouseout = function() {
			can = true
		};
		new function() {
			var stop = box.scrollTop % 60 == 0 && !can;
			if(!stop) box.scrollTop == parseInt(box.scrollHeight / 2) ? box.scrollTop = 0 : box.scrollTop++;
			setTimeout(arguments.callee, box.scrollTop % 60 ? 10 : 1500);
		};
	}
	doText();
	/*********************今日推荐******************/
	$('.lfbtn').click(function() {
		$('#imglist img:first-child').animate({
			marginLeft: '-252px'
		}, 1000, function() {
			var tem = $(this).clone();
			$(this).remove();
			tem.css({
				marginLeft: '0'
			});
			$('#imglist').append(tem)
		})
	})
	$('.rtbtn').click(function() {
			var temp = $('#imglist img:last-child').clone();
			$('#imglist img:last-child').remove();
			temp.css({
				marginLeft: '-252px'
			});
			$("#imglist").prepend(temp);
			$('#imglist img:first-child').animate({
				marginLeft: '0'
			}, 1000)
		})
		/*********************明星单品**********************/
	$('#star-product .star-top b').click(function() {
		$('.star-p dl:first-child').animate({
			marginLeft: '-202px'
		}, 1000, function() {
			var tem = $(this).clone();
			$(this).remove();
			tem.css({
				marginLeft: '0'
			});
			$('.star-p').append(tem)
		})
	})
	$('#star-product .star-top i').click(function() {
			var temp = $('.star-p dl:last-child').clone();
			$('.star-p dl:last-child').remove();
			temp.css({
				marginLeft: '-202px'
			});
			$(".star-p").prepend(temp);
			$('.star-p dl:first-child').animate({
				marginLeft: '0'
			}, 1000)
		})
		/************section中图片右移特效****************/
	$('#main-pic>.fpic>dl>dt img').mouseover(function() {
			$(this).animate({
				left: '35px'
			}, 800, 'linear')
			$(this).animate({
				left: '0px'
			}, 800, 'linear')
		})
		/***************楼层************/
	$('#floor li').mouseover(function() {
		$(this).children(1).css('display', 'none');
		$(this).children(1).next().css('display', 'block')
		console.log($(this).next())
	})
	$('#floor li').mouseout(function() {
		$(this).children(1).css('display', 'block');
		$(this).children(1).next().css('display', 'none')
		console.log($(this).next())
	})

	$(function() {
		$(window).scroll(function() {
			var ling = $(document).scrollTop();
			if(ling > 311) {
				$('#floor').show();
			} else {
				$('#floor').hide();
			}
			if(311 < ling && ling < 710) {
				$('#floor ul li').eq(0).find('.active1').hide().siblings('.active').css({
					'display': 'block',
					'color': 'blue'
				});
				$('#floor ul li').eq(0).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			} else if(ling < 1209) {
				$('#floor ul li').eq(1).find('.active1').hide().siblings('.active').css('display', 'block');
				$('#floor ul li').eq(1).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			} else if(ling < 1844) {
				$('#floor ul li').eq(2).find('.active1').hide().siblings('.active').css('display', 'block');
				$('#floor ul li').eq(2).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			} else if(ling < 2479) {
				$('#floor ul li').eq(3).find('.active1').hide().siblings('.active').css('display', 'block');
				$('#floor ul li').eq(3).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			} else if(ling < 3114) {
				$('#floor ul li').eq(4).find('.active1').hide().siblings('.active').css('display', 'block');
				$('#floor ul li').eq(4).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			} else if(ling < 3749) {
				$('#floor ul li').eq(5).find('.active1').hide().siblings('.active').css('display', 'block');
				$('#floor ul li').eq(5).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			} else if(ling < 4384) {
				$('#floor ul li').eq(6).find('.active1').hide().siblings('.active').css('display', 'block');
				$('#floor ul li').eq(6).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			} else if(ling < 5019) {
				$('#floor ul li').eq(7).find('.active1').hide().siblings('.active').css('display', 'block');
				$('#floor ul li').eq(7).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			} else if(ling < 5654) {
				$('#floor ul li').eq(8).find('.active1').hide().siblings('.active').css('display', 'block');
				$('#floor ul li').eq(8).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			} else if(ling < 6289) {
				$('#floor ul li').eq(9).find('.active1').hide().siblings('.active').css('display', 'block');
				$('#floor ul li').eq(9).siblings('li').find('.active1').css('display', 'block').siblings('.active').hide();
			}
		})
		$('.active').click(function(event) {
			event.preventDefault();
			var id = $(this).attr('data-id');
			var h = $('.item-' + id).offset().top;
			$('body,html').animate({
				scrollTop: h
			}, 200)
		})
		$(function() {
			$('#floor ul li').hover(function() {
				$(this).find('.active1').hide().siblings('.active').css({
					'display': 'block',
					'color': '#000'
				})
			}, function() {
				$(this).find('active1').css({
					'display': 'block',
					'color': '#000'
				}).siblings('.active').hide().css('display', 'none')
			})
		})
	})
})()
