console.log('int ok');  //inizializzazione progetto

const prezzoKm = 0.21;  //costante prezzo fisso

let distanzaKm = document.getElementById('distanza-km');
let etaPasseggero = document.getElementById('eta-passeggero');
let nomePasseggero = document.getElementById('nome-passeggero');
const submitGenera = document.getElementById('submit-genera');
const empity = document.getElementById('empity');



const card = document.getElementById('card-biglietto');
const cardText = document.getElementById('card-text');



function prevent(e){        //serve per utilizzare il form con un butoon di type submit
    e.preventDefault();
  }

submitGenera.addEventListener('click',
    function(){
        let valoreKm = parseInt(distanzaKm.value);
        
        if (isNaN(valoreKm) == true || etaPasseggero.value == 'disabled' || valoreKm >= 501 || valoreKm < 30){
            console.log('I dati inseriti sono errati er:101');
            alert('I dati inseriti sono errati, inserite dati validi');
        }
        else{
            console.log('Fin qui tutto ok');

            
            if (etaPasseggero.value == 'minorenne' || etaPasseggero.value == "maggiorenne" || etaPasseggero.value == "over"){
                console.log("Il nome dell'utente è:", nomePasseggero.value, isNaN(nomePasseggero.value));  
                console.log("I chilometri inseriti dall'utente sono:", valoreKm, isNaN(valoreKm));
                console.log("L'età del passeggero è:", etaPasseggero.value);
    
                let prezzoBiglietto = valoreKm * prezzoKm;    //variante prezzo biglietto (calcolo)
                console.log('Prezzo del biglietto:',prezzoBiglietto);
                prezzoBiglietto = prezzoBiglietto.toFixed(2);   //trasformazione in due decimali
                console.log(`Prezzo biglietto intero ${prezzoBiglietto} €`); //conferma lettura dati
    
                let messaggio;
                if (etaPasseggero.value == 'minorenne'){
                    console.log("Il passeggero è minorenne");   //conferma avvenuta variante
                    prezzoBiglietto = (prezzoBiglietto * 0.8);    //calcolo sconto su variante
                    messaggio = `Prezzo biglietto scontato del 20% `;
                }
                else if (etaPasseggero.value == "over"){
                    console.log("Il passeggero è over 65"); //conferma avvenuta variante
                    prezzoBiglietto = (prezzoBiglietto * 0.6);    //calcolo sconto su variante
                    messaggio = `Prezzo biglietto scontato del 40% `;
                }
                else if (etaPasseggero.value == 'maggiorenne'){
                    console.log(prezzoBiglietto);
                    prezzoBiglietto= parseInt(prezzoBiglietto)
                    messaggio = `Prezzo biglietto è di `;
                    console.log('sei maggiorenne')
                }
                prezzoBiglietto = prezzoBiglietto.toFixed(2);
                messaggio = messaggio + prezzoBiglietto + ' €';
                console.log(messaggio);  //conferma lettura dati
                //alert(messaggio)  //avviso utente

                document.getElementById('out-nome-passeggero').innerHTML = nomePasseggero.value;
                
                let fasciaOfferta;
                if (etaPasseggero.value == 'minorenne'){
                    fasciaOfferta = etaPasseggero.value
                    document.getElementById('out-offerta').innerHTML = 'Biglietto ridotto -20%';
                }
                else if(etaPasseggero.value == "over"){
                    fasciaOfferta = etaPasseggero.value
                    document.getElementById('out-offerta').innerHTML = 'Biglietto ridotto -40%';

                }
                else if(etaPasseggero.value == 'maggiorenne'){
                    fasciaOfferta = etaPasseggero.value
                    document.getElementById('out-offerta').innerHTML = 'Biglietto Standard';

                }

                const outCarrozza = (Math.floor(Math.random() * 10)+1);
                console.log('outCarrozza', outCarrozza, typeof outCarrozza);
                document.getElementById('out-carrozza').innerHTML = outCarrozza;

                function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
                }
                const outCodiceCp = getRandomInt(90000,100000);
                document.getElementById('out-codice-cp').innerHTML = outCodiceCp;
                console.log('outCodiceCp', outCodiceCp, typeof outCodiceCp);

                //document.getElementById('out-prezzo-biglietto').innerHTML += prezzoBiglietto;   //non funziona se non ricarichi la pagina
                document.getElementById('out-prezzo-biglietto').innerHTML = `${prezzoBiglietto} €` ;
            }
            else{
                console.log('I dati inseriti sono incompleti er:102');
                alert('I dati inseriti sono incompleti, selezionate una fascia d\'età');
            }
            // else if (etaPasseggero.value == 'disabled'){
                
            // }
            // prezzoBiglietto = prezzoBiglietto.toFixed(2);
            // messaggio = messaggio + prezzoBiglietto + ' €';
            // console.log(messaggio);  //conferma lettura dati
            // alert(messaggio)  //avviso utente
            
            //card.classList.add('d-flex'): //con !important non funziona
            card.className="card p-5 d-flex";
            
            //card.classList.add('d-flex'): //con !important non funziona
            cardText.className="d-block";
            
            
        }
    }
    
);

empity.addEventListener('click',
                            
            function(){
    
                distanzaKm.value = '';
                nomePasseggero.value = '';
                etaPasseggero.value = 'disabled';
                card.className="card p-5 d-none";
                cardText.className="d-none";
    
    
            }
    
);

            // *****!!!!! non funziona !!!! chiedere aiuto per questo
// const input = distanzaKm + etaPasseggero + nomePasseggero;
// console.log('input',input,typeof input);

// input.addEventListener('click',


//     function(){
//         if(distanzaKm.value == "" || nomePasseggero.value == "" ||etaPasseggero.value == "disabled"){
//             console.log('nono');
//         }
//         else{
//             console.log('si')
//             distanzaKm.value = '';
//             nomePasseggero.value = '';
//             etaPasseggero.value = 'disabled';
//             card.className = "card p-5 d-none";
//             cardText.className = "d-none";
//         }
//     }  
// );