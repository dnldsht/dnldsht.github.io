<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
      <intro class="page"></intro>
      <works class="page"></works>
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
import Works from "~/components/works";

export default {
  components: { Intro, Contact, Works },
  data() {
    return {
      opts: {
        duration: 300,
        afterChange: this.changed
      }
    };
  },
  computed: {
    fullpage() {
      return this.$refs.fullpage.$fullpage;
    }
  },
  mounted() {
    const start = this.$store.state.indexFullPage;
    if (start) setTimeout(() => this.fullpage.moveTo(start, true), 0);
  },
  methods: {
    changed(currentSlideEl, i) {
      this.$store.commit("setIndexFullPage", i);
    },
    next() {
      this.fullpage.moveNext();
    }
  }
};
</script>

