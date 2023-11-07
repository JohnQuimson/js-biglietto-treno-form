'use strict';

const btnGenera = document.getElementById('genera');
btnGenera.addEventListener('click', function () {
  //DICHIARAZIONI
  const prezzoKilometro = 0.21;
  const scontoMinorenni = 0.8;
  const scontoOver65 = 0.6;
  let prezzo;
  let offerta = 'Prezzo standard';
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
    prezzo = prezzoKilometro * kilometri;
    console.log('Prezzo biglietto: ' + prezzo.toFixed(2) + '€');

    //CONDIZIONI
    if (eta == 'minorenne') {
      prezzo = prezzo * scontoMinorenni;
      offerta = 'Sconto minorenni';
    } else if (eta == 'over65') {
      prezzo = prezzo * scontoOver65;
      offerta = 'Sconto Over 65';
    }
  } else {
    console.log('Errore');
  }

  //INNER HTML
  document.getElementById('nome-passegg').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = Math.floor(
    Math.random() * 20 + 1
  );
  document.getElementById('codice').innerHTML =
    Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  document.getElementById('costo').innerHTML = prezzo.toFixed(2) + '€';

  //metti classe = show quando cliccato
  document.getElementById('sotto').className = 'show';
});

const btnAnnulla = document.getElementById('annulla');
btnAnnulla.addEventListener('click', function () {
  document.getElementById('nome-passegg').innerHTML = '';
  document.getElementById('offerta').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('codice').innerHTML = '';
  document.getElementById('costo').innerHTML = '';

  //metti classe = hidden quando cliccato
  document.getElementById('sotto').className = 'hidden';
});
