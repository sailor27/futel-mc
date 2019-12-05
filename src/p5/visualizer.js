
export default function visualizer(p, fft) {
  //draw loop for visualizer
  p.draw = () => {
    p.getAudioContext().resume();

    p.stroke(70, 48, 235); // darker purple

    const spectrum = fft.analyze();

      for (var i = 0; i < spectrum.length; i++) {
        const amp  = spectrum[i];

        let x = p.map(i, 0, spectrum.length, 0, p.width);
        let h = -p.height + p.map(amp, 0, 255, p.height, 0);

        p.rect(x, p.height, p.width / spectrum.length, h);
      }
    }
}
//TODO: fix visualizer trace
