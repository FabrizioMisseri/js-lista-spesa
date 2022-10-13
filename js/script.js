// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
const list = [
                "Cannabis indica 25g",
                "Cannabis sativa 2g",
                "Cannabis ruderalis 3g",
                "Critical Kush 6g",
                "Cream Caramel 1g",
                "Black Domina 10g"
            ];

const drugList = document.querySelector("ul");

let i = 0; 
while (i < list.length) {
    let drug = (list[i]);
    drugList.innerHTML += ` <li>${drug}</li> `;
    i++
}



// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while