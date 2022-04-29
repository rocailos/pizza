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

// FUNCION QUE PERMITE DECIR AL USUARIO CUANTAS UNIDADES QUIERE DE LA PIZZA Y SOLO PERMITE CARACTERES NUMÉRICOS
function pizzaUnits(name, ingredient, path, price, id){ //ME SALEN CON VALOR UNDEFINED (PREGUNTAR)
    console.log(name)
    let i = 0
    while(i=1){
        let units = prompt(`¿Cúantas unidades de ${name} desea añadir al carro de la compra?`,"SOLO SE ACEPTAN VALORES NUMÉRICOS!!")
        let totalUnitPrice = ""
        totalUnitPrice = price * units
        if(units === 'null') break
        if(isNaN(units) === false){
        window.alert(`Se han añadido ${units} pizzas al carro de la compra  /  El total de las ${units} pizzas ${name} es: ${totalUnitPrice}`)
        break
    }
    else {
        window.alert(`El valor indicado no es numérico porfavor indica un número!`)
        i = 0
    }
    
}}

//FUNCION PARA COMPARAR EL NOMBRE DE LA PIZZA DEL BOTON CON LA ARRAY. DESPUES GUARDAR


// FUNCION QUE PERMITE CREAR LAS CARTAS DE LAS PIZZAS
function print_card(name, ingredient, path, price, id){
    const cardContainer = document.getElementById('container_card');
    let card = `<div class="card_box">
    <div class="img_inner">
        <img class="foto_pizza" src=${path}>
    </div>
    <div class="text_container">
        <div>
            <h3 id="pname">${name}</h3>
            <p>${ingredient}</p>
        </div>
        <div class="card_item_row">
            <p class="price_text">${price}</p>
            <button id="shopping_btn" class="pizza_button" onclick="pizzaUnits(${pizzaObj.name, pizzaObj.ingredient, pizzaObj.path, pizzaObj.price, pizzaObj.id})">+</button>
        </div>
    </div>
</div>`
    cardContainer.insertAdjacentHTML('beforeend', card);
    console.log(name)             
}



// CUANDO SE CARGUÉ EL DOM IMPRIMIRÁ EN PANTALLA LAS DIFERENTES CARTAS
document.addEventListener('DOMContentLoaded', () => {
    mockData.forEach(pizzaObj => {
        print_card(pizzaObj.name, pizzaObj.ingredient, pizzaObj.path, pizzaObj.price, pizzaObj.id)
    })
})