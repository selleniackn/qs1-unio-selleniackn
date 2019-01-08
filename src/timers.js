     const john = 'John';  
     const arya = 'Arya';  
     const sensa = 'Sensa';  
     const say = hero => sentence => console.log(`${hero} says : ${sentence}`);  
     const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');  
     const aryaSay = say(arya);  
     const sensaSay = say(sensa); 
     const intervalS = setInterval(sensaSay, 1000, 'For the north'); 
     setTimeout(() => clearInterval(intervalS), 10000);
     setTimeout( () => {
         johnSay('hello Ladies Stark');
         setTimeout(aryaSay,0, 'thank you for needle');
    },2000) 
    