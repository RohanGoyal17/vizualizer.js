function run(identity, frequency) {
  var ctx = new AudioContext();
  var audio = document.getElementById(identity);
  var audioSrc = ctx.createMediaElementSource(audio);
  var analyser = ctx.createAnalyser();
  
  audioSrc.connect(analyser);
  
  var frequencyData = new Uint8Array(analyser.frequencyBinCount);
 
  
  function renderFrame() {
     requestAnimationFrame(renderFrame);
     
     analyser.getByteFrequencyData(frequencyData);
     
  }
  audio.start();
  renderFrame();
  return frequencyData[frequency];
};