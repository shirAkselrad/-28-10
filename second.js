/*mhdi swwed , shir akselrad */
function isPrime(num) {
  //the function gets a number and check if the num is prime
  if (num == 1) return false;
  for (let i = 2; i < num; i++) if (num % i == 0) return false;
  return true;
}

for (let i = 1; i < 237; i++)
  if (isPrime(i))
    //if the number is prime we will print it
    console.log(i);
