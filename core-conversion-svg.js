import fs from 'node:fs/promises'
import {read, plot, renderLayers, renderBoard} from '@tracespace/core'
import { toHtml } from 'hast-util-to-html';
import svgcode from 'svgcode';

const files = [
  'all_files/Gerber_BottomLayer.GBL',
]

const readResult = await read(files)
const plotResult = plot(readResult)
const renderLayersResult = renderLayers(plotResult)
const rendersById = renderLayersResult.rendersById;
const elements = Object.values(rendersById);
// array of elements
for (const element of elements) {
  //change currentColor to white
  element.properties.style = "fill: white; stroke: black; stroke-width: 0.1mm; fill-opacity: 1"
  element.children.map((child,index)=>{
    if(child.tagName==="rect" || child.tagName==="circle"){
      child.properties.fill="black";
    }
    if(index==0){
      child.properties.fill="black";
    }
  });
}
//size of array
// console.log("size of array ",elements.length)
const renderBoardResult = renderBoard(renderLayersResult)
renderBoardResult.top.properties.style = "fill: purple; stroke: black; stroke-width: 0.1mm; fill-opacity: 1"
// console.log("final ",renderBoardResult)
// cast renderBoardResult to string

// get first element of array rendersById

await Promise.all([
  // fs.writeFile('test.svg', toHtml(renderLayersResult.rendersById[0])),
  // test first element of array
  fs.writeFile('test1.svg', toHtml(elements[0])),
  fs.writeFile('top.svg', toHtml(renderBoardResult.top)),
  fs.writeFile('bottom.svg', toHtml(renderBoardResult.bottom)),
])

const gcode = svgcode()
.loadFile("test1.svg")
.generateGcode()
.getGcode();

fs.writeFile("test1.gcode",gcode);