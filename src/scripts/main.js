window.Modis = {};
Modis.Mobile = {};
Modis.Mobile.menu = function() {
	var show = function() {
		$('.js-mobile-menu').addClass('active');
	}
	var hide = function() {
		$('.js-mobile-menu').removeClass('active');	
	}
	$('.js-mobile-menu-show').on('click', function(){
		show();
		return false;
	});
	$('.js-mobile-menu-hide').on('click', function(){
		hide();
		return false;
	});
}

Modis.slider = function() {
  $('.bxslider').bxSlider({
    auto: true
  });
}

Modis.Mobile.init = function() {
	this.menu();
}

$(function(){
	Modis.Mobile.init();
    Modis.slider();
});