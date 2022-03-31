function setup() {
  botoncito = createButton('Descargar');
  botoncito.position (10, 10);
  botoncito.mousePressed(algo);
}

function algo(){
 saveCanvas("imagen", "jpg");
}
