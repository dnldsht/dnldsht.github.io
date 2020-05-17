<template>
  <work-page :params="params">
    <div class="flex">
      <div v-for="p in pictures" :key="p">
        <img loading="lazy" alt="destop screenshots" :src="p" />
      </div>
    </div>

    <div class="p-10 flex bg-dark">
      <div class="text-lg">
        <div class="mb-2">About</div>
        <div
          class="grotesque"
        >leafipic is an open-source photo gallery build with material deisgn guidelines</div>
      </div>
    </div>

    <template #footer>
      <div v-if="params.nextProject" class="p-10 flex text-xl justify-center">
        <nuxt-link :to="params.nextProject">Next project</nuxt-link>
      </div>
    </template>
  </work-page>
</template>
<script>
import WorkPage from "~/components/work-page";
export default {
  components: { WorkPage },
  data: () => ({
    params: {
      title: "leafpic",
      url: "https://github.com/HoraApps/LeafPic",
      category: "Mobile app",
      role: "Code / Design",
      date: "2016",
      nextProject: "/"
    }
  }),
  computed: {
    pictures() {
      return [1, 2, 3, 4, 5].map(
        i =>
          `https://raw.githubusercontent.com/HoraApps/LeafPic/dev/screenshots/${i}.png`
      );
    }
  }
};
</script>