<template>
  <div class="works">
    <transition-group
      appear
      :duration="1000"
      enter-active-class="animated zoomInLeft"
      leave-active-class="animated zoomOutUp"
      tag="div"
      class="works"
    >
      <div
        @click="open"
        v-show="visible"
        v-for="c in colors"
        :key="c"
        class="work"
        :style="{'background-color': c}"
      ></div>
    </transition-group>
  </div>
</template>


<style lang="scss" scoped>
.works {
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 2.7rem;
  width: 5.2rem;
}

.work {
  height: 100%;
  transition: height 0.15s ease-in-out;
  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-grow: 1;
}

.work:hover {
  height: 3rem;
}
</style>

<script>
export default {
  data: () => ({
    colors: ["#eee", "#ccc", "#999", "#666", "#333"],
    visible: true
  }),
  methods: {
    open() {
      this.visible = false;
      this.$store.commit("setIndexFullPage", 1);
      setTimeout(() => this.$router.push("/"), 500);
    }
  }
};
</script>