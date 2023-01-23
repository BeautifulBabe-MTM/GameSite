import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component() {
  constructor(props)
  {
    super(props)
    this.state = { 
      items: [
      {
        id: 1,
        title: 'Grand Theft Auto: San Andreas',
        img: 'https://img.gta5-mods.com/q95/images/gta-sa-start-up/83c95f-GTA%20SA.PNG',
        desc: 'Grand Theft Auto: San Andreas: It’s the early ’90s. After a couple of cops frame him for homicide, Carl ‘CJ’ Johnson is forced on a journey that takes him across the entire state of San Andreas, to save his family and to take control of the streets.',
        price: '29.99'
      },
      {
        id: 2,
        title: 'WW2 Rebuilder',
        img: 'https://i.ytimg.com/vi/a1ggm1DLaS4/maxresdefault.jpg',
        desc: 'Build the new future of Europe! Flip, renovate, repair and rebuild places destroyed during World War 2. Get to know the history and stories of civilians. Play an immersive building simulator with grappling storytelling.',
        price: '19.99'
      },
      {
        id: 3,
        title: 'Outpath: First Journey',
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2237980/capsule_616x353.jpg?t=1672498514',
        desc: 'Outpath: First Journey is a prologue chapter of the main game, Outpath. An experimental clicker base building game. Craft, gather & manage resources, build your base and buy more islands to exploit and expand!',
        price: '24.99'
      },
      {
        id: 4,
        title: 'Potion Craft: Alchemist Simulator',
        img: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Potion_Craft_Logo.jpg',
        desc: 'Potion Craft is an alchemist simulator where you physically interact with your tools and ingredients to brew potions. You`re in full control of the whole shop: invent new recipes, attract customers and experiment to your heart`s content. Just remember: the whole town is counting on you.',
        price: 'FREE'
      },
      {
        id: 5,
        title: 'EMPTY SHELL: PROLOGUE',
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2224850/capsule_616x353.jpg?t=1673862410',
        desc: 'EMPTY SHELL: PROLOGUE will throw you in a dark industrial environment, a secret facility on a japanese island. Each volunteer has signed a contract for a "recovery operation" without being privy to too many details. A tense roguelite survival horror with a top down perspective.',
        price: '44.99'
      }
      ]
    }
  }
  render () {
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div>
  );
  }
}

export default App;
