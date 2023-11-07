'use strict';

//DICHIARAZIONI
const prezzoKilometro = 0.21;
const scontoMinorenni = 0.8;
const scontoOver65 = 0.6;

const btnGenera = document.getElementById('genera');
btnGenera.addEventListener('click', function () {
  //INPUT
  const nome = document.getElementById('nome').value;
  const kilometri = Number(document.getElementById('kilometri').value);
  const eta = document.getElementById('eta').value;

  console.log(nome);
  console.log(kilometri);
  console.log(eta);

  //VERIFICA NUMERI
  if (!isNaN(kilometri)) {
    //Calcolo prezzo
    let prezzo = prezzoKilometro * kilometri;
    console.log('Prezzo biglietto: ' + prezzo.toFixed(2) + '€');

    //CONDIZIONI
    if (eta == 'minorenne') {
      prezzo = prezzo * scontoMinorenni;
    } else if (eta == 'over65') {
      prezzo = prezzo * scontoOver65;
    }
  } else {
    console.log('Errore');
  }

  //INNER HTML
  document.getElementById;
});
