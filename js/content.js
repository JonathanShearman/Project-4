$(document).ready(function() {
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Jonathan Shearman</small>';
			}
		}
	});
});

// Search Bar Filter

function myFunction() {

    var input, filter, x, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    x = document.getElementsByClassName('myImg');


    for (i = 0; i < x.length; i++) {
        a = x[i].getAttribute('title')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            x[i].style.display = '';
        } else {
            x[i].style.display = 'none';
        }
    }
}
