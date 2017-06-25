const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		height: 600,
		width: 800 
	});
	let url = require('url').format({
		protocol: 'file',
		slashes: true,
		pathname: require('path').join(__dirname, 'index.html')
	});
	console.log(url);
	mainWindow.loadURL(url);
});
