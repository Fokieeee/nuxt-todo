export const state = () => ({
  tasks: [],
  task: null,
});

export const getters = {
  tasks: (state) => state.tasks,
  currentTask: (state, getters) => {
    return state.tasks.filter((e) => e.id === state.task.id);
  },
};

export const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  ADD_TASK(state, task) {
    state.tasks.push({ title: task[0], completed: false, id: task[1] });
  },
  REMOVE_TASK(state, task) {
    state.tasks = state.tasks.filter((item) => item.id !== task.id);
  },
  TOGGLE_TASK(state, task) {
    task.completed = !task.completed;
  },
  EDIT_TASK: (state, task) => {
    const filtered = state.tasks.map((item) => item.id).indexOf(task.id);
    state.tasks.splice(filtered, 1);
    state.tasks.unshift({ id: task.id, title: task.title, completed: false });
  },
  SET_TODO(state, task) {
    state.task = task;
  },
};

export const actions = {
  async fetch({ commit }) {
    const tasks = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    commit("SET_TASKS", tasks);
  },
};
