## Electron
* 使用`yarn`进行项目模块的管理

### 依赖
#### 开发环境
* electron
> `yarn add electron --dev --platform=linux`

### 在vs code中进行调试配置g* 添加配置文件，选择`NodeJs`
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "调试",
            "type": "node",
            "request": "launch",
            "cwd": "${workspaceRoot}",
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron",
            "windows": {
                "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron.cmd"
            },
            "args": ["."],
            "outputCapture": "std"
        }
    ]
}
```

### 主要功能模块
#### `app`
* 核心应用模块
#### `BrowserWindow`
* 窗口模块
* 配置
    * `10.1.0`版本使用`electron`中的`remote`需要设置`enableRemoteModule:true` 03
        ```js
        {
            webPreferences: {
                enableRemoteModule: true
            }
        }
        ```
#### `remote`

### 通信
#### 主进程和渲染进程之间的通信
* `ipcMain`
* `ipcRender`
```javascript
// 渲染进程给主进程发送信息
const { ipcRender } = require('electron')

ipcRender.send('sendToMainMsg1', { name: '1' })

// 主进程接受信息
const { ipcMain } = require('electron')

ipcMain.on('sendToMainMsg1', (event, param1) => {
    console.log(param1) // {n ame: 1 }
})
```
> 反过来，使用主进程给渲染进程发送信息，和渲染信息接受信息是一样的，都是使用on, send
* 这些方法都是异步操作不会使主进程发生堵塞

#### remote
* 渲染进程使用主进程的方法通过remote方法