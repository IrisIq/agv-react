const { app, BrowserWindow } = require('electron');
var path = require('path');

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // mainWindow.loadURL('http://localhost:8000/');
  win.loadFile(path.join(__dirname, './dist/index.html'));

  mainWindow.webContents.openDevTools();
  //  mainWindow.loadFile('index.html')

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
