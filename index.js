/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const fs = require('fs')
const tinify = require('tinify')
const paths = require("path")

const pluginHandler = async options => {
  const { data, filePath, config } = options;
  if (!data.code) return null
  tinify.key = data.code.tinyKey
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }
  const dir = fs.readdirSync(`${filePath}/images`);
  for (const file of dir) {
    if (/((\.png)|(\.jpg))$/.test(file)) {
      const source = tinify.fromFile(`${filePath}/images/${file}`);
      await source.toFile(`${filePath}/images/${file}`);
    }
  }
  // body...
  let result = {};
  return { data, filePath, config, result };
};

module.exports = (...args) => {
  return pluginHandler(...args).catch(err => {
    console.log(err);
  });
};
