<template>
  <div id="wrapper" class="page mx-auto container">
    <h2>my works.</h2>
    <div @mouseleave="active = null">
      <transition-group appear enter-active-class="animated zoomInLeft" class="works" tag="div">
        <div
          v-for="(w, i) in works"
          :key="w.name"
          v-bind:data-index="i"
          :class="{'active':active == i }"
          @mouseover="active = i"
          class="work"
          :style="w.style"
        >
          <div v-if="active == i">
            <nuxt-link to="/works/tutaca">
              <div class="name">{{w.name}}</div>
            </nuxt-link>
          </div>
        </div>
      </transition-group>
    </div>
    <scroll-tip @click.native="next"></scroll-tip>
  </div>
</template>
<style lang="scss" scoped>
h2 {
  line-height: 0.99em;
  letter-spacing: -0.02em;
  font-size: 3rem;
  margin-bottom: 4rem;
}
#wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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
  transition: all 0.15s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-basis: 70px;

  .name {
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
  transition(to, from) {
    // console.log(from, to,);
    // console.table(this);

    if (from) {
      return { enterActiveClass: "animated fadeIn" };
      // return "slide-left";
    }
    // return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  },
  // enterActiveClass: "animated tada"
  // },
  mixins: [scrollable],
  data: () => ({
    active: null,

    colors: ["#eee", "#ccc", "#999", "#666", "#333"],
    rawWorks: [
      {
        name: "tutaca"
      },
      {
        name: "#ccc"
      },
      {
        name: "#999"
      },
      {
        name: "#666"
      },
      {
        name: "#333"
      }
    ]
  }),
  computed: {
    works() {
      let i = 0;
      return this.rawWorks.map(a => {
        const style = {
          "background-color": this.colors[i],
          color: this.colors[this.colors.length - i - 1]
        };
        const d = this.active != null ? Math.abs(this.active - i) : 1;
        style["flex-shrink"] = d;
        i++;

        return { ...a, style };
      });
    }
  },
  methods: {
    prev() {
      this.$router.push("/");
    },
    next() {
      this.$router.push("/contact");
    },
    enter(el, done) {
      var delay = el.dataset.index * 350;
      console.log(el.dataset.index, delay, done);
      setTimeout(() => {
        Velocity(el, { opacity: 1 }, { complete: done });
      }, delay);
    }
  }
};
</script>