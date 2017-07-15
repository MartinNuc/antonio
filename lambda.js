'use strict';

const google = require('googleapis');

module.exports.loadMenu = (event, context, callback) => {
  const apiKey = process.env.AUTH_KEY;
  const spreadsheetId = process.env.SPREADSHEET_ID;

  return openSpreadsheet(apiKey, spreadsheetId).then((spreadsheet) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(spreadsheet.values),
    };
    callback(null, response);
  });
};

function openSpreadsheet(auth, spreadsheetId) {
  return new Promise((resolve, reject) => {
    const sheets = google.sheets('v4');
    sheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: 'A2:E',
    }, (err, spreadsheet) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(spreadsheet);
      }
    });
  });
}
