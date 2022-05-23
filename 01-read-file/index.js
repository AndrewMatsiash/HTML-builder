const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, 'text.txt'))

readStream.on('data', (chunk, err) => {
  if (err) throw err;
  console.log(chunk.toString());
})


