const Food = function(name, replenishment) {
  this.name = name;
  this.replenishment = replenishment;
  this.poisoned = false;
}

Food.prototype.poisonFood = function (){
  this.poisoned = true;
};


module.exports = Food;
