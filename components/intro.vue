<template>
  <div id="intro" class="x-large-text">
    <h1 v-animate="{value: 'bounceInLeft'}">
      hi. my name is
      <a href="#contact">donald</a>.
    </h1>
    <h2
      v-animate="{value: 'bounceInLeft', delay: 600}"
    >im a front end developer who cares about design.</h2>
  </div>
</template>
<style>
#intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
}

@media only screen and (max-device-width: 900px) and (min-device-width: 0px) {
  #intro {
    padding: 0 1rem;
  }
}
</style>

<script>
export default {};
</script>