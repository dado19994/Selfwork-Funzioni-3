// SELFWORK DATI STRUTTURALI

// Dati gli array
// let array_1 = [
//     ['un', 'per', 'incatenarli.'],
//     ['Anello', 'trovarli,'],
//     ['ghermirli', 'e'],
//     ['gondor', 'mark'],
//   ];
  
//   let array_2 = [
//     [['trovarli,']],
//     ['tu,', 'sciocchi'],
//     ['tu,', 'sciocchi', ['padron', 'Sauron']],
//     ['nel', ['fuggite', 'gandalf']],
//     [['domarli,', 'passare'], 'buio']
//   ];
  
 
//   let frase = array_1[0][0].charAt(0).toUpperCase() + array_1[0][0].slice(1) + " " + // "Un"
            //  array_1[1][0] + " " +  // "Anello"
            //  array_1[0][1] + " " +  // "per"
            //  array_2[4][0][0] + " " + // "domarli,"
            //  array_1[0][0] + " " + // "un"
            //  array_1[1][0] + " " +  // "Anello"
            //  array_1[0][1] + " " +  // "per"
            //  array_1[1][1] + " " +  // "trovarli,"
            //  array_1[0][0] + " " + // "un"
            //  array_1[1][0] + " " +  // "Anello"
            //  array_1[0][1] + " " +  // "per"
            //  array_1[2][0] + " " +  // "ghermirli"
            //  array_1[2][1] + " " +  // "e"
            //  array_2[3][0] + " " +  // "nel"
            //  array_2[4][1] + " " +  // "buio"
            //  array_1[0][2];         // "incatenarli."
  
  // Stampa la frase risultante
//   console.log(frase);


  // SELFWORK FUNZIONI 1

  // Funzione che simula il gioco di dadi
 
// function playGame(tiri){
//     let player1 = 0
//     let player2 = 0
//     // Simulazione dei tiri per entrambi i giocatori
//     for (let i = 0; i < tiri; i++){
//         let player1Roll = Math.floor(Math.random() * 6) + 1;
//         let player2Roll = Math.floor(Math.random() * 6) + 1;

//         player1 = player1 + player1Roll;
//         player2 = player2 + player2Roll;
//     }

//     if(player1 > player2){
//         return ` player 1 ha vinto con un punteggio di ${player1}` 
//     }else if (player2 > player1){
//         return ` player 2 ha vinto con un punteggio di ${player2}` 
//     }else {
//         return `pareggio con un punteggio di ${player1} ` 
//     }
// }

// // Chiede quanti tiri effettuare
// let tiri = Number(prompt(`Quanti tiri devono effettuare i giocatori?`));

// let result = playGame(tiri);

// console.log(result);

// SELFWORK FUNZIONI 2

// function fizzBuzz(N) {
//     for (let i = 1; i <= N; i++) {
//         if (i % 15 == 0) {
//             console.log('FizzBuzz');
//         } else if (i % 3 == 0) {
//             console.log('Fizz');
//         } else if (i % 5 == 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }


// fizzBuzz(30);


// SELFWORK FUNZIONI 3

function contaCifre(numero) {
    
    if (numero > 9999) {
        return "Numero troppo grande";
    } else {
        
        let cifre = numero.toString().length;
        
        return `${numero} → ${cifre} cifra`;
    }
}


console.log(contaCifre(9));      // Output: 9 → 1 cifra
console.log(contaCifre(99));     // Output: 99 → 2 cifre
console.log(contaCifre(12000));  // Output: Numero troppo grande
console.log(contaCifre(4567));   // Output: 4567 → 4 cifre

