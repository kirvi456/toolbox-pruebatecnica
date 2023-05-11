export const getFilesData = async (query) => {
    try {
        const response = await fetch(`http://localhost:3000/files/data?fileName=${query}`);
        const data = await response.json();

        // Llenar los vacios para avisar que no tienen lineas
        const filledData = data.map((archivo) =>
            archivo.lines.length === 0
                ? {
                      ...archivo,
                      lines: [
                          {
                              text: 'Sin lineas validas',
                              number: 'Sin lineas validas',
                              hex: 'Sin lineas validas',
                          },
                      ],
                  }
                : archivo
        );

        const files = [].concat(...filledData.map((el) => el.lines.map((line) => ({ file: el.file, ...line }))));
        return files;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const getFilesList = async () => {
    try {
        const response = await fetch(`http://localhost:3000/files/list`);
        const files = await response.json();
        return files;
    } catch (e) {
        console.error(e);
        return [];
    }
};
