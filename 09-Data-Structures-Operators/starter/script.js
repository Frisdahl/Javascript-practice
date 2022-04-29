'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  OrderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderpizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gk = game.players[0];
console.log(gk);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // Nullish assignment operator (null or undefined) - gør at man i objekt kan beholde en falsh værdi
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1, rest2);

// console.log('---- OR ----');

// // use ANY data type, return ANY data type - they do short-circuiting (means thats if the first value is true, it will return that value. )
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || null);

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// restaurant.numGuests = 0;
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// // Nullis: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// console.log('---- AND ----');
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// if (restaurant.orderpizza) {
//   restaurant.orderpizza('mushrooms', 'spinach');
// }

// restaurant.orderpizza && restaurant.orderpizza('mushrooms', 'spinach');

// // SPREAD, because on the RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// // REST, because of LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 4);
// add(2, 4, 10, 9, 12);
// add(2, 4, 10, 9, 12, 40, 21);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderpizza('mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderpizza('mushrooms', )

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole, 21',
//   mainIndex: '2',
//   starterIndex: '2',
// });

// Real world example with the Spread Operator (...)
// const ingredients = [
//   prompt(`make some pasta! What is your first ingredient?`),
//   prompt(`What is your second ingredient?`),
//   prompt(`What is your third ingredient?`),
// ];
// console.log(ingredients);

// restaurant.OrderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.OrderPasta(...ingredients);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // Objects
// const newRestaurant = { ...restaurant, founder: 'guiseppe', foundedIn: '1998' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// efer

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // nye variabel navne - kan være nyttigt når man arbejder med 3.parts data.
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 531;
// const obj = { a: 23, b: 27, c: 14 };

// ({ a, b } = obj);
// console.log(a.b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // Nested destructuring

// const nested = [2, 4, [(5, 6)]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p, q, r] = [8, 9, 12];
// console.log(p, q, r);
