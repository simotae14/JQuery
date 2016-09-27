$(".main-header").sticky();

$('.main-header').on('sticky-start', function() { 
 	// nascondo h2
 	$('.main-header h2').hide(); 
 	// aggiungo margin top
 	$('.main-header h1').css('margin-top', '15px');
});

$('.main-header').on('sticky-end', function() { 
	// mostro h2
	$('.main-header h2').show(); 
	// rimetto il margin-top ad 1px
	 	$('.main-header h1').css('margin-top', '1px');
});

$('.banner p').sticky({
	topSpacing: 65
});

$('.banner p').on('sticky-start', function() { 
 	// aggiungo margin top
 	$('.banner p').css('color', '#000');
});

$('.banner p').on('sticky-end', function() { 
 	// aggiungo margin top
 	$('.banner p').css('color', '#fff');
});
