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
    image: "image1.jpg",
    rotate: 0,
    scale: 1,
  },
  {
    id: 2,
    image: "image2.jpg",
    rotate: 0,
    scale: 1,
  },
  {
    id: 3,
    image: "image3.jpg",
    rotate: 0,
    scale: 1,
  },
  {
    id: 4,
    image: "image4.jpg",
    rotate: 0,
    scale: 1,
  },
];
</script>

<style lang="scss" scoped></style>
