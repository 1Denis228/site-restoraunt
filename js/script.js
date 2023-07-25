$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		
		slidesToShow:3,
		autoplay:false,
		speed:2000,
		autoplaySpeed:1500,
		responsive:[
			{
				breakpoint: 1199,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$('.slider-comments').slick({
		arrows:false,
		
		slidesToShow:1,
		dots:true,
		autoplay:true,
		speed:3000,
		autoplaySpeed:5000,
	});

	$('.sliders-cook').slick({
		arrows:false,
		
		slidesToShow:3,
		dots:true,
		autoplay:true,
		speed:2000,
		autoplaySpeed:1000,
		responsive:[
			{
				breakpoint: 1199,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

function backToTop()
{
    let button = $('.back_to_top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 300)
        {
            button.fadeIn();
        }else{
            button.fadeOut();
        }
    });
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 300);
    })
}
backToTop();