<template>
  <div>
    <div class="header flex flex-col">
      <div class="p-10 text-right">
        <div class="flex items-center">
          <button-works></button-works>
          <h1 class="ml-auto x-large-text mb-2">{{params.title}}</h1>
        </div>

        <a v-if="params.url" class="link text-xl" :href="params.url">Visit website</a>
      </div>

      <div class="p-10 flex bg-dark flex-row mt-auto items-end">
        <div class="text-lg mr-5">
          <div class="mb-2">Category</div>
          <div class="grotesque">{{params.category}}</div>
        </div>
        <div class="text-lg mr-5">
          <div class="mb-2">Role</div>
          <div class="grotesque">{{params.role}}</div>
        </div>
        <div class="text-lg">
          <div class="mb-2">Date</div>
          <div class="grotesque">{{params.date}}</div>
        </div>
      </div>
    </div>

    <slot>
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
    </slot>

    <slot name="footer">
      <div v-if="params.nextProject" class="p-10 flex text-xl justify-center bg-dark">
        <nuxt-link class="white" :to="params.nextProject">Next project</nuxt-link>
      </div>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.white {
  color: white;
}
</style>
<script>
import ButtonWorks from "~/components/button-works";
export default {
  components: { ButtonWorks },
  props: ["params"]
};
</script>