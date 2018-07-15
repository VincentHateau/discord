setInterval(verifieCalendrier, convertirHeuresEnMillisecondes(5));

function verifieCalendrier(){
  console.log("Vérification du calendrier...")
}

function convertirHeuresEnMillisecondes(nombreHeures){
  return nombreHeures * 60 * 60 * 1000
}