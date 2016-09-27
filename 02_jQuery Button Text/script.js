//PREPARATION
//Impedire all'utente di visualizzare il messaggio sulla pagina all'inizio
//nascondere il messaggio, far apparire un pulsante
//e quando l'utente clicca far riapparire il messaggio e far scomparire il pulsante

//1. nascondere il messaggio
$('.spoiler h2').hide();
//2. aggiungere il pulsante
$('div .spoiler').append('<button>Scopri cosa hai vinto</button>');
//3. quando clicchiamo pulsante
$('button').click(function(){
	//3.1. mostrare il messaggio che si trova prima del pulsante che clicco
	$(this).prev().show();
	//3.2. nascondere il pulsante (rimuoverlo)
	$(this).remove();
});
	