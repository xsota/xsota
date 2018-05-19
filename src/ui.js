'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/xsota'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/xsota'
  },
  {
    label: 'Blog',
    url: 'https://blog.xsota.com'
  },
  {
    label: 'Quit',
    action() {
      process.exit();
    }
  }
];

module.exports = () => (
<div>
  <br/>
  <div>
    <Text>I’m xsota.</Text>
  </div>
  <br/>
  <SelectInput items={items} onSelect={handleSelect}/>
</div>
);
