//

let arrFavoriteFilms = [
    "1",
    "2",
    "3", //"Ghostbusters",
    "Ghostbusters",
    "5"
];

arrFavoriteFilms.push("6");
arrFavoriteFilms.push("7");

const funFilmCheck = (varFilm, varIndex) => {
    if(varIndex == 3-1){
        if(varFilm == "Ghostbusters") {
            console.log("Yay it's Ghostbusters");
        } else {
            console.log("Booo, we want Ghostbusters");
        }
    }
}

for (arrFavoriteFilmsIndex = 0; arrFavoriteFilmsIndex < arrFavoriteFilms.length; arrFavoriteFilmsIndex++) {
    console.log(arrFavoriteFilms[arrFavoriteFilmsIndex]);
    funFilmCheck(arrFavoriteFilms[arrFavoriteFilmsIndex], arrFavoriteFilmsIndex);
}

console.log("");

for(i=9; i>-1; i--){
    console.log(i);
}

console.log("");

let cards =["Diamond", "Spade", "Heart", "Club"];
let currentCard="";

while(currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);

console.log("");

let varRandomNumber = 0;

while(varRandomNumber !=50){
    varRandomNumber = Math.floor(Math.random()*51);
    console.log(varRandomNumber)
}

console.log("");

 for(i=1; i<20; i++) {
     if(i * (i+1) <= 20) {
        console.log(`${i} x ${i+1} = ${i * (i+1)}`);
     } else {

     }
}
