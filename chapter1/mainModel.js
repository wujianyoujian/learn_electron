let { BrowserWindow } = require('electron')

exports.makeWindow = () => {
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('./index.html')
    return win
}
