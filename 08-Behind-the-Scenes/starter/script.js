'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];

const [a, b, c] = arr;

console.log(a, b, c);

const [first, , second] = restaurant.categories;
console.log(second);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [(5, 6)]];
const [i, , [j, k]] = nested;
console.log(i, j);
