function aggregateSheets() {
  const masterSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Master");
  masterSheet.clearContents();
  const headers = ["Item", "Value", "Source"];
  masterSheet.appendRow(headers);

  const sourceSheetUrls = [
    "https://docs.google.com/spreadsheets/d/EXAMPLE1",
    "https://docs.google.com/spreadsheets/d/EXAMPLE2",
    "https://docs.google.com/spreadsheets/d/EXAMPLE3",
    "https://docs.google.com/spreadsheets/d/EXAMPLE4",
    "https://docs.google.com/spreadsheets/d/EXAMPLE5",
    "https://docs.google.com/spreadsheets/d/EXAMPLE6"
  ];

  sourceSheetUrls.forEach((url, index) => {
    const ss = SpreadsheetApp.openByUrl(url);
    const sheet = ss.getSheets()[0];
    const data = sheet.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      masterSheet.appendRow([row[0], row[1], "Sheet " + (index + 1)]);
    }
  });
}
