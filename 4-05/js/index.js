$(document).ready(function(){
	// var $ul=$('.prize_list .list');
	var $ul=document.getElementsByClassName('list')[0];
	var $li=$ul.getElementsByTagName('li');
	console.log($li);
	var h=20;
	var index=0;
	function c(){
			$($ul).css({
			'bottom':h
		})
			h+=30;	
			}
	function move(){
		if(h>=170){
			$($ul).css({
				bottom:0
			})
			if(h>=170){
				h=0;
				c();
			}
		}
		else{
			c();

		}
		
	}
	function interv(){
		setTimeout(move, 2000);
		// console.log(1);
		setTimeout(interv,2000);
	}
	interv();

})