

// Se crea un objeto (agregado de su valor en dolares)
class Producto {
    constructor(id, marca, modelo, almacenamiento, precioDeLista){
        this.id = id
        this.marca = marca.toUpperCase()
        this.modelo = modelo
        this.memoria = almacenamiento
        this.precioDeLista = precioDeLista
    }  
    enDolares() {
        this.precioDeLista = this.precioDeLista / 250
    }
}

const productos = []
let detalleDeProductos = function(id, mar, mod, alm, pre) {
    productos.push(new Producto (id, mar, mod, alm, pre)) 
}

detalleDeProductos(1, "Samsung", "GalaxyS22", 128, 150000)
detalleDeProductos(2, "Samsung", "GalaxyS21", 256, 147000)
detalleDeProductos(3, "Samsung", "GalaxyS20", 512, 136000)
detalleDeProductos(4, "Apple", "Iphone 13", 256, 255000)
detalleDeProductos(5, "Apple", "Iphone 12", 128, 244000)
detalleDeProductos(6, "Apple", "Iphone 11", 512, 205000)
detalleDeProductos(7, "LG", "Velvet 5G", 256, 121000)
detalleDeProductos(8, "LG", "Oled Z2", 128, 139000)
detalleDeProductos(9, "LG", "Oled A2", 512, 157000)
detalleDeProductos(10, "Huawei", "P50", 256, 104000)
detalleDeProductos(11, "Huawei", "P40", 128, 92000)
detalleDeProductos(12, "Huawei", "P30", 512, 80000)
detalleDeProductos(13, "Motorola", "G Stylus", 512, 176000)
detalleDeProductos(14, "Motorola", "Edge 30 PRO", 256, 168000)
detalleDeProductos(15, "Motorola", "Edge 20 PRO", 128, 150000)

//Se cambia el valor a dolares para mostrar en la consola 

for(const dolares of productos) dolares.enDolares()
console.log(productos)

// Se desea consultar solo precio de los productos (en dolares previamente definido)

console.log(productos.map(detalleDeProductos => detalleDeProductos.precioDeLista))

// Se desea consultar los productos mayores o iguales a 600 dolares

console.log(productos.filter(detalleDeProductos => detalleDeProductos.precioDeLista >= 600))

// Se desea consultar los productos menores a 600 dolares

console.log(productos.filter(detalleDeProductos => detalleDeProductos.precioDeLista < 600))



