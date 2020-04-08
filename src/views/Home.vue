<template>
  <div class="home">
    <Header :isFixed="isFixed" />
    <Slider :isFixed="isFixed" />
    <artistSection />
  </div>
</template>

<script>
import "normalize.css";
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import artistSection from "@/components/artistSection";
import { fetchApi } from "@/utils/index";

@Component({
  components: {
    Header,
    Slider,
    artistSection
  }
})
export default class Home extends Vue {
  //data
  isFixed = false;

  //beforeCreate
  async beforeCreate() {
    await this.$store.dispatch("createSongDataArray", "488");
  }

  //mounted
  mounted() {
    window.onscroll = () => {
      const y = pageYOffset;
      if (y >= 86) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    };
  }
}
</script>
