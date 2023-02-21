<template>
  <section class="hero is-fullheight has-background-black">
    <div class="hero-body">
      <figure class="image">
        <img src="./assets/bulma-logo-white.png" alt="" />
      </figure>
    </div>
  </section>
</template>

<script>
// import "../assets/debug.css";
export default {
  name: "DefaultLayout",
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" },
        },
      ],
    };
  },
};
</script>
