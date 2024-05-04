  function saludar(render){
    var name = document.getElementById('userName').value;
    var html = render('Hola ' + name);
    var element = document.getElementById('saludo');
    element.innerHTML = html;
  
let cantidad = doc