/*mhdi swwed , shir akselrad */
let count = 0;
let arr = [2, 6, 0, 0, 7, 8, 3, 0];

arr.forEach(function (item) {
  //counting how many 0 the arr has
  if (item == 0) count++;
});

console.log(count);
