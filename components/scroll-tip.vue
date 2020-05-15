<template>
  <div class="scroll-tip flex flex-col">
    <button>su</button>
    <button class="mt-3">giu</button>
  </div>
  <!-- <div class="scroll-tip flex justify-end">
    <div class="btn mb-3 pb-1 cursor-pointer">
      <span>
        <span>SCROLL</span>
      </span>
    </div>
  </div>-->
</template>
<style lang="scss" scoped>
@mixin btn-border-slide($color, $hoverColor, $borderWidth, $time) {
  $easing: cubic-bezier(0.4, 0, 0.2, 1);

  position: relative;

  padding: 0.5em;

  cursor: pointer;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    left: 0;

    height: $borderWidth;
    width: 100%;

    background-color: $hoverColor;

    bottom: 0;
  }

  &:hover {
    & > * {
      &:after {
        width: 100%;
        // transform: translate3d(0, 0, 0);
      }
    }
  }

  & > * {
    &:after {
      content: "";
      position: absolute;
      left: 0%;
      z-index: 9;

      height: $borderWidth;
      width: 0;

      background-color: $color;

      bottom: 0;

      transition: width $time $easing;

      // transform: translate3d(150%, 0, 0);
      // transition: transform $time $easing;
    }
  }
}

.btn {
  @include btn-border-slide(#000, #fff, 2px, 0.4s);
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
}

.scroll-tip {
  position: fixed;
  z-index: 20;
  bottom: 1rem;
  right: 1rem;
}
</style>