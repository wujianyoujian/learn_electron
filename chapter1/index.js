const { remote } = require('electron')
const mainModel = remote.require('./mainModel')

let btnOpenDevTool = document.querySelector('#OpenDevTool')
let btnOpenNewWindow = document.querySelector('#OpenNewWindow')
let btnOpenNewWindow2 = document.querySelector('#OpenNewWindow2')
let win = null
let width = 800
let height = 600

btnOpenDevTool.onclick = function () {
    remote.getCurrentWindow().webContents.openDevTools()
}

btnOpenNewWindow.onclick = function () {
    win = new remote.BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    win.loadFile('./index.html')
}

btnOpenNewWindow2.onclick = function () {
    mainModel.makeWindow()
}
