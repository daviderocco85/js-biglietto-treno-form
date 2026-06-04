// Variabili globali di richiamo agli elementi nel DOM
const kmTraveled = document.getElementById("kmTraveled")
const passengerAge = document.getElementById("passengerAge"); 
const btnInput = document.getElementById("submit");


// KM → accetta interi o decimali
const kmRegex = /^[0-9]+([.,][0-9]+)?$/;

// Età → solo interi
const ageRegex = /^[0-9]+$/;


// ===============================
// FUNZIONE UNICA DI VALIDAZIONE
// ===============================
function validateInput(inputElement, regex, isFinal = false, maxValue = null) {
    const value = inputElement.value.trim();

    // Campo vuoto
    if (value === "") {
        if (isFinal) {
            inputElement.classList.remove("is-valid");
            inputElement.classList.add("is-invalid");
            return false;
        } else {
            inputElement.classList.remove("is-valid", "is-invalid");
            return;
        }
    }

    // Regex valida?
    if (!regex.test(value)) {
        inputElement.classList.remove("is-valid");
        inputElement.classList.add("is-invalid");
        return isFinal ? false : undefined;
    }

    // Controllo limite massimo (solo per età)
    if (maxValue !== null) {
        const numericValue = Number(value);
        if (numericValue > maxValue) {
            inputElement.classList.remove("is-valid");
            inputElement.classList.add("is-invalid");
            return isFinal ? false : undefined;
        }
    }

    // Valido
    inputElement.classList.remove("is-invalid");
    inputElement.classList.add("is-valid");
    return isFinal ? true : undefined;
}

// ===============================
// VALIDAZIONE LIVE
// ===============================
function attachLiveValidation(inputElement, regex, maxValue = null) {
    inputElement.addEventListener("input", () => {
        validateInput(inputElement, regex, false, maxValue);
    });
}


attachLiveValidation(kmTraveled, kmRegex);
attachLiveValidation(passengerAge, ageRegex, 120);


// ===============================
// MOSTRA CARD
// ===============================

function showResultCard(km, age, finalPrice, discountLabel) {
    const container = document.getElementById("resultCardContainer");

    // Badge dinamico
    let badgeClass = "badge-none";

    if (discountLabel.includes("20%")) badgeClass = "badge-under18";
    if (discountLabel.includes("40%")) badgeClass = "badge-over65";

    container.innerHTML = `
        <div class="card mt-4 shadow-sm fade-in">
            <div class="card-body">

                <!-- LOGO ITALRAIL -->
                <div class="text-center mb-1">
                    <img src="assets/img/ItalRail_logo.png" alt="ItalRail Logo" class="card-logo">
                </div>

                <h5 class="card-title text-center">Riepilogo Biglietto</h5>

                <p class="card-text"><strong>Kilometri:</strong> ${km}</p>
                <p class="card-text"><strong>Età passeggero:</strong> ${age}</p>

                <p class="card-text">
                    <strong>Sconto applicato:</strong>
                    <span class="badge ${badgeClass}">${discountLabel}</span>
                </p>

                <hr>

                <p class="card-text fs-5">
                    <strong>Prezzo finale:</strong>
                    <span class="badge bg-primary">${finalPrice.toFixed(2)} €</span>
                </p>
            </div>
        </div>
    `;
}


// ===============================
// VALIDAZIONE FINALE AL CLICK
// ===============================

    

btnInput.addEventListener('click',() => {
   
    
    const kmOk = validateInput(kmTraveled, kmRegex, true);
    const ageOk = validateInput(passengerAge, ageRegex, true, 120);


// Se uno dei due è sbagliato → blocca tutto
    if (!kmOk || !ageOk ) {
         
        return;
    }
        
    
    const km = Number(kmTraveled.value.replace(",", "."));
    const age = Number(passengerAge.value);

// Prezzo base
    const baseCostKm = 0.21;
    let finalPrice = km * baseCostKm;
    let discountLabel = "Nessuno";

    // Sconti
    if (age < 18) {
        finalPrice *= 0.8; // -20%
        discountLabel = "20% (Under 18)";
    } else if (age >= 65) {
        finalPrice *= 0.6; // -40%
        discountLabel = "40% (Over 65)";
    }

    // Mostra card
    showResultCard(km, age, finalPrice, discountLabel);

   
});

 