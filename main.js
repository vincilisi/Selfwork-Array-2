// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
//   Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.

let Input = [3, 5, 10, 2, 8];

const calcolaMediaEMinori = (array) => {
    const somma = array.reduce((acc, val) => acc + val, 0);
    const media = somma / array.length;
    const minoriDellaMedia = array.filter(num => num < media);
    const maggioriDellaMedia = array.filter(num => num > media);

    console.log("Media:", media);
    console.log("Valori minori della media:", minoriDellaMedia);
    console.log("Numero di valori minori della media:", minoriDellaMedia.length);
    console.log("Numero di valori maggiori della media:", maggioriDellaMedia.length);

}
calcolaMediaEMinori(Input);