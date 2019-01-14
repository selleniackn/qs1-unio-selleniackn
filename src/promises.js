const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);


sensapromise = new Promise((resolve, reject) => {
    setImmediate(() => {
        sensaSay('for the north');
        resolve();
    });
  });
/* TO DO */