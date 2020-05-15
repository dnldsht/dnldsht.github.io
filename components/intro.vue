<template>
  <section class="container px-3 mx-auto flex flex-col justify-center">
    <h1 class="x-large-text">
      hi. my name is
      <span class="grey">donald</span>.
    </h1>
    <h2 class="x-large-text">im a front end developer that cares about design.</h2>

    <scroll-tip @click.native="next"></scroll-tip>
  </section>
</template>
<style scoped>
section {
  display: flex;
}
</style>

<script>
import scrollable from "~/mixins/scrollable";
export default {
  mixins: [scrollable]
};
</script>