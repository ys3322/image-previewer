<template>
  <div class="image-container">
    <img :src="`/src/assets/imgs/${item.image}`" alt="" />
  </div>
</template>

<script setup lang="ts">
import type { IImageData } from "./types";

const props = defineProps<{
  item: IImageData;
}>();
</script>

<style lang="scss" scoped>
.image-container {
  width: 440px;
  height: 252px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
