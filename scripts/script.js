let orderName = prompt("What is the name for this order?")

let size = prompt("What size pizza would you like? (small, medium, or large)")

let toppings = prompt("List the topping(s) you want separated by commas. (cheese, pepperoni, artichoke, broccoli, olives, shrimp, eggplant, steak, anchovy)");
toppingsArr = toppings.split(",");

// Pizza Object Constructor
function Pizza(allToppings, specialToppings) {
    this.allToppings = allToppings;
    this.specialToppings = specialToppings;
}
Pizza.prototype.allToppings = function() {
    console.log(this.allToppings)
}
Pizza.prototype.specialToppings = function() {
    console.log(this.specialToppings)
}

let pizza = new Pizza(["cheese", "pepperoni", "artichoke", "broccoli", "olives", "shrimp", "eggplant", "steak", "anchovy"], ["shrimp", "eggplant", "steak", "anchovy"]);

let sizePrice;
// Pizza Object Literal
pizza = {    
    lengthOfAllToppings: function(allToppings) {
        console.log(allToppings.length);
    },
    lengthOfSpecialToppings: function(specialToppings) {
        console.log(specialToppings.length);
    },
    priceOfSizes: function(size) {
        
        if (size === "small") {
            sizePrice = "9.99.";
        } else if (size === "medium") {
            sizePrice = "12.99.";
        } else if (size === "large") {
            sizePrice = "19.99.";
        } else {
            sizePrice = "Please start over, and choose the size pizza that you would like."
        }
    },
//   Method that shows the order message 
    showOrderMessage: function() {
        let orderNumber = Math.floor(Math.random() * 100 + 1);
        let todaysDate = new Date();
        let numOfToppings = toppingsArr.length;
    
        
        console.log(`Order#${orderNumber}:\n\n${orderName} has ordered a ${size} pizza with ${numOfToppings} toppings (${toppingsArr}) on ${todaysDate}. \n\n Price: The price of a ${size} pizza is ${sizePrice}`);
        
}
}

pizza.priceOfSizes(size);
pizza.showOrderMessage();
