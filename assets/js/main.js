console.log("it works");


//1. selezionare gli elementi della DOM

//- fare la variabile buttonEl;
const buttonEl = document.getElementById("button")
//console.log(buttonEl);

    buttonEl.addEventListener('click', ()=>{document.getElementById("button").innerHTML = "Spegni"});

// HTML button element

// Change label text
//buttonEl.innerHTML = 'Spegni';

//console.log(buttonEl.innerHTML);


//- creare variabile imgEl 
//const imgEl = document.getElementsByTagName('img')

//2. collegare un EventListner al pulsante (in questo caso l'accensione);
//buttonEl.addEventListener('click', ()=>{imgEl.classList('acceso')})




/* From W3School
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});*/



//Cosa dovrebbe accadere:
//-il bottone cambia scritta al click;
//-l'immagine cambia al click