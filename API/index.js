const express = require('express');
const { getFileInfo, getFiles } = require('./src/services/file');

const app = express();
const cors = require('cors');
const port = 3000;

// Habilitar CORS para todas las rutas
app.use(cors());

app.get('/files/list', async (req, res) => {
    try {
        res.json(await getFiles());
    } catch (error) {
        console.log(error);
        res.status(500).json({ code: 'API-500', message: 'Internal Server Error', details: '', status: 500 });
    }
});

app.get('/files/data', async (req, res) => {
    try {
        const { fileName } = req.query;

        const filesList = fileName ? [fileName] : await getFiles();

        const response = [];

        for (let i = 0; i < filesList.length; i++) {
            const fileInfo = await getFileInfo(filesList[i]);
            fileInfo && response.push(fileInfo);
        }

        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ code: 'API-500', message: 'Internal Server Error', details: '', status: 500 });
    }
});

const server = app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = { server, app };
