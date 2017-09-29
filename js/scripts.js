//business logic
function Pizza(toppings, size) {
  this.toppings = chosenToppings;
  this.size = chosenSize;
}

Pizza.prototype.orderedPizza = function() {
  return this.toppings + " " + this.size;
}

//user interface logic
$(document).ready(function() {
  $("form#pizza_order").submit(function(event) {
    event.preventDefault();
    $("#receipt").show();
    $("input:checkbox[name=toppings]:checked").each(function() {
      var chosenToppings = $(this).val();
      //$("#receipt").append(chosenToppings + "<br>")
    });

    var chosenSize = $("input:radio[name=size]:checked").val();
    $("#total").show();

    if (chosenSize === "medium") {
      $("#total").append("$14.99");
    } else if (chosenSize === "small") {
      $("#total").append("$12.99");
    } else {
      $("#total").append("$20.99");
    }
    var pizzaOrdered = new Pizza(chosenToppings, chosenSize);
    $("#receipt").append(pizzaOrdered.orderedPizza());

  });
});
