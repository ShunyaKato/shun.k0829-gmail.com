<template>
  <div>
    <Header :isFixed="isFixed" />
    <h1 class="title">Like Songs</h1>
    <div class="like" v-if="likeSongs && likeSongs.length > 0">
      <div class="like__content" v-for="(likeSong, index) in likeSongs" :key="index">
        <a class="like__content__link" :href="likeSong.link">
          <img class="like__content__link__image" :src="likeSong.image" alt="coverImage" />
        </a>
        <p class="like__content__title">{{likeSong.title}}</p>
        <button class="like__content__button">削除</button>
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
.title {
  color: #ffffff;
  margin: 50px 0 20px;
}
.like {
  color: #ffffff;
  display: flex;
  justify-content: center;
  max-width: 1080px;
  margin: 50px auto;
  flex-wrap: wrap;
  // grid-template-columns: repeat(5, 200px);
  // column-gap: 20px;
  // row-gap: 20px;
  &__content {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__link {
      display: block;
      &__image {
        width: 200px;
      }
    }
    &__title {
      font-size: 18px;
      max-width: 180px;
      margin: 0;
      text-align: center;
    }
  }
}

@media (max-width: 1080px) {
  .title {
    margin-top: 100px;
  }
  // .like {
  //   display: flex;
  //   margin: 0 20px;
  //   &__content {
  //     margin: 0 10px;
  //   }
  // }
}
</style>