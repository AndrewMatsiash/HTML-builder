let fs = require('fs');
let path = require('path');


fs.rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true }, (err) => {
  if (err) {
    throw err.message
  }
  fs.mkdir(path.resolve(__dirname, 'files-copy'), { recursive: true }, (err) => {
    if (err) {
      throw err
    } // не удалось создать папку
    console.log('Папка files-copy успешно создана');
  });

  fs.readdir(path.resolve(__dirname, 'files'), (err, files) => {
    if (err) throw err; // не прочитать содержимое папки
    files.forEach(
      (el) => {
        fs.readFile(path.join(__dirname, 'files-copy', el), "utf8", function (error, data) {
          if (err) {
            throw err
          }
        })
      })
    for (let i = 0; i < files.length; i++) {
      fs.copyFile(path.resolve(__dirname, 'files', files[i]), path.resolve(__dirname, 'files-copy', files[i]), err => {
        if (err) throw err; // не удалось скопировать файл
        console.log(`${files[i]} файл успешно скопирован`);
      });
    }

  });
})


