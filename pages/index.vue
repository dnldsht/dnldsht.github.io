<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
      <intro class="page"></intro>
      <projects class="page"></projects>

      <contact class="page"></contact>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
<script>
import Intro from "~/components/intro";
import Contact from "~/components/contact";
import Projects from "~/components/projects";

export default {
  components: { Intro, Contact, Projects },
  data() {
    return {
      index: 0,
      opts: {
        start: 0,
        dir: "v",
        duration: 300,
        loop: false,
        beforeChange: this.beforeChange,
        afterChange: function(currentSlideEl, currenIndex) {}
      }
    };
  },
  methods: {
    beforeChange(currentSlideEl, currenIndex, nextIndex) {
      this.index = nextIndex;
    },
    next() {
      this.$refs.fullpage.$fullpage.moveNext();
    }
  }
};
</script>

