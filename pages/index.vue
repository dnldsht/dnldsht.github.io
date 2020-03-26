<template>
  <div id="container">
    <div id="intro">
      hi. my name is
      <a href="#contact">donald</a>. im a front end developer who cares about design.
    </div>

    <div id="contact">
      you can contact me via
      <a href="mailto:dnld.sht@gmail.com">mail</a> or
      <a href="https://www.linkedin.com/in/donald-sh">linkedin</a>.
    </div>
  </div>
</template>

<style lang="css">
#container {
  width: 100%;
}
#intro,
#contact {
  font-size: 9rem;
  line-height: 0.99em;
  letter-spacing: -0.02em;

  padding: 6rem 4rem;
}

@media only screen and (max-device-width: 900px) and (min-device-width: 0px) {
  #intro,
  #contact {
    font-size: 4rem;
    line-height: 0.99em;
    letter-spacing: -0.02em;
    padding: 3rem 2rem;
  }
}

#intro {
  /* font-size: 212px; */

  padding-top: 6rem;
}
#contact {
  margin: 80px 0 0 0;
  background: #222;
  color: #fff;
  padding-top: 6rem;
}
a {
  color: #999;
  text-decoration: none;
}
a:hover {
  color: #999;
  text-decoration: line-through;
}
</style>
<script>
export default {};
</script>

