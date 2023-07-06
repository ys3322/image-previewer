<template>
  <div class="image-previewer">
    <indicator
      :dir="ARROW_DIRECTION.LEFT"
      @handle-image-slide="handleImageSlide"
    ></indicator>

    <indicator
      :dir="ARROW_DIRECTION.RIGHT"
      @handle-image-slide="handleImageSlide"
    ></indicator>

    <!-- slider设置容纳所有图片的最大宽度 -->
    <div class="slider" :style="{ width: sliderWidth + 'px' }">
      <image-container v-for="item in data" :item="item"> </image-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ARROW_DIRECTION, type IImageData } from "./types";
import ImageContainer from "./ImageContainer.vue";
import Indicator from "./Indicator.vue";

const props = defineProps<{
  data: IImageData[];
}>();

console.log("props=>", props);

const imgLength = props.data.length;
// 所有图片平铺所占用的宽度
const sliderWidth = imgLength * 440;

const handleImageSlide = (dir: ARROW_DIRECTION) => {
  console.log("dir:", dir);
};
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
