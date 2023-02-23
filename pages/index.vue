<template>
  <div class="hero-body is-flex-direction-column">
    <section>
      <b-field>
        <b-input v-model="newTitle" placeholder="Add new task"></b-input>
        <b-button @click="addTask" class="ml-3">Add</b-button>
      </b-field>
    </section>

    <div
      class="is-flex is-flex-wrap-wrap is-justify-content-center mt-6"
      :style="{ gap: '2rem' }"
    >
      <Task
        v-for="task in this.$store.state.tasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
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
  async mounted() {
    await this.$store.dispatch("fetch");
  },
};
</script>
