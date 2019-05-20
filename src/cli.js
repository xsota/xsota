#!/usr/bin/env node
'use strict';
const path = require('path');
const meow = require('meow');
const termImg = require('term-img')
const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const {h, render} = require('ink');

const ui = importJsx('./ui');

meow(`
	Usage
	  $ xsota
`);

const fallback = async () => {
  const image = await terminalImage.file(path.join(__dirname, 'xsota.jpg'));
  console.log(image);
}

termImg(path.join(__dirname, 'xsota.jpg'), { fallback });

render(h(ui));
