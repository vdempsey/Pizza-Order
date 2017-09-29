//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
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

    if (chosenSize === "medium") {
      $("#total").text("$14.99");
    } else if (chosenSize === "small") {
      $("#total").text("$12.99");
    } else {
      $("#total").text("$20.99");
    }

    var customerPizza = new Pizza (chosenToppings, chosenSize);
    console.log(customerPizza);
    //var toppingsOrdered = new Pizza(chosenToppings);
    //var sizeOrdered = new Pizza(chosenSize);


    $("#receipt").text("You will be gettting " + chosenSize +"-sized pizza with the following toppings: " + chosenToppings + ".");


  });
});
