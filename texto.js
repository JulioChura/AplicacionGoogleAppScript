function ModParagraphs() {
  var doc = DocumentApp.openById('1kqN-XWI-0KT28fMdZtJ0-2glINUSCI-ZtAQioQJIz74')
  var paragraphs = doc.getBody().getParagraphs();

  paragraphs[9].setText('Año de Estudios:');
  paragraphs[10].setText('Curso:')
  paragraphs[11].setText('Tema:');
  paragraphs[12].setText('Docente:')
  paragraphs[13].setText('Estudiante:');
  paragraphs[14].setText('Grupo:');
  paragraphs[15].setText('Ciudad-Pais');
  paragraphs[16].setText('Año');

}
