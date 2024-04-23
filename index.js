console.log(window.theme)


// Función que se carga cuando se carga el <body> de la Web
function loadColor() {
    var color = localStorage.getItem("colorvar"); 
    if (color === null) {
        document.body.classList.add("light");
    } else {
        if (color === "dark") { 
            document.body.classList.add("dark");
        } else {
            document.body.classList.add("light");
        }
    }
    printValue();
}
 
// Función para cambiar el color al pulsar el botón
function changeColor() {
    var color = localStorage.getItem("colorvar");
    if (color === "dark") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("colorvar", "light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("colorvar", "dark");
    }
    
}

const theme= document.querySelector('[data-theme-toggle]');
theme.addEventListener('click',()=>{
changeColor()
}
)
/*
const theme= document.querySelector('[data-theme-toggle]');
const light= document.querySelector("body")
 console.log(theme.value)
 theme.addEventListener('change', function() {
    if (this.checked) {
        console.log('El checkbox está marcado y su valor es: ' + this.value);
        light.classList.toggle(".light")
    } else {
        console.log('El checkbox no está marcado.');
    }
})
*/
