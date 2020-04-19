<template>
  <div id="container" class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts">
      <intro class="page"></intro>
      <contact class="page"></contact>
    </div>
  </div>
</template>

<style lang="css">
#container {
  position: absolute;
}
</style>
<script>
import Intro from "~/components/intro";
import Contact from "~/components/contact";
export default {
  components: { Intro, Contact },
  data: () => ({
    opts: {
      start: 0,
      dir: "v",
      duration: 300,
      loop: false,
      beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
      afterChange: function(currentSlideEl, currenIndex) {}
    }
  })
};
</script>

