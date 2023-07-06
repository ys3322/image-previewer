<template>
  <div>
    <image-container v-for="item in data" :item="item"></image-container>
  </div>
</template>

<script lang="ts" setup>
import type { IImageData } from "./types";
import ImageContainer from "./ImageContainer.vue";

const props = defineProps<{
  data: IImageData[];
}>();

console.log("props=>", props);
</script>

<style lang="scss" scoped></style>
