$(function  () {
	// 搜索切换
	(function  () {
		var aLi = $('#menu li');
		var defautTexts = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var iNow = 0;
		oText = $('#search .text');
		// oText.attr('value', defautTexts[iNow] );
		oText.val(defautTexts[iNow]);
		aLi.each(function(index){
			$(this).click(function () {
				console.log(index);
				aLi.attr('class','gradient');
				$(this).attr('class', 'active');
				iNow = index;
				// oText.attr('value', defautTexts[iNow]);
				oText.val(defautTexts[iNow]);
			});
		});
		oText.focus(function() {
			// $(this).attr('value', '');
			if ($(this).val() == defautTexts[iNow]) {$(this).val('');};
			
		});
		oText.blur(function() {
			if ($(this).val() == '') {$(this).val(defautTexts[iNow])};
		});
	})();
	// 文字弹性滑动效果
	(function updateText () {

		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'#/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'#' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'#' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'#' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'#/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'#' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'#' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'#' }
		];
		var oDiv = $('#update');
		var oUl = oDiv.find('ul');
		var iH = 0;
		var str = '';
		var oScrollUp = $('#search .update .triangle_up');
		var oScrollDown = $('#search .update .triangle_down');
		var iNow = 0;
		var timer = null;
		// 数据初始化
		for (var i = arrData.length - 1; i >= 0; i--) {
			str += '<li><a href="#"><strong>'+arrData[i].name +'</strong><span> '+arrData[i].time +'分钟前 </span>写了一篇新文章：'+arrData[i].title+'</a></li>';
		};
		oUl.html(str);
		// 数据初始化完毕
		// 向上滚动
		iH = oUl.find('li').height();
		function move (i) {
			iNow += i; 
			if (Math.abs(iNow) > arrData.length-1) {iNow = 0;};
			if (iNow > 0) {iNow = -(arrData.length-1);};
			oUl.animate({top:iH*iNow});
		}
		
		oScrollUp.click(function() {
			move(-1);
		});
		// 向下滚动
		oScrollDown.click(function() {
			move(1);
		});
		// 自动滚动
		function autoPlay () {
			timer = setInterval(function  () {
				move(-1);
			},1500)
		}
		autoPlay ();
		// 鼠标移入停止自动滚动，移出时恢复自动滚动
		oDiv.hover(function  () {
			clearInterval(timer);
		},autoPlay)
	})();
	// 选项卡切换
	(function  () {
		tabSwitch($('.tabNav1'), $('.tabCon1'),'click');
		tabSwitch($('.tabNav2'), $('.tabCon2'),'click');
		tabSwitch($('.tabNav3'), $('.tabCon3'),'mouseover');
		tabSwitch($('.tabNav4'), $('.tabCon4'),'mouseover');
		function tabSwitch (oNav, aCon, sEvent) {
			var aLi = oNav.children();
			aCon.hide().eq(0).show();
			aLi.each(function  (index) {
				$(this).on(sEvent,function () {
				aLi.removeClass('active').addClass('gradient');
				// console.log(aLi);
				$(this).removeClass('gradient').addClass('active');
				// console.log($(this));
				aLi.find('a').attr({
					class: 'triangle_gray',
				});
				$(this).find('a').attr({
					class: 'triangle_down',
				});
				// console.log(index);
				aCon.hide().eq(index).show()
				}

			);
			});
		}
		
	})();
	// 焦点图自动播放
	(function  () {
		var arrData = ['爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
		var oDiv = $('.pic_show');
		var aImg = oDiv.find('.switch_ls').children();
		var aPic = oDiv.find('.pic').children();
		var oH4 = $('.pic_show .pic_title');
		var timer = null;
		var iNow = 0;

		
		aImg.each(function  (index) {
		$(this).click(function  () {
			iNow = $(this).index();
			switch_lmag(iNow);}
			);
			});

		oDiv.hover(function  () {
			clearInterval(timer);
		},autoPlay);

		function switch_lmag (iNow) {
			aPic.each(function  (i) {
				if (i != iNow) {
					aPic.eq(i).fadeOut().css('zIndex','1');
					aImg.eq(i).removeClass('active');
				} else{
					aPic.eq(i).fadeIn().css('zIndex','2');
					aImg.eq(i).addClass('active');
				};
			});
			oH4.html(arrData[iNow]);
		}
		
		function autoPlay () {
			timer = setInterval(function  () {
				iNow ++ ;
				iNow = iNow % arrData.length;
				switch_lmag(iNow);
			},1500);
		}
		autoPlay ();
		
	})();
	// 日历提示说明
	(function  () {
		var oPrompt = $('.today_info');
		var oImg  = oPrompt.find('img');
		var oStrong = oPrompt.find('strong');
		var oP = oPrompt.find('p');
		var oSpan = oPrompt.find('span');
		var aSpan = $('.calendar span');
		var aImg = $('.calendar li img');

		aImg.hover(function () {
			var iLeft = $(this).parent().position().left + 55;
			var iTop = $(this).parent().position().top - 30;
			var index = $(this).parent().index() % aSpan.size();

			oPrompt.show().css({'top': iTop, 'left': iLeft});
			oImg.attr('src', $(this).attr('src'));
			oStrong.text(aSpan.eq(index).text());
			oP.text($(this).attr('info'));
		},function  () {
			oPrompt.hide();
		});
	})();
	 // BBS高亮显示
	 (function  () {
	 	var aLi = $('.bbs ol li');
	 	aLi.mouseover(function(event) {
	 		aLi.removeClass('active');
	 		$(this).addClass('active');
	 	});
	 })();
	 // HOT鼠标提示效果
	 (function  () {
	 	var aLi = $('.hot_people li');
	 	var arr =[
	 		'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'];
			aLi.mouseover(function  () {
				if ($(this).index() == 0) return;
				aLi.find('.text').remove();
				$(this).append('<div class="text" style="width:'+($(this).width()-12)+'px"'+'"height:'+($(this).height()-12)+'px">'+arr[$(this).index()]+'</div>');
			});
	 })();
	 
});