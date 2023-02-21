export const state = () => ({
  tasks: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
  ],
  editActive: false,
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks.unshift({ title: task[0], completed: false, id: task[1] });
  },
  REMOVE_TASK(state, task) {
    state.tasks = state.tasks.filter((item) => item.id !== task.id);
  },
  TOGGLE_TASK(state, task) {
    task.completed = !task.completed;
  },
  EDIT_TASK(state, task) {
    state.editActive = !state.editActive;
  },
};
