const electron = require('electron');
const app = electron.app;
const { ipcMain } = require('electron');


const data = "waal";
app.on('ready', function () {
  const mainWindow = new electron.BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/electron-tabs.html');
  mainWindow.on('ready-to-show', function () {
    mainWindow.show();
    mainWindow.focus();
    mainWindow.webContents.send('ping', 'whoooooooh!')
  });
  ipcMain.on('clipboard-send', (event, json) => {
    mainWindow.forEach(window => {
      window.send('clipboard-receive', json);
    });
  });
});
