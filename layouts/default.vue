<template>
  <div>
    <section class="hero">
      <div class="hero-body is-flex center">
        <figure class="image">
          <img
            src="../static/bulma-logo.png"
            style="max-width: 160px"
            alt="xui"
            class="is-inline-block"
          />
        </figure>
      </div>
    </section>

    <section class="section has-background-light">
      <div class="container">
        <div class="columns">
          <div class="column">
            <article class="media notification is-info">
              <figure class="media-left">
                <span class="icon is-medium">
                  <i class="fab fa-2x fa-css3-alt"></i>
                </span>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h1 class="title is-size-5">Bulma</h1>
                  <p class="is-size-5">
                    Bulma is a modern CSS framework from @jgthms, based on
                    Flexbox. Using Bulma, we can describe our website's design
                    using just classes. ᕕ( ᐛ )ᕗ
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column">
            <div class="notification is-warning">
              <p class="is-size-5">
                Flexbox is a CSS spec that makes sectioning and aligning more
                natural. We don't need to know Flexbox but it's how Bulma works
                behind-the-scenes. ⦤(^ー^)⦥
              </p>
            </div>
          </div>
          <div class="column">
            <div class="notification is-danger">
              <p class="is-size-5">
                Instead of writing our CSS per-element, we can use predefined
                classes. With enough classes, we can describe our website design
                using semantics. ٩(^ᴗ^)۶
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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

<!-- <style scoped>
*:not(path):not(g) {
  color: hsla(210, 100%, 100%, 0.9) !important;
  background: hsla(210, 100%, 50%, 0.5) !important;
  outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

  box-shadow: none !important;
}
</style> -->
