//chilometri del passeggero 



const inputNomeCognome = document.getElementById("nome-cognome")
console.log("nome e cognome", inputNomeCognome)

const InputButton = document.getElementById("buttoninvio")
console.log(InputButton);

//età passeggero
const InputFasciaEta = document.getElementById("sconto")//string
console.log("fascia eta", InputFasciaEta);



//prezzo del biglietto in base ai km (0.21km)




//sconto dei minorenni 20% sconto 40% per over 65
// if(InputFasciaEta && InputMinorenne) {
//     sconto = (prezzo * 0.2);

// }
// else if (InputFasciaEta && InputOver65) {
//     sconto = (prezzo * 0.4);
// }


// console.log(prezzosconto);




InputButton.addEventListener("click", function () {
    const InputKm = document.getElementById("km")

    console.log("chilometri passeggero", InputKm, "km");

    const prezzo = (InputKm * 0.21); //numb

    console.log("prezzo standard", prezzo, "euro");

    const inputNomeCognomeValue = inputNomeCognome.value;
    const kmpass = InputKm.value;
    const InputSconto = document.getElementById("sconto").value;
    console.log(InputSconto);
    console.log(inputNomeCognomeValue, kmpass);




    let sconto = 0



    if (InputSconto === "minorenne") {
        sconto = (prezzo * 0.2);
    }
    else if (InputSconto === "over 65") {
        sconto = (prezzo * 0.4);
    }

    let prezzosconto = prezzo - sconto;
    console.log(prezzosconto)

})