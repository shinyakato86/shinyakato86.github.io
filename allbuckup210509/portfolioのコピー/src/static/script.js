$(function(){
	'use strict';
	
	// ヘッダーMENUボタン
	$('#js-headerSpMenuBtn').on('click', function(){
		$(this).toggleClass('is-active');
		$('body').toggleClass('is-fixed');
		$('#js-header').slideToggle(500);
	});

	// フォントサイズ切り替え
	const fs_s = '56.3%';
	const fs_m = '62.5%';
	const fs_l = '68.8%';
	// クッキーがあれば適用
	const fs = Cookies.get('fs');
	if (fs === 's') {
		$('html').css('font-size', fs_s);
		$('#js-fontSize-s').addClass('is-active');
	} else if(fs === 'l') {
		$('html').css('font-size', fs_l);
		$('#js-fontSize-l').addClass('is-active');
	
	} else {
		$('html').css('font-size', fs_m);
		$('#js-fontSize-m').addClass('is-active');
	}
	
	$('#js-fontSize-s').on('click', function(){
		$('html').css('font-size', fs_s);
		$(this).addClass('is-active');
		$(this).siblings().removeClass('is-active');
		Cookies.set('fs', 's');
	});
	$('#js-fontSize-m').on('click', function(){
		$('html').css('font-size', fs_m);
		$(this).addClass('is-active');
		$(this).siblings().removeClass('is-active');
		Cookies.set('fs', 'm');
	});
	$('#js-fontSize-l').on('click', function(){
		$('html').css('font-size', fs_l);
		$(this).addClass('is-active');
		$(this).siblings().removeClass('is-active');
		Cookies.set('fs', 'l');
	});

	// pagetopボタン
	const pagetop = $('#js-pagetop');
	pagetop.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
	
	// sp時のみ電話リンク追加
    const ua = navigator.userAgent;
    if((ua.indexOf('iPhone') > 0 && ua.indexOf('iPod')) === -1 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile')) > 0 || ua.indexOf('Windows Phone') > 0){
        $('.js-tel').each(function(){
            const str = $(this).text();
            $(this).html($('<a class="link-tel">').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
        });
    }
	
	//headerNavSecondary
	if(navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i)){
		$('.js-headerNav_btn').click(function(){
		$(this).next('.js-headerNavSecondary').slideToggle(500);
		});
	} else{
			$('.js-headerNav_btn').click(function(){
			$('headerNav_link').toggleClass('is-active');
			// 他でひらいているメニューがあれば閉じる
			const otherNavBtn = $(this).parent().siblings().children('.js-headerNav_btn.is-active');
			if(otherNavBtn.length > 0) {
				otherNavBtn.removeClass('is-active');
				otherNavBtn.next('.js-headerNavSecondary').slideToggle(500);
			}
			$(this).toggleClass('is-active');
			$(this).next('.js-headerNavSecondary').slideToggle(500);
	});
}

	//タブメニュー
	for (let i=1; i<=3; i++) { //max3tab
		const tabid01_01 = '#js-tabBtnList_btn_0'+ i,tabid01_02 = '#js-tabBtnList_item_0'+ i;
		$(tabid01_01).children().on('click', function() {
			const index = $(this).index();
			$(tabid01_01).children().removeClass('is-active');
			$(tabid01_02).children().removeClass('is-active').eq(index).addClass('is-active');
			$(this).addClass('is-active');
		});

		const tabid02_01 = '#js-tabBtnList_btn02_0'+ i,tabid02_02 = '#js-tabBtnList_item02_0'+ i;
			$(tabid02_01).children().on('click', function() {
			const index = $(this).index();
			$(tabid02_01).children().removeClass('is-active');
			$(tabid02_02).children().removeClass('is-active').eq(index).addClass('is-active');
			$(this).addClass('is-active');
		});
	}
	
	//ニュース項目
	$('#js-tabBtnList_btn_03').children().on('click', function() {
		var index = $('#js-tabBtnList_btn_03').children().index(this);
		$('#js-newsList03,js-tabBtnList_btn_03').children().removeClass('is-active');
		$('#js-newsList03').children().eq(index).addClass('is-active');
		$(this).addClass('is-active');
	});
	
	//アコーディオン
	$(".js-blockToggle_title").click(function () {
		$(this).next(".js-blockToggle_detail").slideToggle("fast");
		$(this).toggleClass("is-open");
	});
});

$(window).on('load', function(e){
	'use strict';
	
	//spヘッダー固定の場合
	const headerH = $('header').outerHeight();
	
	// アンカーリンク
	$('a[href^="#"]').on('click', function(){
		const href= $(this).attr('href');
		const target = $(href === '#' || href === '' ? 'html' : href);
		const position = target.offset().top - headerH;
		$('body, html').animate({scrollTop:position}, 550, 'swing');
		return false;
	});
	
	// 外部ページへのアンカーリンク
	if(document.URL.match("#")) {
		let str = location.href ;
		let cut_str = "#";
		let index = str.indexOf(cut_str);
		let href = str.slice(index);
		let target = href;
		let position = $(target).offset().top - headerH;
		$("html, body").scrollTop(position);
		return false;
	}
});