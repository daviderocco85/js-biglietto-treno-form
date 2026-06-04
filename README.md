# JS Biglietto Treno Form

A form-based JavaScript program that calculates the train ticket price based on the passenger’s age and the number of kilometers traveled.

# Demo Live

[🌐  **Click here for demo**](https://daviderocco85.github.io/js-biglietto-treno-form/)


# Target

Develop a program that acquires the following input parameters from the user:
- Travel distance expressed in kilometers
- Passenger age

Using these input values, the program must compute the total ticket fare according to the following operational rules:
- The base fare is calculated as a linear function of distance, using a fixed rate of €0.21 per kilometer
- A 20% fare reduction must be applied when the passenger is under 18 years of age
- A 40% fare reduction must be applied when the passenger is over 65 years of age

The program must determine the applicable discount tier, compute the adjusted fare, and output the final ticket price.

# Milestones

1. Implement core logic using two raw inputs and a button; output the computed ticket price in the console.

2. Replace console interaction with an HTML form; display input recap and formatted final price directly in the page.

3. Apply styling to refine the layout and improve the visual presentation of the form, recap section, and final output.

# Form Behavior Note
The Calcola button uses type="button" to avoid triggering a form submission.
Since the ticket calculation is handled entirely on the client side, no data is sent and no default action needs to be prevented.

# How to run

 Clone or download the project, then open index.html in your browser. Enter the kilometers to travel and the passenger’s age in the input fields to run the ticket price calculation.