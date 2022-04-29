

// function logger() {
//     console.log('my name is Alexander')
// }


// // calling / running / invoking function

// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }


// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);






// function declaration

// function calcAgel(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAgel(2018);





// // function expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(2018);
// console.log(age1, age2);





// arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }


// console.log(yearsUntilRetirement(1991, 'Alexander'));
// console.log(yearsUntilRetirement(2007, 'bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

//     console.log(juice);
//     return juice;
// }


// fruitProcessor(2, 3);



// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }



// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement < 0) {
//         const retiredYears = Math.abs(retirement);
//         console.log(`${firstName} has been retired for ${retiredYears} years`);
//     } else if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     }


// }

// console.log(yearsUntilRetirement(1991, 'Mikkel'));
// console.log(yearsUntilRetirement(1941, 'Jonas'));




// coding challenge part 2 #1

// const calcAverage = (first, second, third) => {
//     const average = (first + second + third) / 3;
//     return average;
// }

// const checkWinner = function (dolphins, koalas) {
//     if (dolphins > koalas) {
//         console.log(`Dolphins has won the challenge ${dolphins} vs ${koalas}`);
//     } else if (dolphins < koalas) {
//         console.log(`Koalas has won the challenge ${koalas} vs ${dolphins}`);
//     }
// }


// const dolphins = calcAverage(85, 54, 41);
// const koalas = calcAverage(23, 34, 27);
// checkWinner(dolphins, koalas);






// const friend1 = 'michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';


// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);


// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);


// friends[2] = 'Jay';
// console.log(friends);



// // add elements to array
// friends.push('Frederik'); // add as last element
// const newLength = friends.length;
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // add as first element
// console.log(friends);


// // remove elements from array
// const popped = friends.pop(); // last element
// console.log(friends); // new list
// console.log(popped); // shows who got removed


// friends.shift(); // remove first element
// console.log(friends); // new list


// // search after specific element in array
// console.log(friends.indexOf('Steven'));


// // shows if array contains element - true/false
// console.log(friends.includes('Steven'));
// console.log(friends.includes('bob'));











// const calcAge = (birthYear) => {
//     return 2037 - birthYear;
// }


// var ages = [1991, 2007, 1967, 1983];
// const age1 = calcAge(ages[0]);
// const age2 = calcAge(ages[1]);
// const age3 = calcAge(ages[ages.length - 1]);



// console.log(age1, age2, age3);


// var ages = [age3, age2, age3];
// console.log(ages);



// coding challenge part 2 #2



// const calcTip = (bill) => {
//     if (bill > 50 && bill < 300) {
//         console.log('tip is 15%');
//         return tip = bill * 0.15;
//     } else {
//         console.log('tip is 20%');
//         return tip = bill * 0.20;
//     }
// }



// var bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);



// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(total);





















// // object methods

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'schmedmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function(birthYear) {
//         return 2022 - birthYear;
//     }
// };

// console.log(jonas);
// console.log(jonas.lastName);

// console.log(jonas.calcAge(1991));
// console.log("jonas is", jonas['calcAge'](1991), " years old");



// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);


// const interestedIn = prompt('what do you want to know about jonas? choose between firstname, lastname, age, job or friends');
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('wrong request! Choose between firstname, lastname, age, job or friends');
// }


// jonas.location = 'denmark';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);


// // challenge

// console.log(jonas.firstName, 'has', jonas.friends.length, 'friends and his best friend is', jonas.friends[0])







// challenge

// const mark = {
//     fullName: 'Mark Miller',
//     height: 1.69,
//     weight: 78,


//     calcBMI: function() {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     height: 1.95,
//     weight: 92,


//     calcBMI: function() {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }


// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${mark.fullName} har den højeste BMI ${mark.calcBMI()} mod john på ${john.calcBMI()}`);
// } else if (john.calcBMI() < mark.calcBMI()) {
//     console.log(`${john.fullName} har den højeste BMI ${john.calcBMI()} mod mark på ${mark.calcBMI()}`);
// }







// loops


// console.log("lifting weights repetition 1");
// console.log("lifting weights repetition 2");
// console.log("lifting weights repetition 3");
// console.log("lifting weights repetition 4");
// console.log("lifting weights repetition 5");
// console.log("lifting weights repetition 6");
// console.log("lifting weights repetition 7");
// console.log("lifting weights repetition 8");
// console.log("lifting weights repetition 9");
// console.log("lifting weights repetition 10");




// for (rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
// }


// const jonas = [
//     'Jonas',
//     'schmedmann',
//     1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ]

// const types = [];

// for (let i = 1; i < jonas.length; i++) {
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);


// const birthYears = [1991, 2007, 1998, 1992];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//     ages.push(2022 - birthYears[i]);
// }

// console.log(ages);


// continue and break

// sorting for only strings
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// break with number
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }










// looping backwards and loops in loops -- man kan hente variabler fra andre loops. så længe de er i et fælles loop

const jonas = [
    'Jonas',
    'schmedmann',
    1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
]

// for (let i = jonas.length -1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}` );
//     }
// }


// while loop

// let rep = 1;

// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`)
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6);

// while (dice !== 6) {
//     console.log(`you rolled a dice ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if (dice === 6) {
//         console.log('loop is about to end');
//     }
// }




// coding challenge part 2 #3

const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
]

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.20;
}



let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);

    const total = (bills[i] + tip);
    totals.push(total);
}

console.log(bills, tips, totals);



const arr = [
    22,
    45,
    33
]

const total = '';


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(arr));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
