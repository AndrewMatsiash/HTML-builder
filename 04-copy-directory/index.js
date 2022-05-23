
let fs = require('fs');
let path = require('path');

fs.readdir(path.resolve(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  let filteredFile = files.filter(element => element.isFile())


  for (let i = 0; i < filteredFile.length; i++) {
    let FileName = path.basename(filteredFile[i].name, path.extname(filteredFile[i].name))
    let expansion = path.extname(filteredFile[i].name).slice(1)
    fs.stat(path.resolve(__dirname, 'secret-folder', filteredFile[i].name), (error, stats) => {
      if (error) {
        console.log(error);
      }
      else {
        let result = [FileName, expansion, stats.size.toString()]
        result = result.join('-')
        console.log(result);
      }
    })
  }
})

