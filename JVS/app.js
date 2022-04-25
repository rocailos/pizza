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
    }
]

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
                            <button onclick="" class="pizza_button">+</button>
                        </div>
                    </div>
                </div>`
    cardContainer.insertAdjacentHTML('beforeend', card);
                        

}

document.addEventListener('DOMContentLoaded', () => {
    mockData.forEach(pizzaObj => {
        let pizzaName = pizzaObj['name'];
        let pizzaIngredient = pizzaObj['ingredient']
        let pizzaPath = pizzaObj['path']
        let pizzaPrice = pizzaObj['price']
        print_card(pizzaName, pizzaIngredient, pizzaPath, pizzaPrice)
    })
})

function ask_pizza(pizzaPrice){
    console.log("hola")
    var pizza_cantidad = prompt('¿Cuantas unidades quieres de la pizza?', 'RECORDAD QUE SOLO SE ACEPTAN VALORES NUMERICOS');
    var precio_pizza = (pizzaPrice)*pizza_cantidad
    var pizza = pizza + pizza_cantidad
    var number = new Boolean(isNaN(pizza_cantidad))
    if(number == false){
        window.alert("Se han añadido "+pizza_cantidad+" pizzas "+`${pizzaName}`+" al carrito de la compra"+"/ El total de las "+pizza_cantidad+" es: "+precio_pizza+"€");
    }if(number == true){
        window.alert("El valor indicado no es numérico");
    }

}

document.getElementByClass("pizza_button").addEventListener('click', ask_pizza(pizzaPrice));