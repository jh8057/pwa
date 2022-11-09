import P5 from "p5";
import { reactive, toRefs } from "vue";
import sample from "@/assets/img/sample.jpeg";
export default () => {
  const state = reactive({
    p5: {},
  });
  const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

  const createP5 = (
    parentId: any,
    w: number,
    h: number,
    backgroundColor: string
  ) => {
    const sketch = (p: any) => {
      p.setup = () => {
        p.noLoop();
        p.createCanvas(w, h);
      };

      p.draw = () => p.background(backgroundColor);
    };

    return new P5(sketch, parentId);
  };

  const draw = (p5: any) => {
    p5.loadImage(sample, (img: any) => {
      p5.image(img, 0, 0);
    });
  };

  return {
    ...toRefs(state),
    density,
    createP5,
    draw,
  };
};
