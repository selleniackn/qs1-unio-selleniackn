const john = 'John';  
const arya = 'Arya';  
const sensa = 'Sensa';  
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);  
const johnSay = say(john); 
const aryaSay = say(arya);  
const sensaSay = say(sensa); 
const eventEmitter = require('events');
const gotEmitter = new eventEmitter();
const time = 1000;
const intervalStart = setInterval(() => gotEmitter.emit('north'),time);


gotEmitter.on('north',()=>{
  sensaSay('For the North');
  setImmediate(() => gotEmitter.emit('arya'));
});

gotEmitter.once('north',() => {
  johnSay('Winter is coming');

});

gotEmitter.on('arya',() => {
  aryaSay('The king in the North');

});
 
setTimeout(() => {
    clearInterval(intervalStart);
  }, 5000);