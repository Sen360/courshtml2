
    function controler() {
        var zoneSaisie = document.getElementById("zoneSaisie");
        alert("La Zone de saisie contient : " + zoneSaisie.value);
  }

/* Cette fonction sert à récupérer le valeur entrée par l'utilisateur
dans l'input avec l'id "zoneSaisie" */

const button = document.getElementById('btn');
 
button.addEventListener('click', function(){
    if(zoneSaisie.value === "") {
        alert("Erreur")
     } else {
         alert("La Zone de saisie contient : " + zoneSaisie.value);
     }
}); 


