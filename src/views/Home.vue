<template>
  <div class="home">
    <Header :isFixed="isFixed" />
    <Slider :isFixed="isFixed" />
    <artistSection />
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import artistSection from "@/components/artistSection";
import "normalize.css";

@Component({
  components: {
    Header,
    Slider,
    artistSection
  }
})
export default class Home extends Vue {
  // name: "Home",;
  isFixed = false;
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
