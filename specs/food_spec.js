const assert = require('assert');
const Food = require('../models/food.js');


describe('Food', function() {

  let food;

  beforeEach(function() {
    food = new Food("Gyoza", 5);
  });

  it('should have a name', function() {
    assert.strictEqual("Gyoza", food.name);
  });

  it('should have a replenishment value', function() {
    assert.strictEqual(5, food.replenishment);
  });

  it('should not be poisoned to start', function() {
    assert.strictEqual(false, food.poisoned);
  })

  it('should be able to get poisoned', function() {
    food.poisonFood();
    assert.strictEqual(true, food.poisoned);
  })



})
