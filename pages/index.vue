<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts">
      <projects class="page"></projects>
      <intro class="page"></intro>
      <contact class="page"></contact>
    </div>
  </div>
</template>

<style lang="css">
.fullpage-container {
  position: absolute;
}
</style>
<script>
import Intro from "~/components/intro";
import Contact from "~/components/contact";
import Projects from "~/components/projects";
export default {
  components: { Intro, Contact, Projects },
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

