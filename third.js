/*mhdi swwed , shir akselrad */
let count = 0;
let arr = [2, 6, 0, 0, 7, 8, 3];

arr.forEach(function (item) {
  //counting how many 0 the arr has
  count += item == 0 ? 1 : 0;
});

console.log(count);
