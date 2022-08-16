/* La clase productosInventario crea objetos los cuales tiene laS propiedades id,
producto, precio, y tienda. */
class productosInventario {
    constructor(id, producto, precio, tienda) {
        this.id = id
        this.producto = producto.toUpperCase()
        this.precio = precio
        this.tienda = tienda
        }
}

const productoN = []
function agregarInventario() {
    productoN.push(new  productosInventario(001, "auriculares",  24500, "fullhard"))
    productoN.push(new  productosInventario(002, "computadora", 185250, "mexx"))
    productoN.push(new  productosInventario(003, "mouse", 17000, "mexx"))
    productoN.push(new  productosInventario(004, "camara", 6500, "compragamer"))
    productoN.push(new  productosInventario(005, "parlantes", 2300, "venex"))
    productoN.push(new  productosInventario(006, "monitor", 55000, "compragamer"))
    productoN.push(new  productosInventario(007, "teclado", 13500, "comrpragamer"))
    } 

    agregarInventario();
    function recorrerInventario() {
        productoN.forEach(element => {
            console.table(element)
        })
    }
alert("Mmsystem la tienda Online mas grande de la Argentina")

/* Le pregunta al usuario el nombre del producto y luego gracias a filter lo que hara sera filtrar en el array de productos hasta encontrar el producto que coincida con lo que el usuario escribio */
pedido = prompt("Que producto te interesa comprar?  \n Los siguientes son los productos con los que contamos \n auriculares \n computadora \n mouse \n camara \n parlantes \n monitor \n teclado").toUpperCase()
let buscar = productoN.filter(el => el.producto.includes(pedido))   

alert("Perfecto, a continuación te diremos cual es el Producto de tu eleccion, Precio y en que tienda fisica puedes encontrar nuestro producto")    
alert(`El producto elegido es: \n ${buscar[0].id}.-${buscar[0].producto} con un precio de $${buscar[0].precio} ARS y contamos con este producto en la tienda fisca de ${buscar[0].tienda}`)
alert(`Gracias por elegirnos.`)
