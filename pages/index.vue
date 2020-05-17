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
  methods: {
    changed(currentSlideEl, i) {
      this.$store.commit("setIndexFullPage", i);
    },
    keyUpHandler(e) {
      const code = e.keyCode;
      if (code === 40) this.next();
      else if (code === 38) this.prev();
    },
    next() {
      this.fullpage.moveNext();
    },
    prev() {
      this.fullpage.movePrev();
    }
  },
  mounted() {
    window.addEventListener("keyup", this.keyUpHandler);
    const start = this.$store.state.indexFullPage;
    if (start) setTimeout(() => this.fullpage.moveTo(start, true), 0);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.keyUpHandler);
  }
};
</script>

