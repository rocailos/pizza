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

document.addEventListener('DOMContentLoaded', () => {
    mockData.forEach(pizzaObj => {
        let pizzaName = pizzaObj['name'];
        let pizzaIngredient = pizzaObj['ingredient']
        let pizzaPath = pizzaObj['path']
        let pizzaPrice = pizzaObj['price']
        print_card(pizzaName, pizzaIngredient, pizzaPath, pizzaPrice)
    })
})

function prompt_pizza(){
    let pizzArray = []
    let pizzaPrice
    let pizzaName
    mockData.forEach(pizzaObj =>{
    pizzaPrice = pizzaObj['price']
    pizzaName = pizzaObj['name']
    })
    var pizza_cantidad = prompt('¿Cuantas unidades quieres de la pizza?', 'RECORDAD QUE SOLO SE ACEPTAN VALORES NUMERICOS');
    var pizza = pizza + pizza_cantidad
    var number = new Boolean(isNaN(pizza_cantidad))
    if(number == false){
        window.alert(`Se han añadido ${pizza_cantidad} pizzas al carrito de la compra / El total de las ${pizza_cantidad} es: ${pizzaPrice}€`);
        if(pizzaName === 'California pizza'){
            pizzArray.splice(0, 0, pizza_cantidad)
            console.log(pizzArray[0])
        }if(pizzaName === 'Greek pizza'){
            pizzArray.splice(1, 0, pizza_cantidad)
            console.log(pizzArray[1])
        }if(pizzaName === 'Sicilian pizza'){
            pizzArray.splice(2, 0, pizza_cantidad)
            console.log(pizzArray[2])
        }if(pizzaName === 'Louis pizza'){
            pizzArray.splice(3, 0, pizza_cantidad)
            console.log(pizzArray[3])
        }if(pizzaName === 'Calfornia pizza'){
            pizzArray.splice(4, 0, pizza_cantidad)
            console.log(pizzArray[4])
        }if(pizzaName === 'Grek pizza'){
            pizzArray.splice(5, 0, pizza_cantidad)
            console.log(pizzArray[5])
        }if(pizzaName === 'Siclian pizza'){
            pizzArray.splice(6, 0, pizza_cantidad)
            console.log(pizzArray[6])
        }if(pizzaName === 'Lois pizza'){
            pizzArray.splice(7, 0, pizza_cantidad)
            console.log(pizzArray[7])
        }
        console.log(pizzArray)
    }if(number == true){
        window.alert("El valor indicado no es numérico");
    }

}
// FUNCION QUE CREA LAS CARTAS DE LAS PIZZAS
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
                            <button class="pizza_button" onclick="prompt_pizza()">+</button>
                        </div>
                    </div>
                </div>`
    cardContainer.insertAdjacentHTML('beforeend', card);
                        

}


// FUNCION PARA PEDIR CUANTAS UNIDADES DE PRODUCTO QUIERE EL CLIENTE

// EVENTO ONCLICK PARA VINCULAR LA FUNCION DEL PROMPT AL BOTÓN
// const btnPizza = document.getElementById('btnAumentar')
// btnPizza.addEventListener('click',function ()
//     {
//      alert("hello");
//      //validation code to see State field is mandatory.  
//     }  );