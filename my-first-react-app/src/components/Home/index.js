import React from 'react';
import { userData } from '../../helpers';
import CustomNav from '../CustomNav';
import './Homepage.css';

const Homepage = () => {
  const{username} = userData();
  const games = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'Explore the vast open world of Hyrule.',
      imageUrl: 'https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg',
      price: '$59.99',
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      description: 'Embark on an epic Wild West adventure.',
      imageUrl: 'https://i0.wp.com/www.gamesbap.com/wp-content/uploads/2020/12/When-Does-Red-Dead-Redemption-2-Takes-Place.jpg?fit=1024%2C576&ssl=1',
      price: '$49.99',
    },
    {
      id: 3,
      title: 'Fortnite',
      description: 'Battle against other players in a fast-paced online multiplayer game.',
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202303/0621/d3c11818a78c6495e84a3d8e8dd6dc652721be36e0eb8c0a.png',
      price: 'Free to play',
    },
    {
      id: 4,
      title: 'Spider-Man',
      description: 'Fight crime as Spiderman and defeat the Sinister Six.',
      imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png',
      price: '$59.99',
    },
    {
      id: 5,
      title: 'Red Dead Redemption 2',
      description: 'Embark on an epic Wild West adventure.',
      imageUrl: 'https://i0.wp.com/www.gamesbap.com/wp-content/uploads/2020/12/When-Does-Red-Dead-Redemption-2-Takes-Place.jpg?fit=1024%2C576&ssl=1',
      price: '$49.99',
    },
    {
      id: 6,
      title: 'Outlast',
      description: 'Investigate Mount Massive Asylum as Miles Upshur the mystery behind Murkoffs sadistic expiriments.',
      imageUrl: 'https://cdn1.epicgames.com/offer/78f42129096d4233bccc527733debfbd/EGS_Outlast_RedBarrels_S1_2560x1440-00bcfe36f1adad2b9168add0a137fbc2',
      price: '$29.99',
    },
    {
      id: 7,
      title: 'Left 4 Dead',
      description: 'Left 4 Dead is a thrilling cooperative first-person shooter where players team up to survive hordes of relentless zombies in a post-apocalyptic world.',
      imageUrl: 'https://store-images.s-microsoft.com/image/apps.21180.68505604187334199.d924c1a8-5b21-47f3-80d8-977e91a992b7.5a8e1c49-ad5d-48eb-bacd-5ad73f122e2e?q=90&w=480&h=270',
      price: '$20.00',
    },
    {
      id: 8,
      title: 'League of Legends',
      description: 'League of Legends is a competitive online multiplayer game where teams of champions battle it out in intense strategic matches to destroy the enemys Nexus and claim victory.',
      imageUrl: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3',
      price: 'Free',
    },
    {
      id: 9,
      title: 'Skyrim',
      description: 'Skyrim is an epic open-world fantasy game where players embark on a heroic journey through a vast and immersive world filled with dragons, ancient ruins, and limitless adventures.',
      imageUrl: 'https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg',
      price: '$30.99',
    },
  ];

  return (
    <div>
      <CustomNav />
      <div className="home">
        <h2 className="home__title">Welcome {username} to the Video Game Homepage</h2>
        <p className="home__subtitle">Check out these awesome video games:</p>
        <div className="games">
          {games.map((game) => (
            <div key={game.id} className="game">
              <img src={game.imageUrl} alt={game.title} className="game__image" />
              <div className="game__details">
                <h3 className="game__title">{game.title}</h3>
                <p className="game__description">{game.description}</p>
                <p className="game__price">{game.price}</p>
                <button className="game__buy-button">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;