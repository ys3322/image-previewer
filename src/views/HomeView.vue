<template>
  <div>
    <image-previewer :data="data"></image-previewer>
  </div>
</template>

<script lang="ts" setup>
import ImagePreviewer from "../components/image-previewer/index.vue";

const data = [
  {
    id: 1,
    image: "1.jpeg",
    rotate: 0,
    scale: 1,
  },
  {
    id: 2,
    image: "2.jpeg",
    rotate: 0,
    scale: 1,
  },
  {
    id: 3,
    image: "3.jpeg",
    rotate: 0,
    scale: 1,
  },
  {
    id: 4,
    image: "4.jpeg",
    rotate: 0,
    scale: 1,
  },
];
</script>

<style lang="scss" scoped></style>
