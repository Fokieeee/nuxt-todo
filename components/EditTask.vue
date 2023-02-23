<template>
  <div class="hero-body is-flex-direction-column">
    <b-field label="Edit TODO">
      <section>
        <b-input maxlength="200" type="textarea" v-model="editTask"></b-input>
        <h1>
          {{ $route.params.id }} {{ this.$store.getters.currentTask }}
          {{ getTask }} {{ this.index }}
        </h1>
        <b-button><NuxtLink to="/">Apply</NuxtLink></b-button>
      </section>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "EditTask",
  props: ["id"],
  computed: {
    editTask: {
      get() {
        return this.$store.getters.tasks[id].title;
      },
      set(value) {
        this.$store.commit("EDIT_TASK", {
          title: value,
          id: this.$route.params.id,
        });
      },
    },
  },
};
</script>
