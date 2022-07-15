
// enDolares() {
//     this.precioDeLista = this.precioDeLista / 250
// }

// Se crea el objeto para luego realizar consultas del mismo

class Producto {
    constructor(marca, modelo, almacenamiento, precioDeLista){
        this.marca = marca
        this.modelo = modelo
        this.almacenamiento = almacenamiento
        this.precioDeLista = precioDeLista
        
}  
}

// Lista de modelos disponibles (actualizando)

const modelo1 = new Producto("Apple", "Iphone 13", "128 gb", 250000)
const modelo2 = new Producto("LG", "Velvet 5G", "256 gb", 120000)
const modelo3 = new Producto("Huawei", "P50", "64 gb", 100000)
const modelo4 = new Producto("Samsung", "GalaxyS22", "128 gb", 150000)
const modelo5 = new Producto("Motorola", "G Stylus", "256 gb", 170000)

const productos = [modelo1, modelo2, modelo3, modelo4, modelo5]

// Se crea un alert para interaccion con el usuario

alert("hola! en la presente lista tenemos los moviles mas adquiridos del año 2022, puede consultar entre las marcas Apple, Samusng, LG, Motorola y Huawei")

let respuesta, respuestaSw

do {
    respuesta = parseFloat(prompt("Porfavor ingrese un numero segun la caracteristica que desea consultar. 1 para marcas, 2 para modelos, 3 para almacenamiento y 4 para precio de lista"))
    if ((respuesta != "1") && (respuesta !="2") && (respuesta != 3) && (respuesta != 4)) {
    alert("Por favor ingrese un numero valido")
    }
}while(respuestaSw >=1 || respuestaSw <= 5 )


switch(respuesta) {
    case 1:
        do{
            respuestaSw = parseFloat(prompt("Por favor ingrese la marca del modelo a consultar"))
        }while(respuestaSw <=1 || respuestaSw <= 5 )

        const marcaElegida = productos.filter(producto => producto.marca == respuestaSw)
        break
}