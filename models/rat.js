const Rat = function(name) {
  this.name = name;
  this.poison = -10;
};

Rat.prototype.touchFood = function (food) {
  food.poisonFood();
};

module.exports = Rat;
