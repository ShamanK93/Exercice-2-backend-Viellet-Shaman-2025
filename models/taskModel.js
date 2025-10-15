let tasks = [];

module.exports = {
  getAllTasks: () => tasks,

  addTask: (task) => {
    const newTask = { id: Date.now(), title: task };
    tasks.push(newTask);
    return newTask;
  },

  removeTask: (id) => {
    tasks = tasks.filter(task => task.id !== id);
    return tasks;
  }
};
