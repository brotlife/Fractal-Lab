// main.js
// Fractal Lab client v1.0 27/12/25
// created by Holden Burke

import { app, BrowserWindow, protocol, session } from "electron";
import path from "path";
process.env.DATABASE_URL = process.env.DATABASE_URL || "postgres://postgres:crypt0graphyi@localhost:5432/fractal_db";
process.env.SESSION_SECRET = process.env.SESSION_SECRET || "FractalLab2025SecretKey";
process.env.IS_ELECTRON = "true";
process.env.NODE_ENV = "production";
if (!process.env.SESSION_SECRET) {app.quit()};
let mainWindow;
async function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 900,
    title: "Fractal Lab",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
try {
  	await mainWindow.loadURL("http://brot.life");
} 	catch (e) {
	const indexPath = path.join(__dirname, "client", "src", "404.html");
	await mainWindow.loadFile(indexPath);}}
app.whenReady().then(async () => {await createMainWindow();}).catch((err) => {app.quit()});
app.on("window-all-closed", () => {if (process.platform !== "darwin") {app.quit();}});