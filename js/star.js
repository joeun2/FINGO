var radios = document.querySelectorAll('#star_rating input[type=radio]');
var output = document.querySelector('#star_rating output');

var do_something = function(stars) {
	// ajax
	output.textContent = stars;
};


// 모든 라디오 버튼을 반복하고 클릭 추가
// 레이블에 이벤트 리스너
Array.prototype.forEach.call(radios, function(el, i){
	var label = el.nextSibling.nextSibling; //다음 형제
	label.addEventListener("click", function(event){
		do_something(label.querySelector('span').textContent);
	});
});

// 양식이 제출되면 do_something
document.querySelector('#star_rating').addEventListener('submit', function(event){
	do_something(document.querySelector('#star_rating :checked ~ label span').textContent);
	event.preventDefault();// 이벤트 기본값 방지
	event.stopImmediatePropagation();
});



(function (global, $) {
	'use strict';
	function cencelBtnEvent() {
		$('.close-btn').on('click', function () {
			$('label>svg').addClass("close-btn-active");
			// $('label').css("color", "#999");
			$('label > svg').hover(function () {
				$('label>svg').removeClass("close-btn-active");
			});
		});
	}
	cencelBtnEvent();


	// eventReset();

})(this, this.jQuery);
