function doGet() {

  var template = HtmlService.createTemplateFromFile('registro');
  template.pubUrl = "https://script.google.com/macros/s/AKfycbw-9GOETJm-bM5E2YWx_D4sSrEoAgTtS7qx8ij2jB3P/dev";
  var output =  template.evaluate();

  return output;
}

function include( fileName ) {
  return HtmlService.createHtmlOutputFromFile(fileName).
  getContent();
}

function doPost( e ) {
  var doc = DocumentApp.create('Mi primer documento');


  var body = doc.getBody();

  var email = e.parameter.email;
  var password = e.parameter.password;

  // Insertar los datos en el documento
  body.appendParagraph('Email: ' + email);
  body.appendParagraph('Password: ' + password);
  
  console.log(e);

} 
function myFunction() {
  doc = DocumentApp.create('Mi primer documento');
}
