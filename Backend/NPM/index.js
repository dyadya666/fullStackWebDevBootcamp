// import generateName from 'sillyname';
// var sillyName = generateName();

// console.log(`My silly name is ${sillyName}.`);

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';


inquirer
  .prompt([
    {"message": "Type the URL of the QR code you want to generate:", "name": "URL"},
  ])
  .then((answers) => {
    const url = answers.URL;

    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_img.png'));
    
    fs.writeFile('qr_img.txt', url, (err) => {
      if (err) throw err;
      console.log('The URL has been saved to qr_img.txt!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });