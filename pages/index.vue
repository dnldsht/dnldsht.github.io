<template>
  <div id="me" class="page container px-3 mx-auto flex flex-col justify-center">
    <h1 class="x-large-text">
      hi. my name is
      <a href="#contact">donald</a>.
    </h1>
    <h2 class="x-large-text">im a front end developer that cares about design.</h2>

    <scroll-tip @click.native="next"></scroll-tip>
  </div>
</template>
<style>
/* #me {
  display: flex;
  position: absolute;
} */
</style>

<script>
import scrollable from "~/mixins/scrollable";
export default {
  mixins: [scrollable],
  methods: {
    prev() {
      this.$router.push("/");
    },
    next() {
      this.$router.push("/works");
    }
  }
};
</script>