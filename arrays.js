document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // Opgave 1
    let newNumbers = numbersArray.filter((number) => {return number > 20}) // filter igennem arrayet og brug en fat arrow function til at returnere alle numre over 20
    console.log("Opgave 1", newNumbers)

    // Opgave 2
    catsArray.push("Sniffles") // "push" katten sniffles til vores catsArray, i andre ord tilføj en ny entry i arrayen.
    console.log("Opgave 2", catsArray)

}) // ends DOMContentLoaded