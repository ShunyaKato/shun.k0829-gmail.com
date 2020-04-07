<template>
  <div class="coverflow" :class="{indexMarginAdd: isFixed}">
    <swiper class="swiper" :options="swiperOption" v-if="pickSongs && pickSongs.length > 0">
      <swiper-slide v-for="(pickSong, index) in pickSongs" :key="index">
        <a :href="pickSong.link">
          <img class="songImage" :src="pickSong.image" />
        </a>
        <p>{{pickSong.title}}</p>
      </swiper-slide>
      <!-- <swiper-slide>
        <img :src="pickSongs[1]" />
      </swiper-slide>
      <swiper-slide>
        <img :src="pickSongs[2]" />
      </swiper-slide>
      <swiper-slide>
        <img :src="pickSongs[3]" />
      </swiper-slide>-->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

@Component({
  components: {
    Swiper,
    SwiperSlide
  }
})
export default class Slider extends Vue {
  swiperOption = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  @Prop()
  isFixed!: boolean;

  get pickSongs() {
    console.log("---get----");
    console.log(this.$store.state.pickSongs);
    return this.$store.state.pickSongs;
  }
}
</script>

<style lang="scss" scoped>
.indexMarginAdd {
  @media (min-width: 680px) {
    padding-top: 130px;
  }
}

.coverflow {
  width: 100%;
  height: 100%;
  background-color: #202020;
}

.swiper {
  height: 100%;
  width: 100%;
  padding: 50px 0 70px;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    width: 480px;
    height: 480px;
    // text-align: center;
    font-weight: bold;
    font-size: 20px;
    // background-color: #2c8dfb;
    // background-position: center;
    // background-size: cover;
    color: #ffffff;
    .songImage {
      width: 100%;
    }
  }
}

@media (max-width: 680px) {
  .swiper {
    padding-top: 120px;
    .swiper-slide {
      width: 270px;
      height: 270px;
    }
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    margin-top: 68px;
  }
}
</style>
