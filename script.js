// // Inicio del programa

// alert("Bienvenido a Todo Movil")

// // Variables constantes de calculo de intereses por x cantidad de meses

// let precioFinal = function (precio, cuota)  {
//     return precio / cuota
//   };

// // Variables sin asignar

// let nombre, marca, modelo, monto, cuota, recalcular

// // Se agrega un ciclo do/while para que el usuario pueda ingresar su nombre completo, correo, monto a calcular
// do {
// do {
//     nombre = prompt("Ingrese su nombre:").toLowerCase()
// }while(!isNaN(nombre || nombre.length <0))

// do {
//     correo = prompt("Ingrese su correo:").toLowerCase()
// }while(!isNaN(correo || correo.length <0))

// alert("Las marcas disponibles son: SAMSUNG, APPLE, LG, HUAWEI, MOTOROLA")

// do {
//     marca = prompt("Ingrese la marca que prefiera").toUpperCase()
// }while(!isNaN(marca || marca.length <0))

// switch(marca) {

//     case "SAMSUNG":
//         alert(`Hola Sr. ${nombre}, los modelos disponibles de la ${marca} en este momento son Galaxy S22, Galaxy S21 y Glaxy S20.`)
//         break

//     case "APPLE":
//         alert(`Hola Sr. ${nombre}, los modelos disponibles de la ${marca} en este momento son Iphone 13, Iphone 12, Iphone 11.`)
//         break

//     case "LG":
//         alert(`Hola Sr. ${nombre}, los modelos disponibles de la ${marca} en este momento son Velvet 5G, Oled Z2 y Oled A2.`)
//         break

//     case "HUAWEI":
//         alert(`Hola Sr. ${nombre}, los modelos disponibles de la {marca} en este momento son P50, P40 y P30.`)
//         break    

//     case "MOTOROLA":
//         alert(`Hola Sr. ${nombre}, los modelos disponibles de la ${marca} en este momento son G Stylus, Edge 30 PRO y Edge 20 PRO.`)
//         break
// }


// do {
//     modelo = prompt("Ingrese el modelo que prefiera").toLowerCase().toString()
// }while(!isNaN(modelo || modelo.length <0))

// switch(modelo) {
//     case "galaxy s22":
//         precio = 150000
//         alert(`Su precio es de $150000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
//         break

//     case "galaxy s21":
//         precio = 147000
//         alert(`Su precio es de $147000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
//         break

//     case "galaxy s20":
//         precio = 136000
//         alert(`Su precio es de $136000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
//         break

//     case "iphone 13":
//         precio = 255000
//         alert(`Su precio es de $255000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
//         break  

//     case "iphone 12":
//         precio = 244000
//         alert(`Su precio es de $244000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
//         break  

//     case "iphone 11":
//         precio = 205000
//         alert(`Su precio es de $205000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
//         break

//     case "velvet 5g":
//         precio = 121000
//         alert(`Su precio es de $121000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
//         break 

//     case "oled z2":
//         precio = 139000
//         alert(`Su precio es de $139000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
//         break 
//     case "oled a2":
//         precio = 157000
//         alert(`Su precio es de $157000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
//         break           
// }

// recotizar = prompt("¿Desea realizar una nueva consulta?").toLowerCase()

// }while(recotizar!="no")



// // Se crea un objeto (agregado de su valor en dolares)
// class Producto {
//     constructor(id, marca, modelo, almacenamiento, precioDeListaDolares){
//         this.id = id
//         this.marca = marca.toUpperCase()
//         this.modelo = modelo
//         this.memoria = almacenamiento
//         this.precioDeListaDolares = precioDeListaDolares
//     }  
//     enDolares() {
//         this.precioDeListaDolares = this.precioDeListaDolares / 250
//     }
// }

// const productos = []
// let detalleDeProductos = function(id, mar, mod, alm, preDo) {
//     productos.push(new Producto (id, mar, mod, alm, preDo)) 
// }

// detalleDeProductos(1, "Samsung", "GalaxyS22", 128, 150000)
// detalleDeProductos(2, "Samsung", "GalaxyS21", 256, 147000)
// detalleDeProductos(3, "Samsung", "GalaxyS20", 512, 136000)
// detalleDeProductos(4, "Apple", "Iphone 13", 256, 255000)
// detalleDeProductos(5, "Apple", "Iphone 12", 128, 244000)
// detalleDeProductos(6, "Apple", "Iphone 11", 512, 205000)
// detalleDeProductos(7, "LG", "Velvet 5G", 256, 121000)
// detalleDeProductos(8, "LG", "Oled Z2", 128, 139000)
// detalleDeProductos(9, "LG", "Oled A2", 512, 157000)
// detalleDeProductos(10, "Huawei", "P50", 256, 104000)
// detalleDeProductos(11, "Huawei", "P40", 128, 92000)
// detalleDeProductos(12, "Huawei", "P30", 512, 80000)
// detalleDeProductos(13, "Motorola", "G Stylus", 512, 176000)
// detalleDeProductos(14, "Motorola", "Edge 30 PRO", 256, 168000)
// detalleDeProductos(15, "Motorola", "Edge 20 PRO", 128, 150000)

// //Se cambia el valor a dolares para mostrar en la consola 

// for(const dolares of productos) dolares.enDolares()
// console.log(productos)

// // Se desea consultar solo precio de los productos (en dolares previamente definido)

// console.log(productos.map(detalleDeProductos => detalleDeProductos.precioDeListaDolares))

// // Se desea consultar los productos mayores o iguales a 600 dolares

// console.log(productos.filter(detalleDeProductos => detalleDeProductos.precioDeListaDolares >= 600))

// // Se desea consultar los productos menores a 600 dolares

// console.log(productos.filter(detalleDeProductos => detalleDeProductos.precioDeListaDolares < 600))

let boton = document.getElementById("btnPrincipal")
let caja = document.getElementById("cajaMuestra")

boton.addEventListener("click", e => {
    let nombre = prompt("Ingrese su nombre:")
    console.log(nombre) 
    caja.textContent = " Hola " + nombre  + " bienvenido "

})