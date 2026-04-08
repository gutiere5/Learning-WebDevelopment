import { writeFile, readFile } from 'node:fs';

writeFile('./message.txt', 'Hello From Index', (error) => {
  if (error) throw error;
  console.log('File written succesfully');
});

readFile('./message.txt', 'utf-8', (error, data) => {
  if (error) throw error;
  console.log(data);
});
