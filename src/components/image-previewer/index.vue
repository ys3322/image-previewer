<template>
  <div class="image-previewer">
    <!-- slider设置容纳所有图片的最大宽度 -->
    <div class="slider" :style="{ width: sliderWidth + 'px' }">
      <image-container v-for="item in data" :item="item"> </image-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IImageData } from "./types";
import ImageContainer from "./ImageContainer.vue";

const props = defineProps<{
  data: IImageData[];
}>();

console.log("props=>", props);

const imgLength = props.data.length;
// 所有图片平铺所占用的宽度
const sliderWidth = imgLength * 440;
</script>

<style lang="scss" scoped>
.image-previewer {
  position: relative;
  width: 440px;
  height: 252px;
  overflow: hidden;
  .slider {
    // TODO: 为什么这里给图片外面的slider盒子设置了absolute，该盒子就有高度了
    // 文档流没学明白？
    position: absolute;
    transition: transform 0.3s;
  }
}
</style>
