# conversion-gerber
Para fazer com que o projeto funcione, mostre o caminho dos arquivos gerber e utilize o comando "node gerber-to-svg.js 'arquivo-gerber'".

## Teste
Rode como teste o arquivo **core-conversion-svg.js**, ele ira rodar o projeto contido na pasta **all_files**
```js
node core-converter-svg.js
```

Por enquanto os arquivos svg gerados são **top.svg** e **bottom.svg**, os quais são gerados no path onde está o próprio arquivo gerador 
## Requisitos
- Node versão 19.5.0
- "@tracespace/core": "^5.0.0-alpha.0",
- "@tracespace/identify-layers": "^5.0.0-alpha.0",
- "@tracespace/parser": "^5.0.0-alpha.0",
- "@tracespace/plotter": "^5.0.0-alpha.0",
- "@tracespace/renderer": "^5.0.0-alpha.0",
- "fs.promises": "^0.1.2",
- "hast-util-to-html": "^8.0.4"
