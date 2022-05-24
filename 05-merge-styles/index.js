let fs = require('fs');
let path = require('path');

const projectDistStyleCss = path.join(__dirname, 'project-dist', 'bundle.css')

const writeStream = fs.createWriteStream(projectDistStyleCss)

writeStream.on('data', (chunk) => {
  if (err) throw err;
})


fs.readdir(path.resolve(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
  if (err) throw err; // не прочитать содержимое папки

  let filsFilter = files.filter(element => element.isFile())
  let filterFileExpansion = filsFilter.filter((el) => path.extname(el.name) === '.css')

  for (let i = 0; i < filterFileExpansion.length; i++) {

    let readFile = fs.createReadStream(path.resolve(__dirname, 'styles', files[i].name))

    readFile.on('data', (chunk) => {
      if (err) throw err;
      writeStream.write(chunk)
    })

  }

});