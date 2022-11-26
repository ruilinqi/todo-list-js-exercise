// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Print the state of a task
    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    // Mark a task as complete
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Clean cat litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
