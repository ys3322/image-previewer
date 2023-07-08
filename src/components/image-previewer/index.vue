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

    <!-- 控制条 -->
    <control-bar
      @handle-rotate="handleRotate"
      @handle-zoom="handleZoom"
    ></control-bar>

    <!-- 设置容纳所有图片的最大宽度，并根据当前的index，控制左右移动 -->
    <div
      class="slider"
      :style="{
        width: sliderWidth + 'px',
        transform: `translateX(-${currentIndex * 440}px)`,
      }"
    >
      <image-container v-for="item in imageData" :item="item">
      </image-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ARROW_DIRECTION, ZOOM, type IImageData } from "./types";
import ImageContainer from "./ImageContainer.vue";
import Indicator from "./Indicator.vue";
import ControlBar from "./ControlBar.vue";
import { useImageData, useSliderIndex } from "./hooks";

const props = defineProps<{
  data: IImageData[]; // 传递进来的props，不可以修改。下面通过useImageDate变成响应式数据
}>();

console.log("props=>", props);

const imgLength = props.data.length;
// 所有图片平铺所占用的宽度
const sliderWidth = imgLength * 440;

// ============== 初始化hooks ==============
const {
  imageData,
  setImageItemRotate,
  setImageItemZoom,
  resetImageItemStatus,
} = useImageData(props.data);

const { currentIndex, setCurrentIndexByDir } = useSliderIndex(imgLength);

// ============== slider左右点击事件处理 ==============
const handleImageSlide = (dir: ARROW_DIRECTION) => {
  // 切换之前重置前一个状态
  resetImageItemStatus(currentIndex.value);

  setCurrentIndexByDir(dir);
  console.log("dir,currentIndex:", dir, currentIndex.value);
};

// ============== 控制条事件处理 ==============
const handleRotate = (rotate: ARROW_DIRECTION) => {
  setImageItemRotate(currentIndex.value, rotate);
};

const handleZoom = (zoom: ZOOM) => {
  setImageItemZoom(currentIndex.value, zoom);
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
