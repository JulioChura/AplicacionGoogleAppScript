function ModParagraphs(id) {
  var doc = DocumentApp.openById(id)

  //Estilo para el texto
  var style = {};
  style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Times New Roman';
  style[DocumentApp.Attribute.FONT_SIZE] = 13;
  style[DocumentApp.Attribute.BOLD] = true;

  var paragraphs = doc.getBody().getParagraphs();
  paragraphs[7].setText('Curso:');
  paragraphs[9].setText('Tema:');
  paragraphs[11].setText('Docente:');
  paragraphs[13].setText('Presentado por:');
  paragraphs[16].setText('AREQUIPA - PERÚ');
  paragraphs[17].setText('2024');

  //Asignar el estilo a las lineas usadas
  for(var i = 7; i < paragraphs.length; i++){
    paragraphs[i].setAttributes(style);
  }

}
