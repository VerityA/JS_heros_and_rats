const Hero = function(name, health, faveFood, tasks) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.tasks = tasks;
}

Hero.prototype.talk = function () {
  return `Hello, my name is ${this.name}`;
};

Hero.prototype.changeHealth = function (health) {
  this.health += health;
};

Hero.prototype.eatFood = function (food) {
  if (food.poisoned) {
    this.changeHealth(-10);
  }
  else if(this.faveFood === food) {
    this.changeHealth(food.replenishment * 1.5);
  }
  else {
    this.changeHealth(food.replenishment);
  }
};

Hero.prototype.sortTasksBy = function (property) {
  const tasksArray = this.tasks;
  const sortedTasksArray = tasksArray.sort(function(task1, task2) {
    return task1[property] - task2[property];
  })
  return sortedTasksArray;
};

Hero.prototype.viewTasksByCompletedStatus = function (boolean) {
  const tasksArray = this.tasks;
  const filteredTasksArray = tasksArray.filter((task) => {
    if(task.completed === boolean) {
      return task;
    };
  })
  return filteredTasksArray;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};


module.exports = Hero;
