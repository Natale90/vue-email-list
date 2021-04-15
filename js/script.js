//-------------APPUNTI 15-04-2021---------------------

// ---------------API--------------
// https è http + la criptografia.

/*
il numero identificativo di  un server è composto da 4 cifre conposte da numeri compresi tra zero e 255.

La comunicazione in GET è quella fatta in chiaro: meno sicura ma più comoda.
Si usa principalmente per la trasmissione di informazioni non riservate.

Come è composto un URL:
-protocollo
-dominio
-pagina richiesta dal dominio
-? il punto di domanda separa le coordinate per identificare il server e la domanda della ricerca dalle informazioni che vengono richieste con chiave e domanda.
-chiave=informazione + &...


la comunicazione in POST... (da approfondire)

AJAX = JS+HTTP;
html è un tipo di XML
JSON è un oggetto javascript standardizzato che viene utilizzato
per permettere al client di comunicare con  il server.
*/

// function initVue(){
//
//
//   new Vue({
//
//     el: '#app',
//
//     data: {
//
//     },
//
//     methods:{
//
//     },
//
//   })
//
// };


//Es1
// modificare il seguente codice per far apparire al click del bottone una
// box rossa nel caso in cui si riceva un true come risposta dal server
// (API), verde altrimenti

//Es1.2
// TODO NOW: modificare il seguente codice per far apparire
// al click del bottone una box rossa
// nel caso in cui si riceva un true come risposta
// dal server (API), verde altrimenti


//Es2:
// modificare l'esercizio in modo da generare box sempre
// dello stesso colore ma riportanti la cifra scaricata dalla seguente API

function boxGenerator(){

  $.ajax({

    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: 'GET',

    success: function(data) {

      const res = data.response;
      addBox(res);
    },

    error: function() {
      console.log('error');
    },

  });

};


function addBox(ajaxRes){
  const target = $('#target');
  target.append(`<div class="box bg-green"> ${ajaxRes} </div>`);

  // const target = $('#target');
  //
  // if (ajaxRes) {
  //
  //   target.append('<div class="box bg-green"></div>');
  // } else {
  //
  //   target.append('<div class="box bg-red"></div>');
  // };

};

function addOnClick(){

  const button = $('#btn');
  button.click(boxGenerator);

};
// -------------------------------------------------------------------------------
function getEmail(){

  $.ajax({

    url: "https://flynn.boolean.careers/exercises/api/random/mail",

    method: 'GET',

    success: function(data){
      const email = data.response;
      $('#list').append('<li>' + email + '</li>');
      // printList(email);
      // console.log(email);
    },

    error: function(){

      console.log('errore');
    },

  });

};

function printList(){
  for(let i=0; i<10;i++){

    getEmail();
  }
};

function init(){
  addOnClick();
  printList();
};


$(init);
// document.addEventListener('DOMContentLoaded', init);
