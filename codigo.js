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

  //recibiendo integrantes
  var integrantes = [];
  for (var i = 0; i < 3; i++) {
    var integrante = e.parameter["integrante" + i];
    var email = e.parameter["email" + i];
    if (integrante && email) {
      integrantes.push({ nombre: integrante, email: email });
    }
  }
  
  // Insertar los datos en el documento
  var paras = body.getParagraphs();

  paras[8].setText(curso);
  paras[10].setText(tema);
  paras[12].setText(docente);

  //colocando integrantes
  for (var i = 0; i < integrantes.length; i++) {
    paras[14 + i].setText(integrantes[i].nombre);
  } 
  
  console.log(e);
  var url = "https://docs.google.com/document/d/" + copyDocTemp.getId() + "/edit";
  
  return HtmlService.createHtmlOutput("<script>window.location='" + url + "';</script>");

} 

// falta implementarlo en la funcion doPost
function darPermisos(correo, docId) {
    file.addEditor(correo);
    var subject = "Permisos de edición otorgados";
    var body = "Hola, ahora tienes permisos de edición para el documento. Puedes acceder a él en: https://docs.google.com/document/d/" + docId + "/edit";
    MailApp.sendEmail(correo, subject, body);
}
