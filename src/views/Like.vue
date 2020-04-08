<template>
  <div class="Like">
    <Header :isFixed="isFixed" />
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
}
</script>