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
});