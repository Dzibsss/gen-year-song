// function losowaLiczba(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const minLiczba = 1958;
// const maxLiczba = 2024;

// let rocznik = (document.querySelector(".liczba").textContent = "OOOO");

// document.addEventListener("keydown", function (event) {
//   if (event.code === "Space") {
//     if (!rocznik) {
//       // Start losowania, ustawiając interwał na co 100 milisekund
//       rocznik = setInterval(function () {
//         const wylosowanaLiczba = losowaLiczba(minLiczba, maxLiczba);
//         console.log("Wylosowana liczba:", wylosowanaLiczba);
//       }, 100);
//     } else {
//       // Zatrzymaj losowanie, czyli wyczyść interwał
//       clearInterval(rocznik);
//       rocznik = null;
//     }
//   }
// });

// losowaLiczba();

const rok = document.querySelector(".liczba");

document.addEventListener("keypress", function (e) {
  if (e.code === "Space") {
    rok.style.color = "pink";
  }
});
