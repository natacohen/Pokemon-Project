const populate = async () => {

    const requestURL = 'fake_pokemon.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const pokemon = await response.json();

    populateHeader(pokemon);
    populatePokemon(pokemon);

  }


  let populateHeader=(obj) => {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = `Pokemon of ${obj['map']} ${'Region'}`;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `Pokedex for Pokemon: ${obj['gameVersion']} || Released: ${ obj['year']}`;
    header.appendChild(myPara);
  }

  let populatePokemon = (obj) => {
    const section = document.querySelector('section');
    const monsters = obj['monsters'];

    for (const monster of monsters) {
      const myCard = document.createElement('div');
      const myImg = document.createElement('img');
      const myCardContent = document.createElement('div');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');

      myCard.className = "card";
      myCardContent.className = "card-container";
      myImg.src = `assets/${monster.number}.jpg`;
      myH2.textContent = monster.name;
      myPara1.textContent = `Pokedex # ${monster.number}`;
      myPara2.textContent = `Type: ${ monster.type}`;
      myPara3.textContent = 'Attacks:';

      const superPowers = monster.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }

      myCard.appendChild(myImg);
      myCard.appendChild(myCardContent);
      myCardContent.appendChild(myH2);
      myCardContent.appendChild(myPara1);
      myCardContent.appendChild(myPara2);
      myCardContent.appendChild(myPara3);
      myCardContent.appendChild(myList);

      section.appendChild(myCard);
    }
  }

  populate();