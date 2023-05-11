const axios = require('axios');
//"start:dev": "npx standard --fix && concurrently \"npx standard --fix\" \"nodemon ./dist/index.js\"",
const getFileInfo = async (fileName) => {
    try {
        const response = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer aSuperSecretKey',
            },
        });

        if (response.status !== 200) return undefined;

        const fileContent = response.data;
        const fileLines = fileContent.split('\n');

        const lines = [];
        for (let i = 0; i < fileLines.length; i++) {
            const lineData = fileLines[i].split(',');
            const [file, text, number, hex] = lineData;
            if (
                lineData.length !== 4 ||
                file !== fileName ||
                text === 0 ||
                !/^\d+$/.test(number) ||
                hex.length !== 32
            ) {
                continue;
            }
            lines.push({
                text,
                number: Number(number),
                hex,
            });
        }

        return { file: fileName, lines };
    } catch (error) {
        return undefined;
    }
};

const getFiles = async () => {
    try {
        const response = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer aSuperSecretKey',
            },
        });

        if (response.status !== 200 || !response.data?.files || !Array.isArray(response.data.files)) return [];

        return response.data.files;
    } catch (error) {
        console.log(error);
        return [];
    }
};

module.exports = { getFileInfo, getFiles };
