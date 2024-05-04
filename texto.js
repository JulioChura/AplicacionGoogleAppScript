function ModParagraphs(id) {
  var doc = DocumentApp.openById(id)
  var paragraphs = doc.getBody().getParagraphs();
  paragraphs[9].setText('Año de Estudios:');
  paragraphs[11].setText('Curso:')
  paragraphs[13].setText('Tema:');
  paragraphs[15].setText('Docente:')

}
