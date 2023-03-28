function getNextPrime(prime) {
    let nextPrime = prime + 1;
    while (true) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(nextPrime); i++) {
        if (nextPrime % i === 0) { 
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        return nextPrime;
      } else { 
        nextPrime++;
      }
    }
  }
  console.log('The next prime number is :' +getNextPrime(17)); 

  