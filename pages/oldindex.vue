<template>
  <div class="fullpage-container">
    <div ref="fullpage" class="fullpage-wp" v-fullpage="opts">
      <intro class="page"></intro>
      <projects class="page"></projects>
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
      console.log(this);
    },
    next() {
      this.$refs.fullpage.$fullpage.moveNext();
    }
  }
};
</script>

