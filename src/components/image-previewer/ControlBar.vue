<template>
  <div class="control-bar">
    <span
      class="iconfont icon-rotate-left"
      @click="handleRotate(ARROW_DIRECTION.LEFT)"
    ></span>
    <span
      class="iconfont icon-rotate-right"
      @click="handleRotate(ARROW_DIRECTION.RIGHT)"
    ></span>
    <span class="iconfont icon-zoom-in" @click="handleZoom(ZOOM.IN)"></span>
    <span class="iconfont icon-zoom-out" @click="handleZoom(ZOOM.OUT)"></span>
  </div>
</template>

<script setup lang="ts">
import { ARROW_DIRECTION, ZOOM } from "./types";

const emit = defineEmits<{
  handleRotate: [dir: ARROW_DIRECTION];
  handleZoom: [zoom: ZOOM];
}>();

const handleRotate = (dir: ARROW_DIRECTION) => {
  emit("handleRotate", dir);
};

const handleZoom = (zoom: ZOOM) => {
  emit("handleZoom", zoom);
};
</script>

<style scoped lang="scss">
.control-bar {
  position: absolute;
  z-index: 1;
  bottom: 10px;
  left: 50%;
  width: 180px;
  height: 30px;
  transform: translateX(-50%);
  span.iconfont {
    font-size: 24px;
    padding: 0 8px;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: #eee;
    }
  }
}
</style>
