<template>
  <div>
    <Header :isFixed="isFixed" />
    <div class="like">
      <h1 class="like__title">Like Songs</h1>
      <div class="like__content" v-for="(likeSong, index) in likeSongs" :key="index">
        <a class="like__content__link" :href="likeSong.link">
          <img class="like__content__link__image" :src="likeSong.image" alt="coverImage" />
        </a>
        <p class="like__content__title">{{likeSong.title}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import "normalize.css";

@Component({
  components: {
    Header
  }
})
export default class Like extends Vue {
  isFixed = false;

  get likeSongs() {
    return this.$store.state.likeSongs;
  }
}
</script>

<style lang="scss" scoped>
.like {
  color: #ffffff;
  display: grid;
  max-width: 1080px;
  margin: 50px auto;
  grid-template-columns: repeat(5, 200px);
  column-gap: 20px;
  row-gap: 20px;

  &__title {
    grid-column: 1/6;
  }
  &__content {
    &__link {
      display: block;
      &__image {
        width: 200px;
      }
    }
    &__title {
      font-size: 18px;
    }
  }
}
</style>