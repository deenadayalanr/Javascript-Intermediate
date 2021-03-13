let number=[1,2,3,4,5,6,7,8];

console.log(number);



//   every Operation

let value=number.every( (e) => { return e%2===0}); // () => {}
console.log(value);



//  fill operation

number.fill(0);
number.fill(0,4);
number.fill(0,3,6);
console.log(number);



// filter operation

let r=number.filter( (e) => { return e>5});
console.log(r);



//  concat operation

let test=[9,10,11,12,13];
console.log(test);
let finalArray=number.concat(test);
console.log(finalArray);



//  find operation

let trial=number.find( (e) => {return e>3});
console.log(trial);




//  splice operation
//It is a task to be completed...Please check what is meant by splice operation in JavaScript