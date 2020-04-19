<template>
  <div id="wrapper">
    <h2>my works.</h2>
    <div class="works" @mouseleave="active = null">
      <div
        v-for="(w, i) in works"
        :key="w.color"
        :style="w.style"
        :class="{'active':active == i }"
        v-animate="{value: 'zoomInLeft', delay: i*50 }"
        @mouseover="active = i"
        class="work"
      >
        <div v-if="active == i">
          <div class="name">{{w.name}}</div>
        </div>
      </div>
    </div>
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
export default {
  data: () => ({
    active: null,

    colors: ["#eee", "#ccc", "#999", "#666", "#333", "#000"],
    rawWorks: [
      {
        name: "#eee"
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
      },
      {
        name: "#000"
      }
    ]
  }),
  computed: {
    works() {
      console.log(this.rawWorks);

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
  }
};
</script>