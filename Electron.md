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
```javascript
// 主进程给渲染进程发送信息
// const { ipcMain } = require('electron')
// 在主进程里面通过拿到的窗口对象的webC  ontents来发送
win.webContents.send('')
```
* 这些方法都是异步操作不会使主进程发生堵塞
* 如果多个渲染窗口向主进程发送消息，那么主进程怎么知道发过来的是哪一个渲染进程的呢
```javascript
ipcMain.on('send', (event) => {
    event.sender //表示 webcontents
})`
```
### 自定义窗口标题栏

#### remote
* 渲染进程使用主进程的方法通过remote方法

### 在electron中引入vue
* 安装
> `yarn global add @vue/cli`

* 添加到环境变量中
> 查看目录 `yarn global dir`
> 将node_modules/.bin下的当前绝对路径添加到path当中

* 创建环境
`vue create <name>`

* 在electron中引入vue,其实使用`electron-builder`插件的形式, 所以要先创建vue项目, 再引入,进入到项目当中
`vue add electron-bundile`

* 运行
`yarn electron:serve`
#### 注意
* 出现，再试几次的错误，就