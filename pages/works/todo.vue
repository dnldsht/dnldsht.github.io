<template>
  <section class="flex flex-col items-center justify-center">
    <img max-width="300" :src="require('~/assets/todo.svg')" loading="lazy" />
    <h2 class="mt-20 text-xl">// todo</h2>
    <button-works class="mt-5"></button-works>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
}
img {
  max-width: 400px;
}
.top-right {
  position: absolute;
  top: 2rem;
  left: 2rem;
}
</style>
<script>
import ButtonWorks from "~/components/button-works";
export default {
  components: { ButtonWorks }
};
</script>