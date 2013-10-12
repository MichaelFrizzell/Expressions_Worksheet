// Michael Frizzell - Web Programming Fundamentals.
// Sparky's Age JavaScript
var humanYears = 5; //sparkys age in human years
var dogYears = 7;  //amount of dog years in 1 human year
var c = "Sparky is 5 human years old which is " + dogYears * humanYears + " in dog years.";
console.log(c);

//Slices of pie, Part 1
var slicesPerPizza = 8; //Number of slices per pizza
var peopleAtParty = 6; //Number of people at the party
var pizzaOrdered = 3; //Number of pizza's ordered
var a = "Each person ate " + pizzaOrdered * slicesPerPizza / peopleAtParty + " slices of pizza at the party";
console.log(a);

//Slices of pie, Part 2
var slicesPerPizza = 8; //Number of slices per pizza
var peopleAtParty = 6; //Number of people at the party
var pizzaOrdered = 3; //Number of pizza's ordered
var a = "Sparky got " + pizzaOrdered * slicesPerPizza % peopleAtParty + " slices of pizza ";
console.log(a);

//Average shopping bill
var week1 = 88.43;
var week2 = 92.57;
var week3 = 95.54;
var week4 = 78.43;
var week5 = 85.93;
var average = "You have spent a total of $" + (week1 + week2 + week3 + week4 + week5) + " on groceries over 5 weeks. That is an average of $" + (week1 + week2 + week3 + week4 + week5)/5 + " per week."
console.log(average);

//Discounts
var pizzas3 = 35.99; //3 Large Pizzas
var salesTax = 1.06; //sales tax percentage
var discountPercent = 7.18; //percentage of discount is 20%
var a = "20%"
var b = "pizzas";
var c = "Your " + b + " were originally $" + pizzas3 + " but after a " + a + " discount, it is now " + (pizzas3 - discountPercent) + " without tax" +
    ", and " + (pizzas3 - discountPercent) * salesTax + " with tax";
console.log(c);


//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";