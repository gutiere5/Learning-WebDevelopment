/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream } from 'node:fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'user_input',
      message: 'Enter URL to Convert to QR Code',
    },
  ])
  .then((answers) => {
    console.log(answers);
    var url = answers.user_input;

    // Generate the QR code as a PNG stream
    var qr_png = qr.image(url, {
      type: 'png',
      parse_url: true, // Optimizes the QR for URLs
      margin: 4, // Standard white border
    });

    // Save it to a file
    qr_png.pipe(createWriteStream('my_website_qr.png'));

    console.log('Successful Conversion');
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log('Failed to convert qr code', error);
    }
  });
