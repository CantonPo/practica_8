function añadirPalabra(){
    const data = document.querySelector("#user_text").value
    console.log(data)
    var element = document.createElement("p");
    console.log(element) 
    element.innerHTML = "hola mundo"

    const contenedor = document.querySelector("#resultado")
    contenedor.appendChild(element);
}