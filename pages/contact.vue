<template>
  <div id="contact" class="page x-large-text bg-dark">
    <transition appear enter-active-class="animated bounceInLeft">
      <span>
        you can contact me via
        <a href="mailto:dnld.sht@gmail.com">mail</a> or
        <a href="https://www.linkedin.com/in/donald-sh">linkedin</a>.
      </span>
    </transition>
  </div>
</template>
<style>
#contact {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 4rem;
}

@media only screen and (max-device-width: 900px) and (min-device-width: 0px) {
  #contact {
    padding: 0 1rem;
  }
}
</style>
<script>
import scrollable from "~/mixins/scrollable";
export default {
  mixins: [scrollable],
  methods: {
    prev() {
      this.$router.push("/works");
    }
  }
};
</script>