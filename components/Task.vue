<template>
  <div>
    <b-notification
      type="is-dark"
      aria-close-label="Close notification"
      @close="removeTask"
    >
      {{ task.title }}
      <b-button size="is-small" @click="editTask">Edit</b-button>

      <b-field>
        <b-checkbox @input="toggleTask"></b-checkbox>
      </b-field>
    </b-notification>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputActive: false,
    };
  },
  computed: {
    toggleInput() {
      this.inputActive = !this.inputActive;
    },
  },
  name: "Task",
  props: ["task"],
  methods: {
    removeTask() {
      this.$store.commit("REMOVE_TASK", this.task);
    },
    toggleTask() {
      this.$store.commit("TOGGLE_TASK", this.task);
    },
    editTask() {
      this.$store.commit("EDIT_TASK", this.task);
    },
  },
};
</script>
