<template>
  <div class="hero-body is-flex-direction-column">
    <b-field label="Edit TODO">
      <section>
        <b-input maxlength="200" type="textarea" v-model="editTask"
          >{{}}
        </b-input>

        <NuxtLink v-show="editTask" to="/">Apply</NuxtLink>
      </section>
    </b-field>
  </div>
</template>

<script>
export default {
  computed: {
    editTask: {
      get() {
        return this.$store.getters.currentTask(this.$route.params.id);
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
