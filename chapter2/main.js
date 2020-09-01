const { app, BrowserWindow } = require('electron')

let win = null

function createWindow () {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    win.loadFile('./index.html')
    require('./ipcMain')
}

app.on('ready', createWindow)

app.on('activate', () => {
    if (BrowserWindow.getAllWindows.length === 0) {
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})