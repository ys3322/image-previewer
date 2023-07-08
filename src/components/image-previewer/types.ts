export interface IImageData {
  id: Number;
  image: String;
  rotate: Number;
  scale: Number;
}
// 左右方向枚举类型
export enum ARROW_DIRECTION {
  LEFT = "left",
  RIGHT = "right",
}
export enum ZOOM {
  OUT = "out",
  IN = "in",
}
