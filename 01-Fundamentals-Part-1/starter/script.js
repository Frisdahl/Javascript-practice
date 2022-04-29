// const country = 'denmark';
// const continent = 'europe';
// var population = 6500000;
// const sprog = 'danish';
// let isIsland = true;

// console.log(country, "is an island?", isIsland, sprog, population, continent);



// var halvdel = population/2;

// console.log(halvdel);

// var stigning = population + 1;
// console.log(stigning);


// var finland = 6000000;
// var gennemsnitsland = 33000000;

// if (population > finland && population < gennemsnitsland) {
//     console.log("større end finland, men mindre end gennemsnitsland");
// }






// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;


// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;


// if (BMIMark > BMIJohn) {
//     console.log(`mark's BMI ${BMIMark} is higher than john's ${BMIJohn}`)
// } else {
//     console.log(`John's BMI ${BMIJohn} is higher than mark's ${BMIMark}` )
// }






// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);


// const age = 18;
// if (age === 18) {
//     console.log("you just became an adult.")
// }





// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(!hasDriversLicense);


// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("someone else should drive");
// }


// const isTired = true // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("someone else should drive");
// }





// Opgave 1

// const dolphins = 96 + 108 + 89;
// const koalas = 88 + 91 + 110;
// const samletDolphins = dolphins;
// const samletKoalas = koalas;


// if (samletDolphins > samletKoalas) {
//     console.log(`Dolphins has won the challenge ${dolphins} - ${koalas}`);
// } else if (samletDolphins < samletKoalas) {
//     console.log(`Dolphins has won the challenge ${dolphins} - ${koalas}`);
// }


// Opgave 2

// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 123) / 3;
// const samletDolphins = dolphins;
// const samletKoalas = koalas;


// if (samletDolphins > samletKoalas) {
//     console.log(`Dolphins has won the challenge ${dolphins} - ${koalas}`);
// } else if (samletDolphins < samletKoalas) {
//     console.log(`koalas has won the challenge ${koalas} - ${dolphins}`);
// } else if (samletDolphins === samletKoalas) {
//     console.log(`det blev en uafgjort ${dolphins} - ${koalas}`)
// }




// // Opgave 3

// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 106) / 3;
// const samletDolphins = dolphins;
// const samletKoalas = koalas;


// if (samletDolphins > samletKoalas && samletDolphins >= 100) {
//     console.log(`Dolphins has won the challenge ${dolphins} - ${koalas}`);
// } else if (samletDolphins < samletKoalas && samletKoalas >= 100) {
//     console.log(`koalas has won the challenge ${koalas} - ${dolphins}`);
// } else if (samletDolphins === samletKoalas && samletKoalas >= 100 && samletDolphins >= 100) {
//     console.log(`det blev en uafgjort ${dolphins} - ${koalas}`)
// }






// switch

// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('go to coding meetup');
//         break;
//     case 'tuesday': // day === 'tuesday'
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday': // day === 'wednesday'
//     case 'thursday': // day === 'thursday'
//         console.log('write code examples');
//     case 'friday': // day === 'friday'
//         console.log('record videoes');
//         break;
//     case 'saturday': // day === 'saturday'
//     case 'sunday': // day === 'sunday'
//         console.log('enjoy the weekend :D');
//         break;
//     default:
//         console.log('not a valid day!');
// }






// const monday = "monday";
// const tuesday = "tuesday";
// const wednesday = "wednesday";
// const thursday = "thursday";
// const friday = "friday";
// const saturday = "saturday";
// const sunday = "sunday";
// const day = friday;


// if (day === monday) {
//     console.log('Plan course structure and go to coding meetup');
// } 

// else if (day === tuesday) {
//     console.log('Prepare theory videos');
// } 

// else if (day === wednesday || day === thursday) {
//     console.log('write code examples');
// } 

// else if (day === friday) {
//     console.log('record videos');
// } 

// else if (day === saturday || day === sunday) {
//     console.log('enjoy the weekend :D');
// } 

// else {
//     console.log('not a valid day');
// }










// coding challenge 4


// let tip = '';
// const bill = 275;

// if (bill >= 50 && bill < 300) {
//     tip = 15;
//     const tipCalc = bill * 0.2;
//     console.log(`the bill is ${bill} so the tip is ${tip} percent / ${tipCalc} dollars`);
// } else {
//     tip = 20;
//     const tipCalc = bill * 0.2;
//     console.log(`the bill is ${bill} so the tip is ${tip} percent / ${tipCalc} dollars`);
// }




const bill = 40;
let tip = bill >= 50 && bill < 300 ? bill * 0.15 : 
bill * 0.2;
console.log(`the bill is ${bill} so the tip is ${tip} and the total value ${bill + tip}`)