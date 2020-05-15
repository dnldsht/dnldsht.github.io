<template>
  <section id="contact" class="page x-large-text bg-dark">
    <span v-animate="{value: 'bounceInLeft'}">
      you can contact me via
      <a class="grey" href="mailto:dnld.sht@gmail.com">mail</a> or
      <a class="grey" href="https://www.linkedin.com/in/donald-sh">linkedin</a>.
    </span>
  </section>
</template>
<style>
#contact {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 15rem 4rem;
}

@media only screen and (max-device-width: 900px) and (min-device-width: 0px) {
  #contact {
    padding: 3rem 1rem;
  }
}
</style>
