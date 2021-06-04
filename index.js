/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const fs = require('fs')
const tinify = require('tinify')
const imgExport = require('@imgcook/plugin-images')


const pluginHandler = async options => {
  const { data, filePath, config } = options;
  if (!data.code) return null
  tinify.key = data.code.tinyKey || '2nhHw7JwXKCWM03Wx9xB4nsc2f9gMk6f'
  const panelDisplay = data.code.panelDisplay || [];
  const imagePath = `${filePath}/images`
  const tinyImagePath = `${filePath}/tinyImages`
  if (!fs.existsSync(imagePath)) {
    fs.mkdirSync(imagePath);
  }
  const dir = fs.readdirSync(imagePath);
  let imgObj = [];
  for (const file of dir) {
    if (/((\.png)|(\.jpg))$/.test(file)) {
      if (!fs.existsSync(tinyImagePath)) {
        fs.mkdirSync(tinyImagePath);
      }
      const source = tinify.fromFile(`${imagePath}/${file}`);
      await source.toFile(`${tinyImagePath}/${file}`);
      imgObj.push({
        imgPath: `./image/${file}`,
        tinyImgPath: `./tinyImages/${file}`
      })
    }
  }
  fs.writeFileSync(`${tinyImagePath}/.imgrc`, JSON.stringify(imgObj), 'utf8');

  for (const item of panelDisplay) {
    let fileValue = item.panelValue;
    for (const imgData of imgObj) {
      const reg = new RegExp(imgData.imgPath, 'g');
      fileValue = fileValue.replace(reg, imgData.tinyImgPath);
    }
  }
  // body...
  let result = {};
  return { data, filePath, config, result };
};

module.exports = async (...args) => {
  const data = await imgExport(...args)
  return pluginHandler(data).catch(err => {
    console.log(err);
  });
};
