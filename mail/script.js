// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email

const listaInvitati = ["marco", "giovanni", "luca", "franco", "enzo", "andrea"]

const mailUser = prompt("inserisci il tuo nome per la verifica di presenza")

let presente = false

for (let i = 0; i < listaInvitati.length; i++) {
    //debug
    //console.log(listaInvitati[i]);

    if (mailUser === listaInvitati[i]) {
        presente = true
    }
    //  {
    //     presente = false
    //     console.log(presente, "non ci risulti tra gli invitati");
        
    // }
    
}
if (presente) {
    console.log("benvenuto");
    
} else {
    console.log("non sei in lista");
    
}

//console.log(presente, "sei presente alla festa benvenuto")