const mockData = [
    {
        'name': 'California pizza',
        'price': '$ 8.50',
        'ingredient': 'Mushroom',
        'path': '/pizza/IMAGES/pizza1.png'
    },
    {
        'name': 'Greek pizza',
        'price': '$ 12.99',
        'ingredient': 'Beef',
        'path': '/pizza/IMAGES/pizza3.png'
    },
    {
        'name': 'Sicilian pizza',
        'price': '$ 7.90',
        'ingredient': 'Tomato',
        'path': '/pizza/IMAGES/pizza2.png'
    },
    {
        'name': 'Louis pizza',
        'price': '$ 4.79',
        'ingredient': 'Chicken',
        'path': '/pizza/IMAGES/pizza4.png'
    }, {
        'name': 'Calfornia pizza',
        'price': '$ 8.50',
        'ingredient': 'Mushroom',
        'path': '/pizza/IMAGES/pizza1.png'
    },
    {
        'name': 'Grek pizza',
        'price': '$ 12.99',
        'ingredient': 'Beef',
        'path': '/pizza/IMAGES/pizza3.png'
    },
    {
        'name': 'Siclian pizza',
        'price': '$ 7.90',
        'ingredient': 'Tomato',
        'path': '/pizza/IMAGES/pizza2.png'
    },
    {
        'name': 'Lois pizza',
        'price': '$ 4.79',
        'ingredient': 'Chicken',
        'path': '/pizza/IMAGES/pizza4.png'
    }
]
// CUANDO SE CARGUÉ EL DOM IMPRIMIRÁ EN PANTALLA LAS DIFERENTES CARTAS
document.addEventListener('DOMContentLoaded', () => {
    mockData.forEach(pizzaObj => {
        let pizzaName = pizzaObj['name'];
        let pizzaIngredient = pizzaObj['ingredient']
        let pizzaPath = pizzaObj['path']
        let pizzaPrice = pizzaObj['price']
        print_card(pizzaName, pizzaIngredient, pizzaPath, pizzaPrice)
    })
})
// FUNCION QUE PERMITE DECIR AL CLIENTE CUANTAS UNIDADES QUIERE DEL PRODUCTO
function unidades_pizza(){
    let pizzaName
    let pizzaPrice

    mockData.forEach(pizzaObj =>{
        pizzaName = pizzaObj['name']
        pizzaPrice = pizzaObj['price']
    })

    let cantidad_pizza = prompt(`¿Cuantas unidades quieres de la ${pizzaName}?`, 'RECUERDA QUE SOLO SE ACEPTAN VALORES NUMÉRICOS')
    let totalPrice = pizzaPrice * cantidad_pizza

    if(typeof cantidad_pizza === 'number'){
        window.alert(`Se han añadido ${cantidad_pizza} pizzas a la cesta de la compra / El total de las ${cantidad_pizza} es: ${totalPrice}`)
    }else{
        window.alert('El valor indicado no es numérico ')
    }

    return cantidad_pizza, pizzaName;
}

// FUNCION QUE PERMITE GUARDAR LA CANTIDAD DE PRODUCTO DENTRO DE UN ARRAY
function savepizzaarray(cantidad_pizza, pizzaName){
    let pizza_array = [0, 0, 0, 0, 0, 0, 0, 0]

    if(pizzaName === 'California pizza'){
        pizza_array.splice(0, 0, pizza_cantidad)
    }if(pizzaName === 'Greek pizza'){
        pizza_array.splice(1, 0, pizza_cantidad)
    }if(pizzaName === 'Sicilian pizza'){
        pizza_array.splice(2, 0, pizza_cantidad)
    }if(pizzaName === 'Louis pizza'){
        pizza_array.splice(3, 0, pizza_cantidad)
    }if(pizzaName === 'Calfornia pizza'){
        pizza_array.splice(4, 0, pizza_cantidad)
    }if(pizzaName === 'Grek pizza'){
        pizza_array.splice(5, 0, pizza_cantidad)
    }if(pizzaName === 'Siclian pizza'){
        pizza_array.splice(6, 0, pizza_cantidad)
    }if(pizzaName === 'Lois pizza'){
        pizza_array.splice(7, 0, pizza_cantidad)
    }
    return pizza_array   
}

// FUNCION QUE PERMITE SUMAR TODAS LAS POSICIONES DEL PIZZA_ARRAY 
function array_sum(pizza_array){
    let sum = 0

    for (let i = 0; i < pizza_array.length; i++){
        sum += pizza_array[i];
    }
}

// FUNCION QUE PERMITE CREAR LAS CARTAS DE LAS PIZZAS
function print_card(name, ingredient, path, price){
    const cardContainer = document.getElementById('container_card');
    let card = `<div class="card_box">
                    <div class="img_inner">
                        <img class="foto_pizza" src=${path}>
                    </div>
                    <div class="text_container">
                        <div>
                            <h3>${name}</h3>
                            <p>${ingredient}</p>
                        </div>
                        <div class="card_item_row">
                            <p class="price_text">${price}</p>
                            <button class="pizza_button" onclick="unidades_pizza()">+</button>
                        </div>
                    </div>
                </div>`
    cardContainer.insertAdjacentHTML('beforeend', card);
                        

}
