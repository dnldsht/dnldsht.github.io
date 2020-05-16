<template>
  <div>
    <div class="header flex flex-col">
      <div class="p-10 text-right">
        <div class="flex items-center">
          <button-works></button-works>
          <h1 class="ml-auto x-large-text mb-2">tutaca</h1>
        </div>

        <a class="link text-xl" href="https://tutaca.it/">Visit website</a>
      </div>

      <div class="p-10 flex bg-dark flex-row mt-auto items-end">
        <div class="text-lg mr-5">
          <div class="mb-2">Category</div>
          <div class="grotesque">Web design</div>
        </div>
        <div class="text-lg mr-5">
          <div class="mb-2">Role</div>
          <div class="grotesque">Design / Code</div>
        </div>
        <div class="text-lg">
          <div class="mb-2">Date</div>
          <div class="grotesque">March, 2020</div>
        </div>
      </div>
    </div>
    <div class="aspect-box" style="--ratio: calc(7157 / 5090)">
      <img
        loading="lazy"
        alt="destop screenshots"
        :src="require('~/assets/tutaca/wireframe/desktop.webp')"
      />
    </div>

    <div class="p-10 flex bg-dark">
      <div class="text-lg">
        <div class="mb-2">About</div>
        <div
          class="grotesque"
        >tutaca was made during covid-19 pandemic to help shops with local deliveries and take-away</div>
      </div>
    </div>
    <div class="aspect-box" style="--ratio:calc(7157 / 3421)">
      <img
        loading="lazy"
        alt="mobile screenshots"
        :src="require('~/assets/tutaca/wireframe/mobile.webp')"
      />
    </div>

    <div class="p-10 flex text-xl justify-center bg-dark">
      <nuxt-link class="white" to="/">Next project</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-right {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
.white {
  color: white;
}
</style>
<script>
import ButtonWorks from "~/components/button-works";
export default {
  components: { ButtonWorks }
};
</script>