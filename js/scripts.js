//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = {
    "small": 12.99,
    "medium": 14.99,
    "large": 20.99
  }
}

Pizza.prototype.chosenToppings = function() {
  return this.toppings.join(", ");
}

Pizza.prototype.total = function() {
  var basePrice = this.price[this.size];
  if(this.toppings.length > 2) {
    basePrice += 1.99; //to reflect the price for 3 and more toppings
  }
  return basePrice.toFixed(2);
}


//user interface logic
$(document).ready(function() {
  $("form#pizza_order").submit(function(event) {
    event.preventDefault();
    $("#receipt").show();
    var checkedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
    checkedToppings.push($(this).val());
    });

    var chosenSize = $("input:radio[name=size]:checked").val();
    $(".postSubmittion").show();
    $("#total").show();

    var customerPizza = new Pizza (checkedToppings, chosenSize);
    $("#total").text("Your total is $" + customerPizza.total());

    $("#receipt").text("You will be getting " + customerPizza.size +"-sized pizza with the following toppings: " + customerPizza.chosenToppings() + ".");

  });
});
