import * as p5module from 'p5/lib/p5';
import 'p5/lib/addons/p5.sound';


export default function mic(p) {
  let mic;

  p.setup = () => {
    mic = new p5module.AudioIn();
    mic.start();
  }

  p.draw = () => {
    p.background(0);

    const micLevel = mic.getLevel();

    p.ellipse(p.width/2, p.constrain(p.height-micLevel*p.height*5, 0, p.height), 10, 10);
  }
}

