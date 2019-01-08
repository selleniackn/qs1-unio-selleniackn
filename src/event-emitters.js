const john = 'John';  
const arya = 'Arya';  
const sensa = 'Sensa';  
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);  
const johnSay = say(john); 
const aryaSay = say(arya);  
const sensaSay = say(sensa); 
const eventEmmiter = Require('event');
/*TO DO */ 

const timeoutObj = setTimeout(() => {
    console.log('timeout beyond time');
  }, 1500);
  
  const immediateObj = setImmediate(() => {
    console.log('immediately executing immediate');
  });
  
  const intervalObj = setInterval(() => {
    console.log('interviewing the interval');
  }, 500);
  
  clearTimeout(timeoutObj);
  clearImmediate(immediateObj);
  clearInterval(intervalObj);