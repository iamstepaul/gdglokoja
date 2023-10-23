( function($) {
  'use strict';

$(function(e) {
	
	$(window).scroll(function(){
	  var sticky = $('#header'),
		  scroll = $(window).scrollTop();

	  if (scroll >= 100) sticky.addClass('sticky');
	  else sticky.removeClass('sticky');
	});
	
	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/
	var navbar=$('.js-navbar');
	var navbarAffixHeight=90
	$('.js-target-scroll').on('click', function(e) {
		var target = $(this.hash);
		if (target.length) {
			$('html,body').animate({
				scrollTop: (target.offset().top - navbarAffixHeight + 1)
			}, 1000);
			return false;
		}
	});
	$('body').scrollspy({
			offset:  navbarAffixHeight + 1
	});
	$('.navbar-nav a ').on('click', function(){
	  if($('#navigation').removeClass('shownav')) {
	  }
    });
	
	/*-------------------------------------------------------------------------------
		Navigation
	-------------------------------------------------------------------------------*/
	$('#menu-toggle-bar').on('click', function(e) {
		   $("#navigation").toggleClass("shownav");
	});
	$('#menu-toggle-close').on('click', function(e) {
		   $("#navigation").removeClass("shownav");
	});

	/*-------------------------------------------------------------------------------
	 Timer
	-------------------------------------------------------------------------------*/
 	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());
 
	/*-------------------------------------------------------------------------------
	  Tab li Add Class
	-------------------------------------------------------------------------------*/
$('.conf-close').on('click', function(e) {
	if ( $(this).hasClass('menu-down') ) {
		$(this).removeClass('menu-down');
	} else {
		$(this).addClass('menu-down');    
	}
});	
	


 /*------------------------------------------------------------------
	Countdown
	-------------------------------------------------------------------*/
 
	var endDate = "December 16, 2023";
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div class='countdown-amount'>" + this.leadingZeros(data.days, 2) + " <span class='countdown-period'>Days</span></div><div class='countdown-amount'>" + this.leadingZeros(data.hours, 2) + " <span class='countdown-period'>Hours</span></div><div class='countdown-amount'>" + this.leadingZeros(data.min, 2) + " <span class='countdown-period'>Minutes</span></div><div class='countdown-amount'>" + this.leadingZeros(data.sec, 2) + " <span class='countdown-period'>Seconds</span></div>");
	  }
	});	
  
  
  /*------------------------------------------------------------------
	back to top
	-------------------------------------------------------------------*/
 var top = $('#back-top');
	top .hide();
	 
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				top .fadeIn();
			} else {
				top .fadeOut();
			}
		});
		$('#back-top a').on('click', function(e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

})(jQuery);