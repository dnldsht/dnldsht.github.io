<template>
  <div id="me" class="container px-3 flex flex-col justify-center">
    <h1 class="x-large-text">
      hi. my name is
      <a href="#contact">donald</a>.
    </h1>
    <h2 class="x-large-text">im a front end developer that cares about design.</h2>

    <scroll-tip @click.native="scroll"></scroll-tip>
  </div>
</template>
<style >
#me {
  display: flex;
  position: relative;
}
</style>

<script>
import scrollable from "~/mixins/scrollable";
export default {
  mixins: [scrollable]
};
</script>