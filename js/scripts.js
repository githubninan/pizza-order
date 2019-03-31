//business logic
var PizzaCost = 0;

function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
}

var cheese = new Pizza("8", "cheese");
var pepperoni = new Pizza("8", "pepperoni");
var vegeterian = new Pizza ("8", "veggies");

Pizza.prototype.selection = function () {
  return this.size +  " " + this.topping;
}

cheese.selection();
pepperoni.selection();
vegeterian.selection();

Pizza.prototype.cost = function() {
  if (Pizza === cheese) {
    return 12;
  }
  if (Pizza === pepperoni) {
    return 14;
  }

  if (Pizza === vegeterian) {
    return 15;
}

//User Interface Logic
$(document).ready(function() {
  $("#roll1").click(function(event) {
    event.preventDefault();
    var roll1=rollDice();
  });
});
