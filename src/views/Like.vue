<template>
  <div class="Like">
    <Header :isFixed="isFixed" />
    <div class="Like__content" v-for="(likeSong, index) in likeSongs" :key="index">
      <a class="Like__content__link" :href="likeSong.link">
        <img class="Like__content__link__image" :src="likeSong.image" alt="coverImage" />
      </a>
      <p class="Like__content__title">{{likeSong.title}}</p>
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