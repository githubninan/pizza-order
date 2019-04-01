//business logic
var PizzaCost = 0;

function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.cost = function() {
  var price = 0;
  if (this.size === "eight") {
    price = 10;
  }
  if (this.size === "twelve") {
    price = 12;
  }
  if (this.topping === "cheese") {
  price += 0;
  }
  if (this.topping === "pepperoni") {
  price += 2;
  }

    if (this.topping === "vegeterian") {
    price += 3;
  }
  return price;
}

//User Interface Logic
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var sizeInput = $("select#size").val();
    var toppingInput = $("select#topping").val();
    var cost = 0;
    var newPizza = new Pizza (sizeInput, toppingInput);
    var result = newPizza.cost();

    $("#price").text(result);
    $("#order").fadeOut();
    $("#result").fadeIn();

  });
});
