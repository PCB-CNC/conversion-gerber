import fs from 'node:fs/promises'
import {read, plot, renderLayers, renderBoard} from '@tracespace/core'
import { toHtml } from 'hast-util-to-html';

const files = [
  'all_files/Drill_PTH_Through_Via.DRL',
  'all_files/Drill_PTH_Through.DRL',
  'all_files/Gerber_BoardOutlineLayer.GKO',
  'all_files/Gerber_BottomLayer.GBL',
  'all_files/Gerber_BottomSolderMaskLayer.GBS',
  'all_files/Gerber_TopLayer.GTL',
  'all_files/Gerber_TopSilkscreenLayer.GTO',
  'all_files/Gerber_TopSolderMaskLayer.GTS',
]

const readResult = await read(files)
const plotResult = plot(readResult)
const renderLayersResult = renderLayers(plotResult)
console.log("renderLayersResult ",renderLayersResult)
const rendersById = renderLayersResult.rendersById;
const elements = Object.values(rendersById);
// array of elements
for (const element of elements) {
  console.log(element);
  //change currentColor to white
  element.properties.style = "fill: purple; stroke: black; stroke-width: 0.1mm; fill-opacity: 1"
}
//size of array
console.log(elements[5])
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
  fs.writeFile('test2.svg', toHtml(elements[1])),
  fs.writeFile('test3.svg', toHtml(elements[2])),
  fs.writeFile('test4.svg', toHtml(elements[3])),
  fs.writeFile('test5.svg', toHtml(elements[4])),
  fs.writeFile('test6.svg', toHtml(elements[5])),
  fs.writeFile('test7.svg', toHtml(elements[6])),
  fs.writeFile('test8.svg', toHtml(elements[7])),
  fs.writeFile('top.svg', toHtml(renderBoardResult.top)),
  fs.writeFile('bottom.svg', toHtml(renderBoardResult.bottom)),
])

