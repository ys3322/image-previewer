import { ref } from "vue";
import { ARROW_DIRECTION } from "./types";

export const useSliderIndex = (imgLength: number) => {
  const currentIndex = ref(0);

  // 根据左右方向切换当前的索引
  function setCurrentIndex(dir: ARROW_DIRECTION) {
    const index = currentIndex.value;

    switch (dir) {
      case ARROW_DIRECTION.LEFT:
        currentIndex.value = index <= 0 ? imgLength - 1 : index - 1;
        break;
      case ARROW_DIRECTION.RIGHT:
        currentIndex.value = index >= imgLength - 1 ? 0 : index + 1;
        break;

      default:
        break;
    }
  }

  return {
    currentIndex,
    setCurrentIndex,
  };
};
