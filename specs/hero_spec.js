const assert = require('assert');
const Hero = require('../models/hero.js');
const Task = require('../models/task.js');
const Food = require('../models/food.js');


describe('Hero', function() {

  let faveFood, otherFood;
  let hero;
  let task1, task2, task3;

  beforeEach(function() {
    faveFood = new Food("Gyoza", 5);
    otherFood = new Food("Spinach", 10);
    task1 = new Task(3,2,10);
    task2 = new Task(2,1,5);
    task3 = new Task(7,8,70);
    task4 = new Task(1,2,3);
    hero = new Hero("Verity", 10, faveFood, [task1, task2, task3]);
  });

  it('should have a name', function() {
    assert.strictEqual("Verity", hero.name);
  });

  it('should have a health value', function() {
    assert.strictEqual(10, hero.health);
  });

  it('should have a favourite food', function() {
    assert.strictEqual(faveFood, hero.faveFood);
  });

  it('should have tasks to complete', function() {
    assert.deepStrictEqual([task1, task2, task3], hero.tasks);
  });

  it('should be able to talk', function() {
    assert.strictEqual("Hello, my name is Verity", hero.talk());
  });

  it('should be able to increase health value', function() {
    hero.changeHealth(5);
    assert.strictEqual(15, hero.health);
  });

  it('should be able to increase health after eating', function() {
    hero.eatFood(otherFood);
    assert.strictEqual(20, hero.health);
  });

  it('should be able to increase health more after eating if faveFood eaten', function() {
    hero.eatFood(faveFood);
    assert.strictEqual(17.5, hero.health);
  });

  it('should be able to sort tasks by difficulty level', function() {
    hero.sortTasksBy('difficultyLevel');
    assert.deepStrictEqual([task2, task1, task3], hero.tasks);
  });

  it('should be able to sort tasks by urgency level', function() {
    hero.sortTasksBy('urgencyLevel');
    assert.deepStrictEqual([task2, task1, task3], hero.tasks);
  });

  it('should be able to sort tasks by reward', function() {
    hero.sortTasksBy('reward');
    assert.deepStrictEqual([task2, task1, task3], hero.tasks);
  });

  it('should be able to view just completed tasks', function() {
    task1.markCompleted();
    task3.markCompleted();
    assert.deepStrictEqual([task1, task3], hero.viewTasksByCompletedStatus(true))
  });

  it('should be able to view just incomplete tasks', function() {
    task1.markCompleted();
    task3.markCompleted();
    assert.deepStrictEqual([task2], hero.viewTasksByCompletedStatus(false))
  });

  it('should be able to add a new task', function() {
    hero.addTask(task4);
    assert.deepStrictEqual([task1, task2, task3, task4], hero.tasks);
  })

  it('should decrease health if it eats poisoned food', function() {
    otherFood.poisonFood();
    hero.eatFood(otherFood);
    assert.strictEqual(0, hero.health);
  })

})
