import img2gcode from "img2gcode";
import ProgressBar from "progress";

var bar = new ProgressBar("Analyze: [:bar] :percent :etas", { total: 100 });
 
img2gcode
  .start({
    // It is mm
    toolDiameter: 0.01,
    scaleAxes: 25.48178,
    deepStep: -1,
    whiteZ: 20,
    blackZ: -2,
    safeZ: 20,    
    feedrate: { work: 40, idle: 300 },
    info: "emitter",
    dirImg: 'output.png'
  })
  .on("log", (str) => {
    console.log(str);
  })
  .on("tick", (perc) => {
    bar.update(perc);
  })
  .then((data) => {
    console.log(data.config);
    console.log(data.dirgcode);
  });   