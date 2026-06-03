// input utente
const kmTraveled = document.getElementById("kmTraveled")
const passengerAge = document.getElementById("passengerAge"); 
const btnInput = document.getElementById("submit");

// dati dell'esercizio
const baseCostKm = 0.21; // €
const discountUnder18 = 0.2; // pari al 20%
const discountOver65 = 0.4;  // pari al 40%
// calcolo costo km per under 18 e over 65 
const costKmUnder18 =  baseCostKm - (baseCostKm * discountUnder18);
const costKmOver65 =   baseCostKm - (baseCostKm * discountOver65);

btnInput.addEventListener('click',(event) => {
    event.preventDefault();
     const km = Number(kmTraveled.value);
     const age = Number(passengerAge.value);

    console.log("KM:", km);
    console.log("Age:", age);

    if ( age < 18) {
        
             let priceUnder18 =  km * costKmUnder18;

             console.log(priceUnder18.toFixed(2));

           
        } else 
            
        if (age >= 65) {

         
           let priceOver65 = km * costKmOver65;
           console.log(priceOver65.toFixed(2));

        } 
        else {
        
           
            let priceBaseCost = km * baseCostKm;
            console.log(priceBaseCost.toFixed(2));
        }

});

 