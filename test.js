//randomly generates 7 Pokemon sprites and names


const checkAlert = async function () {
  const pokemonArray = [(Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152))]
  const randArray = pokemonArray[Math.ceil(Math.random() * pokemonArray.length)];

  for (i = 0; i < pokemonArray.length; i++) {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonArray[i]}`);

    const pokeSprite = response.data.sprites.front_default;

    let pokemonLayer = document.querySelector('#sprite-layer');
    let pokemonImg = document.createElement("div");
    pokemonImg.classList.add("pokeId");
    pokemonLayer.appendChild(pokemonImg);
    pokemonImg.innerHTML = `<img src="${pokeSprite}">`

    let list = document.querySelector("#list");
    let findList = document.createElement("ul");
    let findListItem = document.createElement("li");
    let pokeName = response.data.name;
    list.appendChild(findList);
    findList.appendChild(findListItem)
    findListItem.innerHTML = pokeName;
  }

  //SCORE

  var pokeIdClicked = document.getElementsByClassName(`pokeId`);
  let score = 0;
  for (let i = 0; i < pokeIdClicked.length; i++) {
    pokeIdClicked[i].addEventListener('click', function () {
      score++
      console.log(score, "poke clicked");
    });
  }
  // document.addEventListener('click', async (event) => {
  //   let newPokemonClass = document.querySelector('.pokeId');
  //   newPokemonClass.className += ' pokemonDisappear';
  //   console.log('clicked', event.path[0])
  //   checkAlert(".pokeId pokemonDisappear").innerHTML.remove();

  // });
  document.addEventListener('click', async () => {
    var pokeClicked = document.querySelector('.pokeId');
    pokeClicked.remove();
  });
  // const pokeClicked = () => {
  //   pokeId.classLast.add("clicked")
  //   const blastClean = () => {
  //     body.removeChild(pokeId)
  //   }
  //   checkWinner();
  // }

};
checkAlert()






