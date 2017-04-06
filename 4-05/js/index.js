$(document).ready(function(){
	// var $ul=$('.prize_list .list');
	// var $ul=document.getElementsByClassName('list')[0];
	// var $li=$ul.getElementsByTagName('li');
	// 相对绝对定位已经实现。不能用animate,效果比较呆板
	// console.log($li);
	// var h=25;
	// // css设置的滚动
	// // 起始移动以及每次加的移动距离
	// function c(){
	// 	$($ul).css({
	// 		'bottom':h
	// 	})
	// 	h+=30;	
	// }

	// function move(){
	// 	if(h>=175){
	// 		$($ul).css({
	// 			'bottom':0
	// 		})
	// 		// 移动到底部，回置
	// 		if(h>=175){
	// 			h=0;
	// 			c();
	// 		}
	// 	}
	// 	else{
	// 		c();

	// 	}
		
	// }
	// 以下用marginTop、animate来实现内容的滑动，注释掉css里的相对绝对定位
	function move(){
		$('.list').animate({
			'marginTop': '-30px'},
			500, function() {
				// console.log($(this))
				$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  
			})
	}
	// 循环移动
	function interv(){
		setTimeout(move, 2000);
		// console.log(1);
		setTimeout(interv,2000);
	}
	interv();

})


