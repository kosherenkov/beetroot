$(document).ready(function () {
	$('.header').height($(window).height());

	$(".navbar a").click(function () {
		$("body,html").animate({
			scrollTop: $("#" + $(this).data('value')).offset().top
		}, 1000)

	})

})

let blog = [
	{
		title: 'Post Title',
		content: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: '/#',
		image: 'polit.jpg',
		date: 'March 12, 2014'
	},
	{
		title: 'Post Title',
		content: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: '/#',
		image: 'images.jpg',
		date: 'December 20, 2014'
	},
	{
		title: 'Post Title',
		content: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: '/#',
		image: 'image2.jpg',
		date: 'April 30, 2014'
	}
	,
	{
		title: 'Post Title',
		content: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		link: '/#',
		image: 'headerback.jpg',
		date: 'April 20, 2014'
	}
]


$('.product__slider').slick({
	nextArrow: '<button type="button" class="slick-prev"><img src="../images/arrow-prev.png"></button>',
	prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow-next.png"></button>',

	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1
})