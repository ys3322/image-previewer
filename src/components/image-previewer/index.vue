<template>
  <div class="image-previewer">
    <!-- 两个左右的指示器 -->
    <indicator
      :dir="ARROW_DIRECTION.LEFT"
      @handle-image-slide="handleImageSlide"
    ></indicator>

    <indicator
      :dir="ARROW_DIRECTION.RIGHT"
      @handle-image-slide="handleImageSlide"
    ></indicator>

    <!-- 设置容纳所有图片的最大宽度，并根据当前的index，控制左右移动 -->
    <div
      class="slider"
      :style="{
        width: sliderWidth + 'px',
        transform: `translateX(-${currentIndex * 440}px)`,
      }"
    >
      <image-container v-for="item in data" :item="item"> </image-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ARROW_DIRECTION, type IImageData } from "./types";
import ImageContainer from "./ImageContainer.vue";
import Indicator from "./Indicator.vue";
import { useSliderIndex } from "./hooks";

const props = defineProps<{
  data: IImageData[];
}>();

console.log("props=>", props);

const imgLength = props.data.length;
// 所有图片平铺所占用的宽度
const sliderWidth = imgLength * 440;

const { currentIndex, setCurrentIndex } = useSliderIndex(imgLength);
const handleImageSlide = (dir: ARROW_DIRECTION) => {
  setCurrentIndex(dir);
  console.log("dir,currentIndex:", dir, currentIndex.value);
};
// const
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
