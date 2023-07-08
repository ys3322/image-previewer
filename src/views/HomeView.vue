<template>
  <div class="home">
    <image-previewer :data="data"></image-previewer>
    <hr />
    <hr />
    <button @click="deleteImage">删除第二张图片</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ImagePreviewer from "../components/image-previewer/index.vue";

const data = ref([
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
]);

const deleteImage = () => {
  data.value.splice(1, 1);
};

// === 操作非响应数据，并不会使得组件内部数据实时刷新 ===

/* const data = [
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
 */

/* const deleteImage = () => {
  data.splice(1, 1);
}; */
</script>

<style lang="scss" scoped></style>
