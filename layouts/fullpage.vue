<template>
  <div class="full-center">
    <nuxt />
  </div>
</template>

<style lang="scss">
.full-center {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .page {
    box-sizing: border-box;

    position: relative;
    flex-shrink: 0;
    overflow: hidden;

    width: 100%;
    height: 100%;
  }
}
</style>
