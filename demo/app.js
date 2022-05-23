const electron = require("electron");
const app = electron.app;

app.on("ready", function () {
  const mainWindow = new electron.BrowserWindow({
    webPreferences: {
      webviewTag: true
    }
  });
  mainWindow.loadURL("file://" + __dirname + "/electron-tabs.html");
  mainWindow.on("ready-to-show", function () {
    mainWindow.show();
    mainWindow.focus();
  });
});
