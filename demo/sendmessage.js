function myFunction(){
    const { ipcMain } = require('../node_modules/@electron');
    let data = document.getElementById('id2').value;
    ipcMain.send('clipboard-receive', data);
    
}