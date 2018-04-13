const assert = require('assert');
const Task = require('../models/task.js');


describe('Task', function() {

  let task;

  beforeEach(function() {
    task = new Task(5,6,100);
  })

  it('should have a difficultyLevel', function() {
    assert.strictEqual(5, task.difficultyLevel);
  });

  it('should have a urgencyLevel', function() {
    assert.strictEqual(6, task.urgencyLevel);
  });

  it('should have a reward', function() {
    assert.strictEqual(100, task.reward);
  });

  it('should be marked not completed to start', function() {
    assert.strictEqual(false, task.completed);
  });

  it('should be able to be marked completed', function() {
    task.markCompleted();
    assert.strictEqual(true, task.completed);
  })

})
