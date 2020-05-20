<template>
  <div class="loading" v-if="pickSongs.length === 0">
    <hollow-dots-spinner :animation-duration="1000" :dot-size="20" :dots-num="3" color="#ffffff" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { HollowDotsSpinner } from "epic-spinners";

@Component({
  components: {
    HollowDotsSpinner
  }
})
export default class Loading extends Vue {
  get pickSongs() {
    return this.$store.state.pickSongs;
  }
}
</script>

<style lang="scss" scoped>
.loading {
  background-color: #202020;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 680px) {
  .loading {
    height: 490px;
  }
}
</style>