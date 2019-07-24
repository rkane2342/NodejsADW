var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');
async function run(val1,val2) {

  let connection;

  try {
    connection = await oracledb.getConnection(  {
      user : dbConfig.user,
      password : dbConfig.password,
      connectString : dbConfig.connectString
    });
    // Query for the Service
    //update LiveScheduleStatus set scheduledDTTM = '21-MAY-19' where (servicename = 'Maintenance' and refineryid = 1);
    let statuses=['3-Fair','2-Good'];
    let temp= Math.floor(Math.random() * (172 - 103)) + 103;
    let tempen= Math.floor(Math.random() * (60 - 18)) + 18;
    let vibration= Math.random() * (5 - 1) + 1;
    let humidity=Math.floor(Math.random() * (100 - 30)) + 30;
    let voltage=Math.random() * (6 - 1) + 1;
    let throughtput=Math.floor(Math.random() * (65 - 51)) + 51;
    let workinginput=4;
    let workingoutput=Math.floor(Math.random() * (4 - 2)) + 2;
    let rpm=Math.floor(Math.random() * (70 - 11)) + 11;
    let psi=Math.floor(Math.random() * (30 - 20)) + 20;
    let remainingFuel=Math.floor(Math.random() * (17 - 6)) + 6;
    let hrssincelast=Math.floor(Math.random() * (1460 - 600)) + 600;
    let hrscum=15677;
    let hrsshincestart=Math.floor(Math.random() * (44 - 30)) + 30;
    //here
    let inspectionstatus=Math.round(Math.random() * (1 - 0)) + 1;
    let timesserviced=Math.floor(Math.random() * (4 - 3)) + 3;
    let monthstonext=Math.floor(Math.random() * (7 - 3)) + 3;
    let calibrationsincelast=Math.floor(Math.random() * (34 - 33)) + 33;


    // Refinery 1
    console.log('#####################################');
    console.log(vibration.toFixed(2));
    options = {autoCommit: true};
    let refin = await connection.execute(
      'insert into livesensorstatus ( PART, TEMPRATURE , ROOMTEMPRATURE , VIBRATIONKCPM , HUMIDITY , VOLTAGE , RPM , PSI, THROUGHPUTPCT, DATE_OF_ENTRY, HRSSINCELASTSTART , HRSCUM, CALIBRATIONSINCELASTSERVICE, HRSSINCELASTMAINTENANCE, MONTHSTONEXTSERVICE, STATUSFROMSERVICE, TIMESSERVICED, WORKINGOUTPUTCHANNELS,REMAININGFUEL)  values (:PART, :TEMPRATURE , :ROOMTEMPRATURE , :VIBRATIONKCPM , :HUMIDITY , :VOLTAGE , :RPM , :PSI, :THROUGHPUTPCT, SYSDATE, :HRSSINCELASTSTART , :HRSCUM, :CALIBRATIONSINCELASTSERVICE, :HRSSINCELASTMAINTENANCE, :MONTHSTONEXTSERVICE, :STATUSFROMSERVICE, :TIMESSERVICED, :WORKINGOUTPUTCHANNELS, :REMAININGFUEL)',{PART:'Pump', TEMPRATURE:parseInt(val2) , ROOMTEMPRATURE: tempen, VIBRATIONKCPM: vibration.toFixed(2), HUMIDITY:humidity , VOLTAGE: voltage.toFixed(2) , RPM: rpm, PSI:psi, THROUGHPUTPCT:parseInt(val1), HRSSINCELASTSTART:hrsshincestart , HRSCUM:hrscum, CALIBRATIONSINCELASTSERVICE:calibrationsincelast , HRSSINCELASTMAINTENANCE:hrssincelast, MONTHSTONEXTSERVICE:monthstonext, STATUSFROMSERVICE:statuses[inspectionstatus], TIMESSERVICED:timesserviced, WORKINGOUTPUTCHANNELS:workingoutput, REMAININGFUEL:remainingFuel},options);
      // 'insert into livesensorstatus ( PART, TEMPRATURE , ROOMTEMPRATURE , VIBRATIONKCPM , HUMIDITY , VOLTAGE , RPM , PSI, THROUGHPUTPCT, DATE_OF_ENTRY, HRSSINCELASTSTART , HRSCUM, CALIBRATIONSINCELASTSERVICE, HRSSINCELASTMAINTENANCE, MONTHSTONEXTSERVICE, STATUSFROMSERVICE, TIMESSERVICED, WORKINGOUTPUTCHANNELS,REMAININGFUEL)  values (:PART, :TEMPRATURE , :ROOMTEMPRATURE , :VIBRATIONKCPM , :HUMIDITY , :VOLTAGE , :RPM , :PSI, :THROUGHPUTPCT, SYSDATE, :HRSSINCELASTSTART , :HRSCUM, :CALIBRATIONSINCELASTSERVICE, :HRSSINCELASTMAINTENANCE, :MONTHSTONEXTSERVICE, :STATUSFROMSERVICE, :TIMESSERVICED, :WORKINGOUTPUTCHANNELS, :REMAININGFUEL)',{PART:'Boiler', TEMPRATURE:parseInt(val2) , ROOMTEMPRATURE: (tempen+3), VIBRATIONKCPM: vibration.toFixed(2), HUMIDITY:humidity , VOLTAGE: voltage.toFixed(2) , RPM: rpm, PSI:psi, THROUGHPUTPCT:parseInt(val1), HRSSINCELASTSTART:hrsshincestart , HRSCUM:hrscum, CALIBRATIONSINCELASTSERVICE:calibrationsincelast , HRSSINCELASTMAINTENANCE:hrssincelast, MONTHSTONEXTSERVICE:monthstonext, STATUSFROMSERVICE:statuses[inspectionstatus], TIMESSERVICED:timesserviced, WORKINGOUTPUTCHANNELS:workingoutput, REMAININGFUEL:remainingFuel},options);
      // 'insert into livesensorstatus ( PART, TEMPRATURE , ROOMTEMPRATURE , VIBRATIONKCPM , HUMIDITY , VOLTAGE , RPM , PSI, THROUGHPUTPCT, DATE_OF_ENTRY, HRSSINCELASTSTART , HRSCUM, CALIBRATIONSINCELASTSERVICE, HRSSINCELASTMAINTENANCE, MONTHSTONEXTSERVICE, STATUSFROMSERVICE, TIMESSERVICED, WORKINGOUTPUTCHANNELS,REMAININGFUEL)  values (:PART, :TEMPRATURE , :ROOMTEMPRATURE , :VIBRATIONKCPM , :HUMIDITY , :VOLTAGE , :RPM , :PSI, :THROUGHPUTPCT, SYSDATE, :HRSSINCELASTSTART , :HRSCUM, :CALIBRATIONSINCELASTSERVICE, :HRSSINCELASTMAINTENANCE, :MONTHSTONEXTSERVICE, :STATUSFROMSERVICE, :TIMESSERVICED, :WORKINGOUTPUTCHANNELS, :REMAININGFUEL)',{PART:'Desalter', TEMPRATURE:parseInt(val2) , ROOMTEMPRATURE: (tempen+5), VIBRATIONKCPM: vibration.toFixed(2), HUMIDITY:humidity , VOLTAGE: voltage.toFixed(2) , RPM: rpm, PSI:psi, THROUGHPUTPCT:parseInt(val1), HRSSINCELASTSTART:hrsshincestart , HRSCUM:hrscum, CALIBRATIONSINCELASTSERVICE:calibrationsincelast , HRSSINCELASTMAINTENANCE:hrssincelast, MONTHSTONEXTSERVICE:monthstonext, STATUSFROMSERVICE:statuses[inspectionstatus], TIMESSERVICED:timesserviced, WORKINGOUTPUTCHANNELS:workingoutput, REMAININGFUEL:remainingFuel},options);
      // 'insert into livesensorstatus ( PART, TEMPRATURE , ROOMTEMPRATURE , VIBRATIONKCPM , HUMIDITY , VOLTAGE , RPM , PSI, THROUGHPUTPCT, DATE_OF_ENTRY, HRSSINCELASTSTART , HRSCUM, CALIBRATIONSINCELASTSERVICE, HRSSINCELASTMAINTENANCE, MONTHSTONEXTSERVICE, STATUSFROMSERVICE, TIMESSERVICED, WORKINGOUTPUTCHANNELS,REMAININGFUEL)  values (:PART, :TEMPRATURE , :ROOMTEMPRATURE , :VIBRATIONKCPM , :HUMIDITY , :VOLTAGE , :RPM , :PSI, :THROUGHPUTPCT, SYSDATE, :HRSSINCELASTSTART , :HRSCUM, :CALIBRATIONSINCELASTSERVICE, :HRSSINCELASTMAINTENANCE, :MONTHSTONEXTSERVICE, :STATUSFROMSERVICE, :TIMESSERVICED, :WORKINGOUTPUTCHANNELS, :REMAININGFUEL)',{PART:'Filter', TEMPRATURE:parseInt(val2) , ROOMTEMPRATURE: (tempen+8), VIBRATIONKCPM: vibration.toFixed(2), HUMIDITY:humidity , VOLTAGE: voltage.toFixed(2) , RPM: rpm, PSI:psi, THROUGHPUTPCT:parseInt(val1), HRSSINCELASTSTART:hrsshincestart , HRSCUM:hrscum, CALIBRATIONSINCELASTSERVICE:calibrationsincelast , HRSSINCELASTMAINTENANCE:hrssincelast, MONTHSTONEXTSERVICE:monthstonext, STATUSFROMSERVICE:statuses[inspectionstatus], TIMESSERVICED:timesserviced, WORKINGOUTPUTCHANNELS:workingoutput, REMAININGFUEL:remainingFuel},options);


      // 'insert into livesensorstatus ( PART, TEMPRATURE , ROOMTEMPRATURE , VIBRATIONKCPM , HUMIDITY , VOLTAGE , RPM , PSI, THROUGHPUTPCT, DATE_OF_ENTRY, HRSSINCELASTSTART , HRSCUM, CALIBRATIONSINCELASTSERVICE, HRSSINCELASTMAINTENANCE, MONTHSTONEXTSERVICE, STATUSFROMSERVICE, TIMESSERVICED, WORKINGOUTPUTCHANNELS)  values (:dist,:temp)',{dist: parseInt(val1),temp: parseInt(val2)},options);

    console.log("opened");
    

  
  } catch (err) {
    console.log("i am here");
    console.error(err);
  } //finally {
  //   if (connection) {
  //     try {
  //       await connection.close();
  //       console.log("closed");
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // }
}
module.exports = run;
//run();