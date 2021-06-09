module.exports = {
  "moduleData": {
    "id": 17679,
    "name": "hook",
    "cover": "https://img.alicdn.com/tfs/TB1mkjeqlr0gK0jSZFnXXbRRXXa-1404-1292.png",
  },
  "code": {
    "panelDisplay": [
      {
        "panelName": 'index.tsx',
        "panelValue": "import React, { Component } from 'react';\r\n" +
          '\r\n' +
          "import './style.scss';\r\n" +
          '\r\n' +
          'const print = function(value) {\r\n' +
          '  console.log(value);\r\n' +
          '};\r\n' +
          'class Page extends Component {\r\n' +
          '  render() {\r\n' +
          '    return (\r\n' +
          '      <div styleName="page" data={{}}>\r\n' +
          '        <div styleName="item-long-wrapper">\r\n' +
          '          <img\r\n' +
          '            styleName="item-long"\r\n' +
          "            src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9b9d3900c41d11ebbbfc6373d4af5eb4.png'}\r\n" +
          '          />\r\n' +
          '        </div>\r\n' +
          '        <div styleName="entry-pic-wrapper">\r\n' +
          '          <img\r\n' +
          '            styleName="entry-pic"\r\n' +
          "            src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9e2a2570c41d11eb8e7fc57c5e7da027.png'}\r\n" +
          '          />\r\n' +
          '        </div>\r\n' +
          '        <div styleName="action-bg-wrapper">\r\n' +
          '          <img styleName="action-bg" src={this.props.style} />\r\n' +
          '        </div>\r\n' +
          '        <div styleName="wrapper-inner">\r\n' +
          '          {true && (\r\n' +
          '            <div styleName="group">\r\n' +
          '              {true && (\r\n' +
          '                <img\r\n' +
          '                  styleName="layer"\r\n' +
          "                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9c0f82d0c41d11eb9d538dbe64585f34.png'}\r\n" +
          '                />\r\n' +
          '              )}\r\n' +
          '              <div styleName="background-wrapper">\r\n' +
          '                <img\r\n' +
          '                  styleName="background"\r\n' +
          "                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9c66ca90c41d11eb9ac945095a953d7e.png'}\r\n" +
          '                />\r\n' +
          '                <div>\r\n' +
          '                  <span styleName="desc">嘘！这是一个秘密的行动计划</span>\r\n' +
          '                  <span styleName="detail">小雨滴老师，儿童节快到了</span>\r\n' +
          '                  <span styleName="desc-1">我们想邀请您扮演惊喜派送官</span>\r\n' +
          '                  <span styleName="detail-1">为全班学生颁发“快乐星星奖”</span>\r\n' +
          '                  <span styleName="tag">我们将在 2021.06.01 9:00</span>\r\n' +
          '                  <span styleName="desc-2">帮您将这份鼓励发给学生作为节日礼物</span>\r\n' +
          '                  <span styleName="info">给予ta们快乐和温暖</span>\r\n' +
          '                </div>\r\n' +
          '              </div>\r\n' +
          '            </div>\r\n' +
          '          )}\r\n' +
          '          {true && (\r\n' +
          '            <div styleName="primary">\r\n' +
          '              <div styleName="button-bg-wrapper">\r\n' +
          '                <img\r\n' +
          '                  styleName="button-bg"\r\n' +
          "                  src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9f4643d0c41d11eb906c0f172dc43e8c.png'}\r\n" +
          '                />\r\n' +
          '              </div>\r\n' +
          '            </div>\r\n' +
          '          )}\r\n' +
          '        </div>\r\n' +
          '      </div>\r\n' +
          '    );\r\n' +
          '  }\r\n' +
          '}\r\n' +
          'export default Page;\r\n',
        "panelType": 'ts'
      },
      {
        "panelName": 'style.scss',
        "panelValue": '.page {\n' +
          '  display: flex;\n' +
          '  position: relative;\n' +
          '  align-items: center;\n' +
          '  flex-direction: column;\n' +
          '  width: 100vw;\n' +
          '  height: 216.53vw;\n' +
          '  .item-long-wrapper {\n' +
          '    display: flex;\n' +
          '    position: absolute;\n' +
          '    top: 0;\n' +
          '    align-items: flex-start;\n' +
          '    align-self: center;\n' +
          '    flex-direction: row;\n' +
          '    justify-content: center;\n' +
          '    .item-long {\n' +
          '      width: 100vw;\n' +
          '      height: 217.87vw;\n' +
          '    }\n' +
          '  }\n' +
          '  .entry-pic-wrapper {\n' +
          '    display: flex;\n' +
          '    position: absolute;\n' +
          '    top: 0;\n' +
          '    align-items: flex-start;\n' +
          '    align-self: center;\n' +
          '    flex-direction: row;\n' +
          '    justify-content: center;\n' +
          '    .entry-pic {\n' +
          '      width: 100.27vw;\n' +
          '      height: 54.67vw;\n' +
          '    }\n' +
          '  }\n' +
          '  .action-bg-wrapper {\n' +
          '    display: flex;\n' +
          '    position: relative;\n' +
          '    align-items: flex-start;\n' +
          '    flex-direction: row;\n' +
          '    justify-content: center;\n' +
          '    margin-top: 32.8vw;\n' +
          '    .action-bg {\n' +
          '      width: 82.4vw;\n' +
          '      height: 14.93vw;\n' +
          '    }\n' +
          '  }\n' +
          '  .wrapper-inner {\n' +
          '    display: flex;\n' +
          '    flex-direction: column;\n' +
          '    align-items: flex-start;\n' +
          '    margin-top: 4.27vw;\n' +
          '    position: relative;\n' +
          '    .group {\n' +
          '      display: flex;\n' +
          '      flex-direction: row;\n' +
          '      justify-content: center;\n' +
          '      align-items: flex-start;\n' +
          '      width: 100vw;\n' +
          '      position: static;\n' +
          '      top: 0;\n' +
          '      left: 0;\n' +
          '      .layer {\n' +
          '        position: absolute;\n' +
          '        top: 0;\n' +
          '        left: 0;\n' +
          '        width: 100vw;\n' +
          '        height: 67.2vw;\n' +
          '      }\n' +
          '      .background-wrapper {\n' +
          '        display: flex;\n' +
          '        flex-direction: column;\n' +
          '        margin-top: 4.27vw;\n' +
          '        width: 82.93vw;\n' +
          '        height: 86.4vw;\n' +
          '        line-height: 6.93vw;\n' +
          '        text-align: center;\n' +
          '        position: relative;\n' +
          '        white-space: nowrap;\n' +
          '        .background {\n' +
          '          position: absolute;\n' +
          '          top: 0;\n' +
          '          align-self: center;\n' +
          '          width: 82.93vw;\n' +
          '          height: 86.4vw;\n' +
          '          line-height: NaNvw;\n' +
          '          white-space: normal;\n' +
          '        }\n' +
          '        .desc {\n' +
          '          margin-top: 12.27vw;\n' +
          '          height: 6.93vw;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 3.73vw;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 63.73vw;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .detail {\n' +
          '          margin-top: 6.67vw;\n' +
          '          height: 6.93vw;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 3.73vw;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 63.73vw;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .desc-1 {\n' +
          '          margin-top: 0.27vw;\n' +
          '          height: 6.93vw;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 3.73vw;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 63.73vw;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .detail-1 {\n' +
          '          height: 6.93vw;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 3.73vw;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 64.27vw;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .tag {\n' +
          '          margin-top: 6.93vw;\n' +
          '          height: 6.93vw;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 3.73vw;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          white-space: pre;\n' +
          '          max-width: 64.27vw;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .desc-2 {\n' +
          '          position: relative;\n' +
          '          align-self: center;\n' +
          '          max-width: 63.73vw;\n' +
          '          height: 6.93vw;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '          color: #7d0000;\n' +
          '          font-size: 3.73vw;\n' +
          '          font-weight: 400;\n' +
          '        }\n' +
          '        .info {\n' +
          '          height: 6.93vw;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 3.73vw;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 64.27vw;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '    .primary {\n' +
          '      display: flex;\n' +
          '      flex-direction: row;\n' +
          '      justify-content: center;\n' +
          '      align-items: flex-start;\n' +
          '      position: static;\n' +
          '      .button-bg-wrapper {\n' +
          '        display: flex;\n' +
          '        flex-direction: row;\n' +
          '        justify-content: center;\n' +
          '        align-items: flex-start;\n' +
          '        width: 100vw;\n' +
          '        height: 76.8vw;\n' +
          '        background-image: url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9d3dc9a0c41d11ebac087f5b49da2cb7.png);\n' +
          '        background-size: contain;\n' +
          '        .button-bg {\n' +
          '          margin-top: 34.67vw;\n' +
          '          width: 94.4vw;\n' +
          '          height: 33.87vw;\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '  }\n' +
          '}\n',
        "panelType": 'scss'
      },
      {
        "panelName": 'style_pc.scss',
        "panelValue": '.page {\n' +
          '  display: flex;\n' +
          '  position: relative;\n' +
          '  align-items: center;\n' +
          '  flex-direction: column;\n' +
          '  width: 375px;\n' +
          '  height: 812px;\n' +
          '  .item-long-wrapper {\n' +
          '    display: flex;\n' +
          '    position: absolute;\n' +
          '    top: 0;\n' +
          '    align-items: flex-start;\n' +
          '    align-self: center;\n' +
          '    flex-direction: row;\n' +
          '    justify-content: center;\n' +
          '    .item-long {\n' +
          '      width: 375px;\n' +
          '      height: 817px;\n' +
          '    }\n' +
          '  }\n' +
          '  .entry-pic-wrapper {\n' +
          '    display: flex;\n' +
          '    position: absolute;\n' +
          '    top: 0;\n' +
          '    align-items: flex-start;\n' +
          '    align-self: center;\n' +
          '    flex-direction: row;\n' +
          '    justify-content: center;\n' +
          '    .entry-pic {\n' +
          '      width: 376px;\n' +
          '      height: 205px;\n' +
          '    }\n' +
          '  }\n' +
          '  .action-bg-wrapper {\n' +
          '    display: flex;\n' +
          '    position: relative;\n' +
          '    align-items: flex-start;\n' +
          '    flex-direction: row;\n' +
          '    justify-content: center;\n' +
          '    margin-top: 123px;\n' +
          '    .action-bg {\n' +
          '      width: 309px;\n' +
          '      height: 56px;\n' +
          '    }\n' +
          '  }\n' +
          '  .wrapper-inner {\n' +
          '    display: flex;\n' +
          '    flex-direction: column;\n' +
          '    align-items: flex-start;\n' +
          '    margin-top: 16px;\n' +
          '    position: relative;\n' +
          '    .group {\n' +
          '      display: flex;\n' +
          '      flex-direction: row;\n' +
          '      justify-content: center;\n' +
          '      align-items: flex-start;\n' +
          '      width: 375px;\n' +
          '      position: static;\n' +
          '      top: 0;\n' +
          '      left: 0;\n' +
          '      .layer {\n' +
          '        position: absolute;\n' +
          '        top: 0;\n' +
          '        left: 0;\n' +
          '        width: 375px;\n' +
          '        height: 252px;\n' +
          '      }\n' +
          '      .background-wrapper {\n' +
          '        display: flex;\n' +
          '        flex-direction: column;\n' +
          '        margin-top: 16px;\n' +
          '        width: 311px;\n' +
          '        height: 324px;\n' +
          '        line-height: 26px;\n' +
          '        text-align: center;\n' +
          '        position: relative;\n' +
          '        white-space: nowrap;\n' +
          '        .background {\n' +
          '          position: absolute;\n' +
          '          top: 0;\n' +
          '          align-self: center;\n' +
          '          width: 311px;\n' +
          '          height: 324px;\n' +
          '          line-height: NaNpx;\n' +
          '          white-space: normal;\n' +
          '        }\n' +
          '        .desc {\n' +
          '          margin-top: 46px;\n' +
          '          height: 26px;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 14px;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 239px;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .detail {\n' +
          '          margin-top: 25px;\n' +
          '          height: 26px;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 14px;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 239px;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .desc-1 {\n' +
          '          margin-top: 1px;\n' +
          '          height: 26px;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 14px;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 239px;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .detail-1 {\n' +
          '          height: 26px;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 14px;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 241px;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .tag {\n' +
          '          margin-top: 26px;\n' +
          '          height: 26px;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 14px;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          white-space: pre;\n' +
          '          max-width: 241px;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '        .desc-2 {\n' +
          '          position: relative;\n' +
          '          align-self: center;\n' +
          '          max-width: 239px;\n' +
          '          height: 26px;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '          color: #7d0000;\n' +
          '          font-size: 14px;\n' +
          '          font-weight: 400;\n' +
          '        }\n' +
          '        .info {\n' +
          '          height: 26px;\n' +
          '          font-weight: 400;\n' +
          '          font-size: 14px;\n' +
          '          color: #7d0000;\n' +
          '          position: relative;\n' +
          '          max-width: 241px;\n' +
          '          overflow: hidden;\n' +
          '          text-overflow: ellipsis;\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '    .primary {\n' +
          '      display: flex;\n' +
          '      flex-direction: row;\n' +
          '      justify-content: center;\n' +
          '      align-items: flex-start;\n' +
          '      position: static;\n' +
          '      .button-bg-wrapper {\n' +
          '        display: flex;\n' +
          '        flex-direction: row;\n' +
          '        justify-content: center;\n' +
          '        align-items: flex-start;\n' +
          '        width: 375px;\n' +
          '        height: 288px;\n' +
          '        background-image: url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9d3dc9a0c41d11ebac087f5b49da2cb7.png);\n' +
          '        background-size: contain;\n' +
          '        .button-bg {\n' +
          '          margin-top: 130px;\n' +
          '          width: 354px;\n' +
          '          height: 127px;\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '  }\n' +
          '}\n',
        "panelType": "scss"
      }
    ],
    "noTemplate": true,
    "tinyKey": ""
  }
};
