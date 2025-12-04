// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// creo numeri da 1 a 6 (per i due giocatori) e faccio generare 2 numeri

// Genera un numero intero casuale tra 1 e 6 (inclusi)
// const lancioDado1 = Math.floor(Math.random() * 6) + 1;
// const lancioDado2 = Math.floor(Math.random() * 6) + 1;

if (lancioDado1 >lancioDado2) {
    console.log("hai vinto tu")
} else if (lancioDado2 > lancioDado1) {
    console.log("ritenta sarai più fortuanato");  
} else {
    console.log("avete fatto lo stesso numero,ritirate!");
    
}
console.log(lancioDado1, "mio tiro");
console.log(lancioDado2, "tiro computer");
