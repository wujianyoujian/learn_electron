const { ipcMain, BrowserWindow } = require('electron')

ipcMain.on('sendMsg1', (event, param1, param2) => {
    // console.log(param1)
    // console.log(param2)
    // console.log(event.sender)
    BrowserWindow.getFocusedWindow().webContents.send('sendMsg_Render', param1, param2)
})

ipcMain.on('makeWindow', () => {
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    win.loadFile('./index.html')
})