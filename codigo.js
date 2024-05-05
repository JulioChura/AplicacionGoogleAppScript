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
    
  var curso = e.parameter.curso;
  var tema = e.parameter.tema;
  var docente = e.parameter.docente;

  //Integrantes del formulario
  /*var integranteA = e.parameter.integrante;
  var integranteB = e.parameter.integrante;*/
  
  // Insertar los datos en el documento
  var paras = body.getParagraphs();

  paras[8].setText(curso);
  paras[10].setText(tema);
  paras[12].setText(docente);

  //Integrantes al texto
  /*paras[14].setText(integranteA);
  paras[15].setText(integranteB);*/
  
  console.log(e);
  var url = "https://docs.google.com/document/d/" + copyDocTemp.getId() + "/edit";
  
  return HtmlService.createHtmlOutput("<script>window.location='" + url + "';</script>");

} 
