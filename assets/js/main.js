console.log("it works");


//1. selezionare gli elementi della DOM

//- fare la variabile buttonEl;
const buttonEl = document.getElementById("button")
//- creare variabile imgEl 
const imgEl = document.getElementById('spento')

//2. collegare un EventListner al pulsante (in questo caso l'accensione);
//buttonEl.addEventListener('click', ()=>{imgEl.classList('acceso')})

    buttonEl.addEventListener('click', ()=>{document.getElementById("button").innerHTML = "Spegni";
        imgEl.src= './img/yellow_lamp.png';
    });

    









/* From W3School
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});*/



//Cosa dovrebbe accadere:
//-il bottone cambia scritta al click;
//-l'immagine cambia al click