<template>
  <div>
    <div class="header flex flex-col">
      <div class="p-10 text-right">
        <h1 class="x-large-text mb-2">tutaca</h1>
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
    <img :src="require('~/assets/tutaca/wireframe/desktop.png')" />

    <div class="p-10 flex bg-dark">
      <div class="text-lg">
        <div class="mb-2">About</div>
        <div
          class="grotesque"
        >tutaca was made during covid-19 pandemic to help shops with local deliveries and take-away</div>
      </div>
    </div>
    <img :src="require('~/assets/tutaca/wireframe/mobile.png')" />

    <div class="p-10 flex text-xl justify-center bg-dark">
      <nuxt-link class="white" to="/">Next project</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.white {
  color: white;
}
</style>
<script>
export default {};
</script>