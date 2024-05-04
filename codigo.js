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
  var documentId = "1kqN-XWI-0KT28fMdZtJ0-2glINUSCI-ZtAQioQJIz74";
  var doc = DriveApp.getFileById(documentId);
  var copyDocTemp = doc.makeCopy("Trabajo grupal");
  
  // Se necesita abrir el archivo copia
  var copyDoc = DocumentApp.openById(copyDocTemp.getId());
  var body = copyDoc.getBody();

  //Colocando secciones para datos
  ModParagraphs(documentId);

  var email = e.parameter.email;
  var password = e.parameter.password;

  // Insertar los datos en el documento
  body.appendParagraph('Email: ' + email);
  body.appendParagraph('Password: ' + password);
  
  console.log(e);

} 
