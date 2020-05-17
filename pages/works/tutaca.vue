<template>
  <work-page :params="params">
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
  </work-page>
</template>


<script>
import WorkPage from "~/components/work-page";
export default {
  components: { WorkPage },
  data: () => ({
    params: {
      title: "tutaca",
      url: "https://tutaca.it/",
      category: "Web design",
      role: "Code / Design",
      date: "March 2020",
      nextProject: "/works/leafpic"
    }
  })
};
</script>