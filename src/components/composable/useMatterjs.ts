import Matter from "matter-js";

export default () => {
  const matter = () => {
    // module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse;

    // create an engine
    const engine = Engine.create();

    // create a renderer
    const render = Render.create({
      element: document.getElementById("matterCanvas") || document.body,
      engine,
      options: {
        // width: 1600,
        // height: 800,
        wireframes: false,
      },
    });

    // create two boxes and a ground
    //x, y, width, height, color
    const boxA = Bodies.rectangle(400, 200, 80, 80, {
      render: {
        fillStyle: "#e9e0c9",
        strokeStyle: "#fffdd2",
        lineWidth: 10,
      },
    });
    const boxB = Bodies.rectangle(450, 50, 80, 80);
    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // mouse click
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        render: {
          visible: false,
        },
      },
    });
    render.mouse = mouse;

    // stack
    const stack = Matter.Composites.stack(
      200,
      200,
      4,
      4,
      0,
      0,
      (x: number, y: number) => {
        let sides = Math.round(Matter.Common.random(2, 8));
        return Matter.Bodies.polygon(x, y, sides, Matter.Common.random(20, 50));
        // return Matter.Bodies.rectangle(x, y, 80, 80);
      }
    );

    // add all of the bodies to the world
    Composite.add(engine.world, [stack, boxA, boxB, ground, mouseConstraint]);

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  };
  return {
    matter,
  };
};
