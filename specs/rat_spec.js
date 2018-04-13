const assert = require('assert');
const Rat = require('../models/rat.js');
const Food = require('../models/food.js');


describe('Rat', function(){

  let rat;
  let food;

  beforeEach(function() {
    rat =  new Rat("Carl");
    food = new Food("Pizza", 3);
  });

  it('should have a name', function() {
    assert.strictEqual("Carl", rat.name);
  })

  it('should have a a poison value', function() {
    assert.strictEqual(-10, rat.poison);
  })

  it('shoud be able to touch food and poison it', function() {
    rat.touchFood(food);
    assert.strictEqual(true, food.poisoned);
  })

})
