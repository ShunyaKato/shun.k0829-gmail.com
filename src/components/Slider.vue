<template>
  <div class="coverflow" :class="{indexMarginAdd: isFixed}">
    <swiper
      class="coverflow__swiper"
      :options="swiperOption"
      v-if="pickSongs && pickSongs.length > 0"
    >
      <swiper-slide
        class="coverflow__swiper__content"
        v-for="(pickSong, index) in pickSongs"
        :key="index"
      >
        <a class="coverflow__swiper__content__link" :href="pickSong.link">
          <img
            class="coverflow__swiper__content__link__image"
            :src="pickSong.image"
            alt="coverImage"
          />
        </a>
        <p class="coverflow__swiper__content__title">{{pickSong.title}}</p>
        <button
          class="coverflow__swiper__content__button"
          type="button"
          @click="toggleLike(pickSong.image, pickSong.title, pickSong.link, pickSong.id, pickSong.isLiked)"
        >{{toggleButtonText(pickSong.isLiked)}}</button>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "normalize.css";

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

  buttonText = "";

  get pickSongs() {
    return this.$store.state.pickSongs;
  }

  toggleButtonText(isLiked: boolean) {
    return isLiked ? "お気に入り解除" : "お気に入り登録";
  }

  toggleLike(
    image: string,
    title: string,
    link: string,
    id: number,
    isLiked: boolean
  ) {
    this.$store.commit("toggleLikeSongs", {
      image: image,
      title: title,
      link: link,
      id: id,
      isLiked: isLiked
    });
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
  &__swiper {
    height: 100%;
    width: 100%;
    padding: 50px 0 120px;
    &__content {
      display: flex;
      flex-direction: column;
      width: 480px;
      height: 480px;
      font-weight: bold;
      font-size: 20px;
      color: #ffffff;
      &__link {
        &__image {
          width: 100%;
        }
      }
      &__button {
        width: 50%;
        margin: 0 auto;
        font-size: 16px;
        padding-bottom: 17.5px;
      }
    }
  }
}

// .swiper {
//   height: 100%;
//   width: 100%;
//   padding: 50px 0 100px;
//   .swiper-slide {
//     display: flex;
//     flex-direction: column;
//     width: 480px;
//     height: 480px;
//     font-weight: bold;
//     font-size: 20px;
//     color: #ffffff;
//     .song {
//       &__Image {
//         width: 100%;
//       }
//     }
//   }
// }

@media (max-width: 680px) {
  .coverflow {
    &__swiper {
      padding-top: 120px;
      &__content {
        width: 270px;
        height: 270px;
      }
    }
  }
  // .swiper {
  //   padding-top: 120px;
  //   .swiper-slide {
  //     width: 270px;
  //     height: 270px;
  //   }
  // }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    margin-top: 68px;
  }
}
</style>
