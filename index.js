/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const fs = require('fs')
const tinify = require('tinify')
const {
  unique,
  downloadImg
} = require('@imgcook/cli-utils');

const pluginHandler = async options => {
  let imgArr = [];
  const {
    data,
    filePath,
    config
  } = options;
  if (!data.code) return null
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }
  tinify.key = data.code.tinyKey || '2nhHw7JwXKCWM03Wx9xB4nsc2f9gMk6f'
  const panelDisplay = data.code.panelDisplay || [];
  const moduleData = data.moduleData;
  let index = 0;
  for (const item of panelDisplay) {
    let fileValue = item.panelValue;
    imgArr = fileValue.match(
      /(https?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|](\.png|\.jpg)/g
    );
    if (imgArr && imgArr.length > 0) {
      imgArr = unique(imgArr);
      const imgPath = `${filePath}/images`;
      const tinyImgPath = `${filePath}/tinyImages`
      let imgObj = [];
      const imgrc = `${imgPath}/.imgrc`;
      if (fs.existsSync(imgrc)) {
        let imgConfig = fs.readFileSync(imgrc, 'utf8');
        imgObj = JSON.parse(imgConfig) || [];
      }
      for (let idx = 0; idx < imgArr.length; idx++) {
        if (!fs.existsSync(imgPath)) {
          fs.mkdirSync(imgPath);
        }
        let suffix = imgArr[idx].split('.');
        suffix = suffix[suffix.length - 1];
        const imgName = `img_${moduleData.id}_${index}_${idx}.${suffix}`;
        const imgPathItem = `${imgPath}/${imgName}`;
        let curImgObj = {};
        for (const item of imgObj) {
          if (item.imgUrl === imgArr[idx]) {
            curImgObj = item;
          }
        }
        const reg = new RegExp(imgArr[idx], 'g');
        if (!curImgObj.imgPath) {
          await downloadImg(imgArr[idx], imgPathItem);
          if (!fs.existsSync(tinyImgPath)) {
            fs.mkdirSync(tinyImgPath);
          }
          const source = tinify.fromFile(imgPathItem);
          await source.toFile(`${tinyImgPath}/${imgName}`);
          let newImgUrl = '';
          fileValue = fileValue.replace(reg, `./tinyImages/${imgName}`);
          if(item.panelType === 'ts') {
            fileValue = fileValue.replace(new RegExp(`'./tinyImages/${imgName}'`, 'g'), `require('./tinyImages/${imgName}')`);
          }
          imgObj.push({
            newImgUrl,
            imgUrl: imgArr[idx],
            imgPath: `./images/${imgName}`,
            tinyImgPath: `./tinyImages/${imgName}`
          });
        } else {
          fileValue = fileValue.replace(reg, curImgObj.tinyImgPath);
          if(item.panelType === 'ts') {
            fileValue = fileValue.replace(new RegExp(`'${curImgObj.tinyImgPath}'`, 'g'), `require('./tinyImages/${imgName}')`);
          }
        }
      }
      if (imgObj.length > 0) {
        fs.writeFileSync(imgrc, JSON.stringify(imgObj), 'utf8');
      }
    }
    item.panelValue = fileValue;
    index++;
  }

  return {
    data,
    filePath,
    config
  };
};

module.exports = async (...args) => {
  return pluginHandler(...args).catch(err => {
    console.log(err);
  });
};
