
BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const INPUT = document.getElementById('input');

const CONTAINER = document.getElementById('container')

button.addEventListener('click', ()=> {
    let pokeId = INPUT.value; 

    if(pokeId == ''){
        return showEmpty(pokeId);
    }

    let pokeSearched = BASE_URL + pokeId
    
    fetchPokemon(pokeSearched);
})

const fetchPokemon = async (pokeSearched) => {

    try {
        const res = await fetch(pokeSearched)
        const data = await res.json();
        renderPokemon(data)
    }
    catch(err) {
        showError(err);
    }
}

const renderPokemon = (data) => {   
    
    const {name, sprites, height, weight, types } = data;

    let cardContainer =
    `
     <div class="card-content">
        <h2>${name}</h2>    
        <p>tipo: ${types.map((tipo) => {
            return `<span>${tipo.type.name}</span>`;
          })
          .join(", ")}</p>       
        <p class="height">height: ${height / 10}m</p>
        <p class="weight">weight: ${weight / 10}kg</p>
     </div>  
     <div class="card-image">
        <img src="${sprites.other.home.front_default}" alt="imagen-pokemon">
    </div>  
    `; 

    CONTAINER.innerHTML = cardContainer;
}

const showError = () => {
    let cardContainer =
    `
     <div class="card-content">
         <h2>No existe un pokemon con el numero de id ingresado.</h2>         
     </div>  
    `; 

    CONTAINER.innerHTML = cardContainer;
}

const showEmpty = () => {
    let cardContainer =
    `
     <div class="card-content">
         <h2>Buscador vacio. Ingrese un numero para buscar un pokemon.</h2>         
     </div>  
    `; 
    CONTAINER.innerHTML = cardContainer;
}