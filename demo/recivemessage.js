const { ipcRenderer } = require('electron');
let clipboard = {};
ipcRenderer.on('clipboard-receive', (event, data) => {
    document.getElementById('id2').innerHTML = data;
});