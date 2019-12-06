
export default function visualizer(p, fft) {
  //draw loop for visualizer
  p.draw = () => {
    p.getAudioContext().resume();

    p.stroke(70, 48, 235); // darker purple

    const spectrum = fft.analyze();
    const bandWidth = p.width/32;
    
    for (var i = 0; i < spectrum.length; i++) {
        const amp  = spectrum[i];
        // let y = p.map(amp, 0, 256, p.height, 0);
        // p.rect(i * bandWidth, y, bandWidth, p.height - y)

      // console.log(spectrum)
        let x = p.map(i, 0, spectrum.length, 0, p.width);
        let h = p.map(amp, 0, 256, p.height, 0) - p.height;
        p.rect(x, p.height, bandWidth, h);
      }
    }
}
//TODO: fix visualizer trace
