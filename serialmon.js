// const SerialPort = require('serialport');
// const Readline = require('@serialport/parser-readline');
// const qParse = require('./queryParser.js');
// const port = new SerialPort('/dev/cu.usbmodem14141', { baudRate: 9600 });
// const parser = port.pipe(new Readline({ delimiter: '\n' }));

// // Read the port data
// port.on("open", () => {
//   //console.log('serial port open');
// });
// parser.on('data', data =>{
//   console.log(data);
//   values = data.split(';');
//   console.log(values[0]);
//   console.log(values[1]);
  
//   qParse(values[0],values[1]);
  
// });


const qParse = require('./queryParser.js');
let temp,throughtput;

setInterval(function(){
  temp= Math.floor(Math.random() * (172 - 103)) + 103;
  throughtput=Math.floor(Math.random() * (65 - 51)) + 51;
  console.log("&&&&&&&&&&&");
  console.log(temp,throughtput);
  console.log("&&&&&&&&&&&");
  qParse(temp,throughtput);
}, 2000);




