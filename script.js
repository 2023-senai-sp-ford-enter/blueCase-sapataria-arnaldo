//Função para o menu acompanhar o rolamento da página 

const navbar = document.getElementById('navbar');
const btnTop = document.getElementById('btn-top');

function navbarElement(posicao) {
  if (posicao > navbar.offsetTop && posicao > btnTop.offsetTop) {
    navbar.classList.add('animation');
    btnTop.classList.add('btn')
  } else {
    navbar.classList.remove('animation');
    btnTop.classList.remove('btn');
  }
}

document.addEventListener('scroll', () => {
  navbarElement(window.scrollY);
});

/* Função para alterar o tema
    const btnTema = document.querySelector('#theme-btn');

    const currentTheme = localStorage.getItem('data-theme') ? localStorage.getItem('data-theme') : '';
    const rootElement = document.documentElement;
    rootElement.setAttribute('data-theme', rootElement)
*/

// Função para abrir e fechar o menu

const buttonShoppingCart = document.querySelector('#shopping-cart');

buttonShoppingCart.addEventListener('click', () => {
  const menuShoppingCart = document.querySelector('.shopping-cart');

  menuShoppingCart.classList.toggle('active');
});

export function getProdutos() {
  fetch('http://localhost:3000/produtos', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {

      const listProdutos = document.querySelector('#listaProdutos');
      listProdutos.innerHTML = "";
      
      for(let i = 0; i < res.length; i++) {
        const ulProdutos = document.createElement('ul');
        ulProdutos.classList.add('produtos');

        let liImg = document.createElement('li');
        liImg.setAttribute('src', `${res[i].img}`);
        liId.setAttribute('data-product', 'img');

        let liId = document.createElement('li');
        liId.innerHTML = res[i].id;
        liId.setAttribute('data-product', 'id');

        let liDescription = document.createElement('li');
        liDescription.innerHTML= res[i].descricao;
        liDescription.setAttribute('data-product', 'description');

        let liPreco = document.createElement('li');
        liPreco.innerHTML = res[i].preco;
        liPreco.setAttribute('data-product', 'preco');

        ulProdutos.append(liImg(document.createElement('img')), liId, liDescription, liPreco);
      } 

      listProdutos.appendChild(ulProdutos);
    });
}
