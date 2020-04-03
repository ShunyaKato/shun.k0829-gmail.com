<template>
  <div class="home">
    <Header />
    <Slider />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import "normalize.css";

export default {
  name: "Home",
  components: {
    Header,
    Slider
  }
};
</script>
