// Creare un Dropdown menu per schermi piccoli

// Inserire il tag select all'interno del nav
// creo il tag select
var $select = $('<select></select>');
// lo inserisco nel nav col metodo append
$("nav").append($select);

// per tutti gli elementi del menu di navigazione vogliamo
$('nav a').each(function(){
	// Creare un tag option (nel nostro caso 3)
	var $option = $("<option></option>");
	// inserire i tag option all'interno del tag select
	$select.append($option);
	// inserire il testo all'interno del tag option (Portfolio, About, Contact)
	$option.text($(this).text());
	// inserire il value del tag option, ovvero l'href di ogni link
	$option.val($(this).attr('href'));
});


// Creare un pulsante che cliccandolo ci porti al link selezionato
$button = $('<button>Go!</button>');
// inseriamolo nel nav con l'append
$("nav").append($button);

// usiamo l'evento click per catturare il value
// dell'option selezionata e reindirizzare ad esso
$button.click(function(){
	// indirizzo l'utente al value del tag select
	// l'option con attr selected
	// val() per recuperare il val di select
	// ovvero l'option selezionato
	window.location =$select.val();
})



// per piccoli schermi nascondere il nav e mostrare al suo posto
// il menu dropdown con annesso pulsante
// (con CSS)

// nascondere il menu dropdown e il pulsante per
// i grandi schermi
// (con CSS)

