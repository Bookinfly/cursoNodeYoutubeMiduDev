const fs = require('node:fs/promises');
const path = require('node:path');
const picocolors = require('picocolors');

const folder = process.argv[2] ?? '.';

async function ls (folder) {
    let files;
    try {
        files = await fs.readdir(folder);
    } catch {
        console.error(`No se pudo leer el archivo ${filePath}`);
        process.exit();
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats
        try {
            stats = await fs.stat(filePath);//info archivo
        } catch {
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1);
        }
    
        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toDateString();
    
        return `${fileType} ${file} ${fileSize.toString()} ${fileModified}`
    
    
    })
    
    
    const filesInfo = await Promise.all(filesPromises);
    
    filesInfo.forEach(fileInfo => console.log(fileInfo));
}




ls(folder)



// fs.readdir(folder)
//     .then(files => {
//         files.forEach(file => {
//             console.log(file);
//         });
//     })


// .catch(err => {
//     if (err) {
//         console.log('Error al leer el directorio: ', err);
//         return;
//     }
//     });
