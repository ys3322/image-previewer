<template>
  <!-- 左右的指示器 -->
  <span
    :class="['indicator', 'iconfont', `icon-arrow-${dir}`]"
    @click="handleImageSlide(dir)"
  ></span>
</template>

<script setup lang="ts">
import type { ARROW_DIRECTION } from "./types";

const emit = defineEmits<{
  handleImageSlide: [dir: ARROW_DIRECTION];
}>();

const props = defineProps<{
  dir: ARROW_DIRECTION;
}>();

const handleImageSlide = (dir: ARROW_DIRECTION) => {
  emit("handleImageSlide", dir);
};
</script>

<style lang="scss" scoped>
.indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-shadow: 1px 3px 10px #000;
  transition: text-shadow 0.3s;

  &:hover {
    text-shadow: 1px 3px 3px #000;
  }

  &.icon-arrow-left {
    left: 10px;
  }

  &.icon-arrow-right {
    right: 10px;
  }
}
</style>
