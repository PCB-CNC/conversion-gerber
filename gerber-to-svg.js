import fs from 'node:fs/promises'
import {toHtml} from 'hast-util-to-html'

import {parse} from '@tracespace/parser'
import {plot} from '@tracespace/plotter'
import {render} from '@tracespace/renderer'
const archiveName = process.argv[2]; // Get the archive name from the command line argument
const gerberFile = `gerber_files/${archiveName}.DRL`;
const svgFile = `svg_files/${archiveName}.svg`;
const gerberContents = await fs.readFile(gerberFile, 'utf-8')
const syntaxTree = parse(gerberContents)
const imageTree = plot(syntaxTree)
const image = render(imageTree)

await fs.writeFile(svgFile, toHtml(image), 'utf-8')