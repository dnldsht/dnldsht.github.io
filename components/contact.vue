<template>
  <div id="contact" class="x-large-text bg-dark">
    <span v-animate="{value: 'bounceInLeft'}">
      you can contact me via
      <a href="mailto:dnld.sht@gmail.com">mail</a> or
      <a href="https://www.linkedin.com/in/donald-sh">linkedin</a>.
    </span>
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