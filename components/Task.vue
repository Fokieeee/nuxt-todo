<template>
  <div>
    <b-notification
      type="is-light"
      @close="removeTask"
      :style="{ border: '1px solid #d3d3d3' }"
    >
      <p>{{ task.title }}</p>
      <div class="mt-2">
        <b-field>
          <b-button size="is-small" class="edit-btn" @click.prevent="editTask">
            Edit
          </b-button>
          <b-checkbox class="ml-2" @input="toggleTask"></b-checkbox>
        </b-field>
      </div>
    </b-notification>
  </div>
</template>

<script>
export default {
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
      this.$router.push(`/${this.task.id}`);
    },
  },
};
</script>

<style scoped>
.edit-btn a {
  text-decoration: none !important;
}
</style>
