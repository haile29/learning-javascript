"use strict";

// //DESTRUCTURING ARRAY
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// console.log(restaurant.order(1, 2));
// const [starter, main] = restaurant.order(1, 2);
// console.log(starter, main);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [a1, b1, c1] = arr;
// console.log(a1, b1, c1);

// let [first, , second] = restaurant.categories; //skip the second element
// console.log(first, second);

// //changing position of elements
// [first, second] = [second, first];
// console.log(first, second);

// //for nested arrays

// const nested = [2, 3, [4, 5, 6]];
// const [a2, , [b2, c2, d2]] = nested;
// console.log(a2, b2, c2, d2);

// //setting default values
// const [x = 1, y = 2, z = 3] = [5, 6];
// console.log(x, y, z); //5,6,3

//DESTRUCTURING OBJECTS

//const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, //open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function (starterIndex, mainIndex, address, time) {
//     console.log(
//       `Order confirmed. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: "12:00",
//   address: "Via Angelo Tavanti 23, Firenze, Italy",
//   starterIndex: 1,
//   mainIndex: 2,
// });

// //extract variables from objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// //change variables' name to be different from property name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //setting default values
// const { menu = [1], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutate variables
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 99, c: 25 };

// ({ a, b } = obj);
// console.log(a, b);

// //for nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //Spread operator (...)
// const arr=[1,2,3,4,5];
// const arr2=[...arr,6,7,8];
// console.log(arr2);

// //pass values to function
// const values = [1, 2, 3, 4, 5];
// function myFunction(values){
//     console.log(values)
// }

// myFunction(...values);

//rest pattern and parameters

// function show (...values){
//     console.log(values);
// };

// show(1,2,3,4,5);
// show(1,2,3,4,5,6,7,8,9,10);

// function add(...number){
//     let sum=0;
//     for(let i=0; i<arguments.length; i++){
//         sum+=arguments[i];
//     }
//     return sum;
// }

// console.log(add(1,2,3,4,5));
// console.log(add(1,2,3,4,5,6,7,8,9,10));

// && and ||
//console.log("me" || 3); //it will print me bcs me is a truthy value, 3 would not even be evaluated. It is short-circuiting.
//console.log("" || 3); //it will print 3 bcs '' is a falsy value, 3 would be evaluated.

//for &&, it return the first falsy value it sees.

//NULLISH COALESCING OPERATOR
//introduced in ES2020, work just as || but only with null and undefined.

//LOGICAL ASSIGNMENT OPERATOR
// const rest1 = {
//   name: "Capricciosa",
//   numGuests: 20,
// };

// const rest2 = {
//   name: "Giuseppe",
//   owner: "Gordon Ramsay",
// };
// //applying short-circuiting to update numGuests to rest2
// rest2.numGuests = rest2.numGuests || 30;
// console.log(rest2);

// rest2.owner = rest2.owner && 'Anonymous';
// console.log(rest2);

// CREATING FOOTBALL BET APP.
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //create arrays for players of 2 teams
// const [players1, players2] = game.players;
// //create arrays show the first player is goalkeeper and the rest is field players.
// const [gk, ...fieldPlayers] = players1;
// //create array contains all players of both teams.
// const allPlayers = [...players1, ...players2];
// //add new players to the first team
// const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// //create printGoal function
// function printGoal(...players){
// console.log(`${players.length} goals were scored.`)
// }

// console.log(printGoal(...game.scored));

// team1 < team2 ? console.log(`${game.team1} is more likely to win `) : console.log(`${game.team2} is more likelt to win`);

// console.log(team1)

// //THE FOR-OF LOOP

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];

// for (const item of menu){
//     console.log(item);
// }

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// const odds = Object.values(game.odds);

// let average = 0;
// for (const odd of odds ){
//     average+=odd;
//     average/=odds.length;
// }

// console.log(average)

// for (const [team,odd] of Object.entries(game.odds)){
//     console.log(`Odd of victory ${team}: ${odd}`);
// }

//SETS

// const orderSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(orderSet); //Risotto, Pasta, Pizza and all the iterated elements in the array do not appear in the set.

// //WORKING WITH SET
// //get size of the set
// console.log(orderSet.size); //3
// //check if certain element is in the set, similar to 'includes' method in array
// console.log(orderSet.has("Pizza")); //true
// //add new element to the set
// orderSet.add("Focaccia");
// //delete element from the set
// orderSet.delete("Pizza");
// //delete all elements from the set
// // orderSet.clear();
// //iterate over the set
// for (const order of orderSet) {
//   console.log(order);
// }
// //=>biggest use of set is to remove duplicate values from arrays
// const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
// const staffSet = new Set(staff);
// console.log(staffSet); //waiter, chef, manager
// const staffPosition = [...staffSet]; //set now converted into array

// //MAP
// const restaurant = new Map();
// //passing keys(properties) and values to the map
// restaurant.set("name", "Classico Italiano");
// restaurant.set(1, "Firenze, Italy");
// restaurant.set(2, "Lisbon, Portugal");
// //chaining up
// restaurant
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open!")
//   .set(false, "We are closed!");
// //you can pass any data type for the key, unlike objects.
// //Read data from the map using GET method
// console.log(restaurant.get("name")); //Classico Italiano
// console.log(restaurant.get(1)); //Firenze, Italy
// //check if the restaurant is open or closed
// const currentTime = new Date().getHours();
// restaurant.get(
//   currentTime > restaurant.get("open") && currentTime < restaurant.get("close")
// )
//   ? console.log(restaurant.get(true))
//   : console.log(restaurant.get(false));

// //check if the map contains a certain key by "has"
// console.log(restaurant.has("name")); //true
// //delete a key from the map
// restaurant.delete(2); //delete Lisbon, Portugal
// //check size of the map
// console.log(restaurant.size); //7
// //remove all elements from the map
// // restaurant.clear();

//MAPS: ITERATION
//creating a map instead of using set method, it is cumbersome for long maps. It's jusrt useful for adding new elements

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "JavaScript"],
//   [2, "Python"],
//   [3, "Java"],
//   ["correct", 3],
//   [true, "Correct!"],
//   [false, "Wrong!"],
// ]);
// //convert object into map
// //const mapObject = new Map(Object.entries(objname));

// //convert the map back to an array
// console.log([...question]);

// //loop over the map
// //creating the quiz
// console.log(question.get("question"));
// for (const [key, value] of question) {
//     if (typeof key === "number") {
//         console.log(`Answer ${key}: ${value}`);
//     }
// }
// const answerUser=Number(prompt("Your answer..."));
// console.log(answerUser)

// for (const [key, value] of question) {
//     if (answerUser === 3) {
//         console.log(question.get(true));
//         break;
//     } else {
//         console.log(question.get(false));
//     }
// }

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
//   ]);
// //1.
//     const events = [...gameEvents.values()];
//     console.log(events);
// //2.
//     gameEvents.delete(64);
// //3.
//     const eventNumber = gameEvents.size;
//     console.log(eventNumber)
//     const average = 90 / eventNumber;
//     console.log(`An event happened, on average, every ${average} minutes`);
// //4.
// const half= gameEvents.keys();
// for (const [key, value] of gameEvents){
//     key < 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`)

// }

// //!!! Super Important !!! WORKING WITH STRINGS

// const airline = "TAP Air Portugal";
// const plane = "A320";
// //getting string elements
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// //length of string
// console.log(airline.length);
// //string methods
// console.log(airline.indexOf("r")); //return the first index
// console.log(airline.lastIndexOf("r")); //return the last index
// console.log(airline.slice(4)); //4 is the begin parameter, from position 4 towards the end will be returned
// console.log(airline.slice(4, 7)); //4 is the begin parameter, 7 is the end parameter, from position 4 to position 7 will be returned

// function checkMiddleSeat(seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1); //getting the last character of the string
//   s === "E" || s === "B"
//     ? console.log(`${seat} is the middle seat`)
//     : console.log(`${seat} is not the middle seat`);
// }
// checkMiddleSeat("23A");
// checkMiddleSeat("15B");
// checkMiddleSeat("15C");
// checkMiddleSeat("15E");

// //changing the case of the string
// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());
// //in practical use, it can be applied to fix capitalization of names
// const passengerName = "jOnAs";
// const passsengerLower = passengerName.toLowerCase();
// const nameCorrect = passsengerLower[0].toUpperCase() + passsengerLower.slice(1);
// console.log(nameCorrect);
// //comparing emails
// const email = "hello@jonas.io";
// const inputEmail = " Hello@jonas.io \n";
// const lowerEmail = inputEmail.toLowerCase();
// const trimmedEmail = inputEmail.trim(); //removes the spaces at the beginning and at the end
// //in short
// const correctEmail = inputEmail.toLowerCase().trim();
// console.log(correctEmail);

// //replacing part of string
// const priceGb = "288,97€";
// const priceUS = priceGb.replace("€", "$").replace(",", "."); //the first one is the one we want to replace, the second one is the replacement
// console.log(priceUS);
// const annoucement =
//   "All passengers come to boarding door 23. Repeat, boarding door 23!";
// const newAnnoucement = annoucement.replace("door", "gate");
// console.log(newAnnoucement);
// const newAnnoucement2 = annoucement.replaceAll("door", "gate");
// console.log(newAnnoucement2);

// //return Booleans
// const plane2 = "A320neo";
// console.log(plane2.includes("A320")); //returns true if the string includes the parameter
// console.log(plane2.startsWith("A320")); //returns true if the string starts with the parameter
// console.log(plane2.endsWith("A320")); //returns true if the string ends with the parameter

// function checkBaggage(items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board!");
//   } else {
//     console.log("Welcome aboard!");
//   }
// }

// checkBaggage("I have a Knife, a Gun to protect myself");
// checkBaggage("I have some food, my watch and some Books");
// checkBaggage("I have a knife");

// //Split method to split a string into an array
// console.log("A+very+nice+string".split("+")); // ['A', 'very', 'nice', 'string']
// const [firstName, lastName] = "Jonas Schmedtmann".split(" "); //[Jonas, Schmedtmann]
// // the join method can be used to join an array into a string
// const fullName = [firstName, lastName.toUpperCase()].join("-");
// console.log(fullName); //Jonas-SCHMEDTMANN

// function checkName(name) {
//   const name2 = name.toLowerCase();
//   const nameArray = name2.split(" ");
//   const fixedName = [];
//   for (const letter of nameArray) {
//     fixedName.push(letter[0].toUpperCase() + letter.slice(1));
//   }
//   const fixedName2 = fixedName.join(" ");
//   console.log(fixedName2);
// }

// checkName("joNas scHmedtmann");
// checkName("roSe lisa jennie jIsoo");

// //padding method to add spaces to the left of a string
// const example = "Hello World";
// console.log(example.padStart(20, "-")); //'----------Hello World' (20 is the length of the string, '-' is the character to be added)
// console.log(example.padEnd(20, "-")); //'Hello World----------' (20 is the length of the string, '-' is the character to be added)
// //application of padding method: creating function hiding phone or credit card number
// function hideNumber(number) {
//   const str = number.toString();
//   const lastNumber = str.slice(-4);
//   return lastNumber.padStart(str.length, "*");
// }

// console.log(hideNumber(123456789245));
// console.log(hideNumber(3514205178029));

// //repeat method to repeat a string
// const example2 = "Hello World ";
// console.log(example2.repeat(3)); //'Hello WorldHello WorldHello World'

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
function fixCode(str){
    return str.slice(0,3).toUpperCase()
}
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.replaceAll(
    "_",
    " "
  )} flight from ${fixCode(from)} to ${fixCode(to)} at ${time}`;
  console.log(output)
}
