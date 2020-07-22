$(document).ready(function(){

	$('.menu-icon').click(function(){
		$('span').toggleClass('active');
		$('.main-menu').slideToggle('active');
	});

	$('.testimonials-3').slick({
	  dots: false,
	  arrows: true,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});

		$('.accordion-header').click(function(e) {
	  	e.preventDefault();
	  
	    var $this = $(this);
	  
	    if ($this.hasClass('active')) {
	        $this.removeClass('active');
	        $this.next().slideUp("slow");
	    } else {
	        $this.toggleClass('active');
	        $this.next().slideToggle("slow");
	        $('.accordion-header').not($(this)).removeClass('active');
	        $('.accordion-body').not($(this).next()).slideUp("slow");
	    }
	});

});	