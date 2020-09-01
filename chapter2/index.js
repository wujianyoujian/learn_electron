const { ipcRenderer } = require('electron')

let $btnSendMsg1 = document.querySelector('#sendMsg1')
let $makeWindow = document.querySelector('#makeWindow')

$btnSendMsg1.onclick = function () {
    ipcRenderer.send('sendMsg1', { name: 'param1'}, { name: 'param2' })
}

$makeWindow.onclick = function () {
    ipcRenderer.send('makeWindow')
}

ipcRenderer.on('sendMsg_Render', (event, param1, param2) => {
    console.log(param1)
    console.log(param2)
    console.log(event)
})
