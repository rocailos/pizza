const mockData = [
    {
        'name': 'California pizza',
        'price': '$ 8.50',
        'ingredient': 'Mushroom',
        'path': '../Food-App/images/california_pizza.png'
    },
    {
        'name': 'Greek pizza',
        'price': '$ 12.99',
        'ingredient': 'Beef',
        'path': '../Food-App/images/greek_pizza.png'
    },
    {
        'name': 'Sicilian pizza',
        'price': '$ 7.90',
        'ingredient': 'Tomato',
        'path': '../Food-App/images/sicilian_pizza.png'
    },
    {
        'name': 'Louis pizza',
        'price': '$ 4.79',
        'ingredient': 'Chicken',
        'path': '../Food-App/images/louis_pizza.png'
    }, {
        'name': 'California pizza',
        'price': '$ 8.50',
        'ingredient': 'Mushroom',
        'path': '../Food-App/images/california_pizza.png'
    },
    {
        'name': 'Greek pizza',
        'price': '$ 12.99',
        'ingredient': 'Beef',
        'path': '../Food-App/images/greek_pizza.png'
    },
    {
        'name': 'Sicilian pizza',
        'price': '$ 7.90',
        'ingredient': 'Tomato',
        'path': '../Food-App/images/sicilian_pizza.png'
    },
    {
        'name': 'Louis pizza',
        'price': '$ 4.79',
        'ingredient': 'Chicken',
        'path': '/pizza/IMAGES/pizza4.png'
    }
]
document.addEventListener('DOMContentLoaded', () => {
    mockData.forEach(pizzaObj => {
        let pizzaName = pizzaObj['name'];
        let pizzaIngredient = pizzaObj['ingredient']
        let pizzaPath = pizzaObj['path']
        let pizzaPrice = pizzaObj['price']
        print_card(pizzaName, pizzaIngredient, pizzaPath, pizzaPrice)
    })
})

function print_card(name, ingredient, path, price){
    const cardContainer = document.getElementById('container_card');
    let card = `<div class="card-box">
                    <div class="img_inner">
                        <img class="foto_pizza" src=${path}>
                    </div>
                    <div class="text_container">
                        <div class="card_text_row">
                            <h3>${name}</h3>
                            <p class="card_subtitle">${ingredient}</p>
                        </div>
                        <div class="card_item_row">
                            <p class="price_text">${price}</p>
                            <div class="add_button">+</div>
                        </div>
                    </div>
                </div>`
    cardContainer.insertAdjacentHTML('beforeend', card);
                        

}

function pizza_pizza(precio){

    var pizza_cantidad = prompt('¿Cuantas unidades quieres de la pizza?', 'RECORDAD QUE SOLO SE ACEPTAN VALORES NUMERICOS');
    var precio_pizza = (precio)*pizza_cantidad
    var pizza = pizza + pizza_cantidad
    var number = new Boolean(isNaN(pizza_cantidad))
    if(number == false){
        window.alert("Se han añadido "+pizza_cantidad+" pizzas California al carrito de la compra"+"/ El total de las "+pizza_cantidad+" es: "+precio_pizza+"€");
    }if(number == true){
        window.alert("El valor indicado no es numérico");
    }

}