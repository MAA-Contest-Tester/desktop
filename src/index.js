const { app, BrowserWindow } = require('electron');
const { join } = require('path');

const createWindow = () => {
	const window = new BrowserWindow({
		width: 1600,
		height: 1200,
		title: 'MAA Tester',
	});
	window
		.loadURL('https://maatester.com')
		.catch((e) => window.loadFile(join(__dirname, 'error.html')));
	window.maximize();
};

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});
