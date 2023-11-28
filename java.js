function añadirPalabra(){
    const data = document.querySelector("#usertext").value
    console.log=data
    var element = document.createElement("p");
    console.log(element) 
    element.innerHTML = "hola mundo"

    const contenedor = document.querySelector("#resultado")
    contenedor.appendChild(element);
}