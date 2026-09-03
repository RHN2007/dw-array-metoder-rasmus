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

    // Opgave 3
    console.log("Opgave 3a", dogsArray.includes("Trixie")) // tjek arrayet og se om det inkludere "Trixie", hvis den gør så logger den true, hvis ik så logger den false.
    console.log("Opgave 3b", dogsArray.includes("Baxter"))

    // Opgave 4a
    console.log("Opgave 4a", catsArray.find((cat) => cat == "Bagheera")) // Konsolen skriver automatisk undefined hvis katten ikke bliver fundet.

    // Opgave 4b
    console.log("Opgave 4b", catsArray.find((cat) => cat == "Salem")) // Konsolen skriver automatisk undefined hvis katten ikke bliver fundet.

    // Opgave 5
    console.log("Opgave 5", numbersArray.map((x) => x * 3))

    // Opgave 6
    console.log("Opgave 6", dogsArray.join(""))

    // Opgave 7a
    console.log("Opgave 7a", fruitsArray.indexOf("Mango"))
}) // ends DOMContentLoaded