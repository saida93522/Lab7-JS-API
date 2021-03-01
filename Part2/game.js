// //DOM
// let randomCountryElement = document.querySelector("#random-country");
// let userAnswerElement = document.querySelector("#user-answer");
// let submitButton = document.querySelector("#submit-answer");
// let resultTextElement = document.querySelector("#result");
// let playAgainBtn = document.querySelector("#play-again");
// //select random countries

// let rand =
//   countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)];
// console.log(rand);
// randomCountryElement.innerHTML = rand.name;
// console.log(rand["alpha-2"]);

// let url = `https://api.worldbank.org/v2/country/${rand["alpha-2"]}?format=json`;
// // Event handler to the submitButton
// submitButton.addEventListener("click", GetCity);
// playAgainBtn.addEventListener("click", play);
// //function call
// function GetCity() {
//   //read user text
//   let user = userAnswerElement.value;
//   //fetch
//   fetch(url)
//     .then((res) => res.json()) //recive data in JSON format
//     .then((data) => {
//       let capCity = data[1][0].capitalCity; //extract capital city
//       //   console.log(capCity);
//       if (user.toLowerCase() === capCity.toLowerCase()) {
//         //validate
//         resultTextElement.innerHTML = `Correct! The capital of ${rand.name} is ${capCity} `;
//       } else {
//         resultTextElement.innerHTML = `Wrong! The capital of ${rand.name} is NOT ${user}, it is ${capCity} `;
//       }
//     });
// }
// function play() {
//   userAnswerElement.value = "";
//   resultTextElement.innerHTML = "";
//   location.reload(true); //reload  page at the current URL.
// }

// countriesAndCodes.forEach((rand) => {
//   rand =
//     countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)];
//   randomCountryElement.innerHTML = rand.name;
// });
