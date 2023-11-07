'use strict';

//DICHIARAZIONI
const prezzoKilometro = 0.21;
const scontoMinorenni = 0.8;
const scontoOver65 = 0.6;

//INPUT
/*const kilometri = Number(prompt('Distanza in km: '));
console.log(kilometri + ' km');
const eta = Number(prompt('Età del passeggero: '));
console.log(eta + ' anni');*/

//VERIFICA NUMERI
if (!isNaN(kilometri) && !isNaN(eta)) {
  //Calcolo prezzo
  let prezzo = prezzoKilometro * kilometri;
  console.log('Prezzo biglietto: ' + prezzo.toFixed(2) + '€');

  //CONDIZIONI
  if (eta < 18) {
    prezzo = prezzo * scontoMinorenni;
    console.log('Prezzo con sconto minorenni: ' + prezzo.toFixed(2) + '€');
  } else if (eta >= 65) {
    prezzo = prezzo * scontoOver65;
    console.log('Prezzo con sconto Over 65: ' + prezzo.toFixed(2) + '€');
  } else {
    console.log('Non vengono applicati sconti.');
  }
} else {
  console.log('Errore');
}
