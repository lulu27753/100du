$(function  () {
	// 搜索切换
	(function function_name (argument) {
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
		},autoPlay);
	})();
});