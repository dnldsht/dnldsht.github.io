<template>
  <section class="mx-auto container">
    <h2>my works.</h2>
    <div @mouseleave="active = null" class="works">
      <div
        v-for="(w, i) in works"
        :key="w.name"
        v-animate="{value: 'zoomInLeft', delay: i*20}"
        :class="{'active':active == i }"
        @mouseover="active = i"
        class="work"
        :style="w.style"
      >
        <nuxt-link
          class="link flex justify-center items-center"
          v-if="active == i"
          :to="w.link"
        >{{w.name}}</nuxt-link>
      </div>
    </div>
    <scroll-tip @click.native="next"></scroll-tip>
  </section>
</template>
<style lang="scss" scoped>
h2 {
  line-height: 0.99em;
  letter-spacing: -0.02em;
  font-size: 3rem;
  margin-bottom: 4rem;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  // padding-bottom: 20rem;
}
.works {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 270px;
  width: 520px;
}

@media only screen and (max-device-width: 900px) and (min-device-width: 0px) {
  .works {
    height: 320px;
    width: 270px;
    flex-direction: column;
    .work {
      width: 100%;
      margin: 0;
      padding: 0 1rem;
      border-top-width: 0;
      border-bottom-width: 0;
    }

    .work.active {
      flex-basis: 100px;
    }
  }
}

.work.active {
  flex-grow: 2;
  flex-basis: 270px;
  margin: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}
.work {
  border-top: 1rem white solid;
  border-bottom: 1rem white solid;
  cursor: pointer;

  height: 100%;
  transition: all 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-basis: 70px;

  .link {
    width: 100%;
    height: 100%;
    font-size: 140%;
  }
}

.work:hover {
  /* width: 270px; */
  height: 270px;
}
</style>

<script>
import Velocity from "velocity-animate";
import scrollable from "~/mixins/scrollable";
export default {
  mixins: [scrollable],
  data: () => ({
    active: 1,
    rawWorks: [
      {
        name: "tutaca",
        link: "works/tutaca",
        style: {
          backgroundColor: "#eee",
          color: "#333"
        }
      },
      {
        name: "leafpic",
        link: "works/tutaca",
        style: {
          backgroundColor: "#ccc",
          color: "#333"
        }
      },
      {
        name: "parkall",
        link: "works/tutaca",
        style: {
          backgroundColor: "#999",
          color: "#eee"
        }
      },
      {
        name: "#666",
        link: "works/tutaca",
        style: {
          backgroundColor: "#666",
          color: "#eee"
        }
      },
      {
        name: "#333",
        link: "works/tutaca",
        style: {
          backgroundColor: "#333",
          color: "#eee"
        }
      }
    ]
  }),
  computed: {
    works() {
      return this.rawWorks.map((a, i) => {
        const { style } = a;
        const distance = Math.abs(this.active - i);
        style["flex-shrink"] = distance;
        return a;
      });
    }
  },
  methods: {}
};
</script>