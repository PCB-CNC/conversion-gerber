import fs from 'node:fs/promises'
import {toHtml} from 'hast-util-to-html'

import {parse} from '@tracespace/parser'
import {plot} from '@tracespace/plotter'
import {render} from '@tracespace/renderer'
const archiveName = process.argv[2]; // Get the archive name from the command line argument
const gerberFile = `all_files/${archiveName}.GKO`;
const svgFile = `svg_files/${archiveName}.svg`;
const gerberContents = await fs.readFile(gerberFile, 'utf-8')
const syntaxTree = parse(gerberContents)
const imageTree = plot(syntaxTree)
console.log(imageTree)
const image = render(imageTree)
console.log(image)

await fs.writeFile(svgFile, toHtml(image), 'utf-8')