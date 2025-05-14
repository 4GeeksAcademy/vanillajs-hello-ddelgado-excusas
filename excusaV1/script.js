function generador() {
  let nombres = [ 'The dog', 'My grandma', 'The mailman', 'My bird'];
  let accion = ['ate', 'peed', 'crushed', 'broke'];

  let randfirstname = Math.floor(Math.random()*nombres.length);
  let randAccion = Math.floor(Math.random()*accion.length);

  document.getElementById('excusas').innerHTML = "<h1>Nombre:</h1><p><h2>" + nombres[randfirstname]+ " " +accion[randAccion]+ "</h2></p>";
}





// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
