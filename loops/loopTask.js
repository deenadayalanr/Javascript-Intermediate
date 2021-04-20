let num=[3,8,45,13,26,39,57];

num.forEach((r) => {
    r>0 ? r%2===0 ? console.log(`${r} is a Even Number`) : console.log(`${r} is a Odd Number`) : console.log("Enter a positive Number");
});