import React from 'react';
import { userData } from '../../helpers';
import CustomNav from '../CustomNav';
import './Homepage.css'; // Import the custom CSS file for styling

const Homepage = () => {
    const{username} = userData();
  const games = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'Explore the vast open world of Hyrule.',
      imageUrl: 'https://example.com/zelda.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      description: 'Embark on an epic Wild West adventure.',
      imageUrl: 'https://example.com/red-dead-redemption.jpg', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Fortnite',
      description: 'Battle against other players in a fast-paced online multiplayer game.',
      imageUrl: 'https://example.com/fortnite.jpg', // Replace with actual image URL
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
