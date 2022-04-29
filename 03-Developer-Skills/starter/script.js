// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// function til at finde laveste og højeste tal i 2 arrays.

// const tempartures = [3 - 2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const tempartures2 = [21, 42, -25];
// const temps = tempartures.concat(tempartures2);

// const highTemp = tempartures[0];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(min, max);
//   return max - min;
// };

// const Amplitude = calcTempAmplitude(temps);
// console.log(Amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     value: prompt('Degrees celcius'),
//   };

//   //   debugger;
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

// Debug

// console.log(measureKelvin());
// console.warn(measureKelvin());
// console.error(measureKelvin());
// console.table(measureKelvin());

// console.log(measureKelvin());

const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr2) {
  let string = '';
  for (let i = 0; i < arr2.length; i++) {
    string += `${arr2[i]} degrees in ${i + 1} days... `;
  }
  console.log(string);
};

printForecast(arr2);
