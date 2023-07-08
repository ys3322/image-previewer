<template>
  <div class="image-container">
    <img
      :src="`/src/assets/imgs/${item.image}`"
      alt=""
      :style="{
        transform: `rotate(${item.rotate}deg) scale(${item.scale})`,
      }"
      draggable="false"
    />
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
  float: left;
  width: 440px;
  height: 252px;
  background-color: #bfc;
  border: 1px solid #999;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
}
</style>
