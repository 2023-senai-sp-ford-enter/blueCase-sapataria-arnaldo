import { getProdutos } from "./script";

const productCreate = document.querySelector('.fa-cart-plus');

productCreate.addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('.description-paragraph'),
        'preco': document.querySelector('.price'),
        'img': document.querySelector('.card img')
    }

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados) 
    })
        .then(res => {
            if(res.ok) {
                const responseToggle = document.querySelector('.respons');
                
                responseToggle.innerHTML = 'Produto adicionado ao carrinho!'
            }
        })

    getProdutos();
})
