//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = {
    "small": "$12.99",
    "medium": "$14.99",
    "large": "$20.99",
  }
}



Pizza.prototype.total = function() {
  return this.price[this.size];
}

//Pizza.prototype.total = function() {
//  return this.total;
//}

//Pizza.prototype.orderedSize = function() {
//  return this.chosenSize;
//}

//user interface logic
$(document).ready(function() {
  $("form#pizza_order").submit(function(event) {
    event.preventDefault();
    $("#receipt").show();
    //var chosenToppings = [];
    var checkedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
    checkedToppings.push($(this).val());
    });

    var chosenToppings = checkedToppings.join(", ");
    var chosenSize = $("input:radio[name=size]:checked").val();
    $("#total").show();

    var customerPizza = new Pizza (chosenToppings, chosenSize);
    $("#total").text("Your total is " + customerPizza.total());
    // } else if (chosenSize === "small") {
    //   $("#total").text("$12.99");
    // } else {
    //   $("#total").text("$20.99");
    // }


    //var toppingsOrdered = new Pizza(chosenToppings);
    //var sizeOrdered = new Pizza(chosenSize);


    $("#receipt").text("You will be gettting " + chosenSize +"-sized pizza with the following toppings: " + chosenToppings + ".");


  });
});
