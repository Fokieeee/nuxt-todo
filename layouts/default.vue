<template>
  <div class="hero is-fullheight has-background-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">TODO list</p>
        <div class="control">
          <b-field>
            <b-input
              v-model="newTitle"
              placeholder="Add new task"
              :style="{ maxWidth: '500px' }"
            ></b-input>
          </b-field>
        </div>

        <b-button @click="addTask">Add</b-button>
      </div>
    </div>

    <Task
      class="columns"
      v-for="task in this.$store.state.tasks"
      :key="task.id"
      :task="task"
    />

    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",

  data() {
    return {
      newTitle: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTitle) {
        let id = new Date();
        this.$store.commit("ADD_TASK", [this.newTitle, id.getTime()]);
        this.newTitle = "";
      }
    },
    toggleTask() {
      this.$store.commit("TOGGLE_TASK", task.id);
    },
  },
};
</script>
