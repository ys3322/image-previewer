import { ref, type Ref } from "vue";
import { ARROW_DIRECTION, ZOOM, type IImageData } from "./types";

// 操作slider当前索引值的hook
export const useSliderIndex = (imgLength: Ref) => {
  const currentIndex = ref(0);

  // 根据左右方向切换当前的索引
  function setCurrentIndexByDir(dir: ARROW_DIRECTION) {
    const index = currentIndex.value;

    switch (dir) {
      case ARROW_DIRECTION.LEFT:
        currentIndex.value = index <= 0 ? imgLength.value - 1 : index - 1;
        break;
      case ARROW_DIRECTION.RIGHT:
        currentIndex.value = index >= imgLength.value - 1 ? 0 : index + 1;
        break;

      default:
        break;
    }
  }

  return {
    currentIndex,
    setCurrentIndexByDir,
  };
};

// 操作image列表数据的hook
export const useImageData = (images: IImageData[]) => {
  const imageData = ref<IImageData[]>(images);

  const setImageItemRotate = (sliderIndex: number, dir: ARROW_DIRECTION) => {
    const imageItem = imageData.value[sliderIndex];
    const rotate = imageItem.rotate as number;

    switch (dir) {
      case ARROW_DIRECTION.LEFT:
        imageItem.rotate = rotate - 45;
        break;
      case ARROW_DIRECTION.RIGHT:
        imageItem.rotate = rotate + 45;
        break;
      default:
        break;
    }
    console.log("rotate=>rotate", imageItem.rotate);
  };
  const setImageItemZoom = (sliderIndex: number, zoom: ZOOM) => {
    const imageItem = imageData.value[sliderIndex];
    const scale = imageItem.scale as number;

    switch (zoom) {
      // 放大
      case ZOOM.IN:
        if (scale < 3) {
          imageItem.scale = scale + 0.2;
        }
        break;
      // 缩小
      case ZOOM.OUT:
        if (scale > 0.5) {
          imageItem.scale = scale - 0.2;
        }
        break;

      default:
        break;
    }
    console.log("zoom=>scale", imageItem.scale);
  };

  // 重置ImageItem状态
  const resetImageItemStatus = (sliderIndex: number) => {
    const imageItem = imageData.value[sliderIndex];
    imageItem.rotate = 0;
    imageItem.scale = 1;
  };

  return {
    imageData,
    setImageItemRotate,
    setImageItemZoom,
    resetImageItemStatus,
  };
};
