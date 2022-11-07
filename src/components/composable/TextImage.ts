import P5 from "p5";

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

export { density, createP5 };
