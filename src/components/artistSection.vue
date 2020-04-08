<template>
  <div class="artistSection">
    <div class="artist" v-for="(data, index) in data" :key="index" :id="data.title">
      <h2 class="artist__title">{{data.title}}</h2>
      <a
        class="artist__button"
        v-for="(artist, index) in data.data"
        :key="index"
        @click="changeArtist(artist.id)"
        :artistId="data.id"
        v-scroll-to="'body'"
      >
        <font-awesome-icon class="artist__button__icon" icon="angle-right" />
        <p class="artist__button__name">{{artist.name}}</p>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { artistData } from "../constants/artistData";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueScrollTo from "vue-scrollto";

library.add(faAngleRight);

Vue.use(VueScrollTo, {});

@Component({
  components: {
    FontAwesomeIcon
  }
})
export default class ArtistSection extends Vue {
  data: any[] = artistData;

  async changeArtist(id: string) {
    await this.$store.dispatch("createSongDataArray", id);
  }
}
</script>
<style lang="scss" scoped>
.artistSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #202020;
  padding-bottom: 100px;
  margin-top: 40px;
}

.artist {
  color: #ffffff;
  display: grid;
  grid-template-columns: repeat(3, 165px);
  column-gap: 20px;
  row-gap: 20px;
  margin-bottom: 40px;
  &__title {
    font-size: 22px;
    margin: 0;
    grid-column: 1/4;
    &::before,
    &::after {
      content: "・・・・・・・・・・・・・";
      font-size: 15px;
      letter-spacing: -4px;
      color: #ffffff;
      margin: 0 40px;
    }
  }
  &__button {
    border: solid 5px #dbdbdb;
    border-radius: 28px;
    position: relative;
    cursor: pointer;
    &__icon {
      position: absolute;
      left: 15px;
      top: 14.5px;
    }
    &__name {
      font-size: 14px;
    }
  }
}

@media (max-width: 680px) {
  .artist {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      font-size: 18px;
      margin-bottom: 10px;
      &::before,
      &::after {
        content: "・・・・・・・・・・・・・";
        font-size: 14px;
        letter-spacing: -5px;
        color: #ffffff;
        margin: 0 10px;
      }
    }
    &__button {
      width: 80%;
      margin-bottom: 20px;
    }
  }
}
</style>