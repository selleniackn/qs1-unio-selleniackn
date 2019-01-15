const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

sensaSay('For the North').then(val => {
    console.log(val);
    aryaSay('The king in the North').then(val => console.log(val));
  
    const interval = setInterval(() => {
      console.log(val);
      aryaSay('The king in the North').then(val => console.log(val));
    }, 1000);
    johnSay('Winter is coming').then(val => console.log(val));
    setTimeout(() => clearInterval(interval), 10000);
  });
  