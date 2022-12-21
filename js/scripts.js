console.log('int ok');  //inizializzazione progetto

const prezzoKm = 0.21;  //costante prezzo fisso

let distanzaKm = document.getElementById('distanza-km');
let etaPasseggero = document.getElementById('eta-passeggero');
let nomePasseggero = document.getElementById('nome-passeggero');
const submitGenera = document.getElementById('submit-genera');






submitGenera.addEventListener('click',
    function(){
        let valoreKm = parseInt(distanzaKm.value);
        
        if (isNaN(valoreKm) == true){
            console.log('I dati inseriti sono errati er:101');
            alert('I dati inseriti sono errati er:101');

        }
        else{
            console.log('Fin qui tutto ok');

            
            console.log("Il nome dell'utente è:", nomePasseggero.value, isNaN(nomePasseggero.value));  
            console.log("I chilometri inseriti dall'utente sono:", valoreKm, isNaN(valoreKm));
            console.log("L'età del passeggero è:", etaPasseggero.value);

            let prezzoBiglietto = valoreKm * prezzoKm;    //variante prezzo biglietto (calcolo)
            console.log('Prezzo del biglietto:',prezzoBiglietto);
            prezzoBiglietto = prezzoBiglietto.toFixed(2);   //trasformazione in due decimali
            console.log(`Prezzo biglietto intero ${prezzoBiglietto} €`); //conferma lettura dati

            let messaggio;
            if (etaPasseggero.value == 'minorenne' || etaPasseggero.value == "maggiorenne" || etaPasseggero.value == "over"){
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
                alert(messaggio)  //avviso utente

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
                console.log(outCarrozza);
                document.getElementById('out-carrozza').innerHTML = outCarrozza;




            }
            else{
                console.log('I dati inseriti sono errati');
                alert('I dati inseriti sono errati');
            }
            // else if (etaPasseggero.value == 'disabled'){
                
            // }
            // prezzoBiglietto = prezzoBiglietto.toFixed(2);
            // messaggio = messaggio + prezzoBiglietto + ' €';
            // console.log(messaggio);  //conferma lettura dati
            // alert(messaggio)  //avviso utente

        }
    }
)