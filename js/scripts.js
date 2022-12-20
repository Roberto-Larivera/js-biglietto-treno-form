console.log('int ok');  //inizializzazione progetto
/*
const prezzoKm = 0.21;  //costante prezzo fisso
let distanzaKm = document.getElementById('distanza-km');

let etaPasseggero = document.getElementById('eta-passeggero');
const submitGenera = document.getElementById('submit-genera')

// console.log('distanzaKm', distanzaKm, typeof distanzaKm, isNan(distanzaKm))

submitGenera.addEventListener('click',
    function(){
        console.log('L\'utente ha cliccato su genera')
        
        console.log('la distanza indicata è', distanzaKm.value,typeof distanzaKm.value)
        console.log('distanzaKm', distanzaKm, typeof distanzaKm, isNan(distanzaKm))
        if (isNaN(distanzaKm) == true){
            console.log('Il programma si è bloccato')
            alert('Dati inseriti non validi')
        }
        else{
            console.log('la distanza indicata è', distanzaKm.value,typeof distanzaKm.value)
        }

        
    }
)
*/

let distanzaKm = prompt('Inserisci i chilometri da percorrere a numero. Es. 50');   //input utente chilometri
distanzaKm = parseInt(distanzaKm);  //trasformazione dati numerici
console.log(typeof distanzaKm);     //controllo trasformazione
console.log("I chilometri inseriti dall'utente sono:",distanzaKm);  //conferma lettura dati

//document.getElementById('distanzaKm').innerHTML = distanzaKm;   //scrittura in html dati

const prezzoKm = 0.21;  //costante prezzo fisso

let prezzoBiglietto = distanzaKm * prezzoKm;    //variante prezzo biglietto (calcolo)
//console.log(prezzoBiglietto)
//prezzoBiglietto = parseInt(prezzoBiglietto);    //trasformazione dati numerici
//console.log(prezzoBiglietto)
prezzoBiglietto = prezzoBiglietto.toFixed(2);   //trasformazione in due decimali
console.log(typeof prezzoBiglietto);    //controllo trasformazione
console.log(`Prezzo biglietto intero ${prezzoBiglietto} €`) //conferma lettura dati

let etàPasseggero = prompt("Inserisci l'età del passeggero a numero. Es. 18");  //input utente età passeggero
etàPasseggero = parseInt(etàPasseggero);    //trasformazione dati numerici
console.log(typeof etàPasseggero);  //controllo trasformazione
console.log("L'età del passeggero è:",etàPasseggero);   //conferma lettura dati

//document.getElementById('etàPasseggero').innerHTML = etàPasseggero; //scrittura in html dati

let messaggio;
if (etàPasseggero < 18) {
    console.log("Il passeggero è minorenne");   //conferma avvenuta variante
    prezzoBiglietto = (prezzoBiglietto -((prezzoBiglietto / 100) * 20));    //calcolo sconto su variante
    //prezzoBiglietto = prezzoBiglietto.toFixed(2);   //trasformazione in due decimali
    messaggio = `Prezzo biglietto scontato del 20% `;

    //console.log(`Prezzo biglietto scontato del 20% ${prezzoBiglietto} €`);  //conferma lettura dati
    //alert(`Il prezzo del biglietto ridotto del 20% è di ${prezzoBiglietto} €`)  //avviso utente
}
else if (etàPasseggero >= 65){
    console.log("Il passeggero è over 65"); //conferma avvenuta variante
    prezzoBiglietto = (prezzoBiglietto -((prezzoBiglietto / 100) * 40));    //calcolo sconto su variante
    //prezzoBiglietto = prezzoBiglietto.toFixed(2);   //trasformazione in due decimali
    messaggio = `Prezzo biglietto scontato del 40% `;

    //console.log(`Prezzo biglietto scontato del 40% ${prezzoBiglietto} €`);  //conferma lettura dati
    //alert(`Il prezzo del biglietto ridotto del 40% è di ${prezzoBiglietto} €`)  //avviso utente
}
else {
    //prezzoBiglietto = prezzoBiglietto.toFixed(2);   //trasformazione in due decimali

    //console.log(`Prezzo biglietto è di ${prezzoBiglietto} €`);  //conferma lettura dati
    //alert(`Il prezzo del biglietto è di ${prezzoBiglietto} €`)  //avviso utente
    messaggio = `Prezzo biglietto è di `;
    

}
//prezzoBiglietto = prezzoBiglietto.toFixed(2);   //trasformazione in due decimali //******alt
messaggio = messaggio + prezzoBiglietto + ' €';
console.log(messaggio);  //conferma lettura dati
alert(messaggio)  //avviso utente
//document.getElementById('prezzoBiglietto').innerHTML = prezzoBiglietto;