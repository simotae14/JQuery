// PREPARATION
// problema: quando clicco su un'immagine vengo
// rimandato ad un'altra pagina
// soluzione: sovrapporre l'immagine ad uno sfondo
// nero - lightbox


// PLAN
// Catturare il click dell'utente sull'immagine
$('#gallery a').click(function(){
	// evito che i link vengano aperti alla vecchia
	event.preventDefault();
	// recupero il valore dell'attributo dell'ele che clicchiamo
	var href = $(this).attr('href');
	// Mostrare lo sfondo scuro (overlay)
	$($overlay).show();
	// Mostrare sopra l'overlay l'immagine cliccata
	$($immagine).attr('src', href);
	$($immagine).show();
	// Mostrare il testo sopra l'overlay
	// seleziono tutte le img del tag a che clicco
	var testoDescrizione = $(this).children('img').attr('alt');
	$descrizione.text(testoDescrizione);
});
// dato che mi servirà spesso catturo l'ele in una var
// uso $() per avere l'oggetto jquery
var $overlay	= $('<div id="overlay"></div>');
// creo la var anche per l'img che andremo ad mettere sopra l'overlay
var $immagine = $('<img>');
// creo var che conterrà il valore dell'attributo alt dell'img
var $descrizione = $('<p></p>');

// Aggiungere sulla pagina l'overlay
$('body').append($overlay);
	// Aggiungere l'immagine
$overlay.append($immagine);
	// Aggiungere il testo, la descrizione dell'immagine
	// quello che ci sta dentro ad alt
$overlay.append($descrizione);

// Quando clicco sull'overlay
$overlay.click(function(){
	//nascondere l'overlay
	$(this).hide();	
})
