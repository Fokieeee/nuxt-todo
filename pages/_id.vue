<template>
  <div>
    <!-- <EditTask :id="$route.params.id"></EditTask> -->
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: "",
    };
  },
};
</script>
