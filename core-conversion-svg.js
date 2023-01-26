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
console.log(renderLayersResult)
const renderBoardResult = renderBoard(renderLayersResult)
console.log("final ",renderBoardResult)
// cast renderBoardResult to string


await Promise.all([
  fs.writeFile('top.svg', toHtml(renderBoardResult.top)),
  fs.writeFile('bottom.svg', toHtml(renderBoardResult.bottom)),
])